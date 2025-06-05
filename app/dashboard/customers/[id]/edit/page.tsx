// app/users/[id]/edit/page.tsx
import { prisma } from '@/app/lib/prisma'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

type Props = {
	params: Promise<{ id: string }>
}

export default async function EditUserPage({ params }: Props) {
	const user = await prisma.user.findUnique({
		where: { id: params },
	})

	if (!user) return notFound()

	async function handleSubmit(formData: FormData) {
		'use server'

		const email = formData.get('email')?.toString()
		const avatar = formData.get('avatar_url')?.toString()

		if (!email) return

		await prisma.user.update({
			where: { id: user.id },
			data: { email, avatar_url: avatar || null },
		})

		revalidatePath('/users')
		redirect('/users')
	}

	return (
		<div className='max-w-md mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-4'>✏️ Редактировать пользователя</h1>

			<form action={handleSubmit} className='space-y-4'>
				<div>
					<label className='block text-sm font-medium mb-1'>Email</label>
					<input
						type='email'
						name='email'
						defaultValue={user.email}
						className='w-full border rounded px-3 py-2'
						required
					/>
				</div>

				<div>
					<label className='block text-sm font-medium mb-1'>Avatar URL</label>
					<input
						type='text'
						name='avatar_url'
						defaultValue={user.avatar_url || ''}
						className='w-full border rounded px-3 py-2'
					/>
				</div>

				<button
					type='submit'
					className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
				>
					💾 Сохранить
				</button>
			</form>
		</div>
	)
}
