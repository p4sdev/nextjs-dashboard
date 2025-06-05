// app/users/page.tsx
import { prisma } from '@/app/lib/prisma'
import { User } from '../../../generated/prisma'
import Link from 'next/link'
import { Button } from '@/app/ui/button'
import { lusitana } from '@/app/ui/fonts'

export default async function UsersPage() {
	const users = await prisma.user.findMany()

	return (
		<div className='p-6 space-y-6'>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Пользователи
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{users.map((user: User) => (
					<div
						key={user.id}
						className='p-4 border rounded-2xl shadow-sm flex items-center justify-between'
					>
						<div className='flex items-center gap-4'>
							<div>
								<p className='font-large'>{user.name}</p>
								<p className='font-small'>{user.email}</p>
								<p className='text-xs text-gray-500'>{user.id}</p>
							</div>
						</div>

						<div className='flex gap-2'>
							<Link href={`/users/${user.id}/edit`}>
								<Button>✏️</Button>
							</Link>
							<form action={`/api/users/${user.id}`} method='POST'>
								<input type='hidden' name='_method' value='DELETE' />
								<Button>🗑</Button>
							</form>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
