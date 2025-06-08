// app/users/page.tsx
import { prisma } from '@/app/lib/prisma'
import { User } from 'next-auth'
import Link from 'next/link'
import { Button } from '@/app/ui/button'
import { lusitana } from '@/app/ui/fonts'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'

export default async function UsersPage() {
	const users = await prisma.user.findMany()

	return (
		<div>
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
								<p>
									Имя: <span> {user.name}</span>
								</p>
								<p>
									Почта: <span className='text-blue-300'> {user.email}</span>
								</p>
								<p>
									id: <span className='text-blue-300'> {user.id?.split('-')[0]}</span>
								</p>
							</div>
						</div>

						<div className='flex gap-2'>
							<Link href={`/users/${user.id}/edit`}>
								<Button>
									<PencilIcon className='h-5 w-5' />
								</Button>
							</Link>
							<form action={`/api/users/${user.id}`} method='POST'>
								<input type='hidden' name='_method' value='DELETE' />
								<Button>
									<TrashIcon className='h-5 w-5' />
								</Button>
							</form>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
