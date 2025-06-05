// app/api/users/[id]/route.ts
import { prisma } from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

type Params = { params: { id: string } }

export async function POST(req: Request, { params }: Params) {
	const formData = await req.formData()
	const method = formData.get('_method')

	if (method === 'DELETE') {
		try {
			await prisma.user.delete({
				where: { id: params.id },
			})

			return NextResponse.redirect(new URL('/users', req.url))
		} catch (error) {
			return NextResponse.json(
				{ error: 'Не удалось удалить пользователя' },
				{ status: 500 }
			)
		}
	}

	return NextResponse.json(
		{ error: 'Метод не поддерживается' },
		{ status: 405 }
	)
}
