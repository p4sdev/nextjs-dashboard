import LoginForm from '@/app/ui/login-form'
import Logo from '@/app/ui/logo'
import { Suspense } from 'react'

export default function LoginPage() {
	return (
		<main className='flex items-center justify-center md:h-screen mt-20'>
			<div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
				<div className='flex h-20 w-full items-center justify-center rounded-lg bg-gray-100 p-3 md:h-36'>
					<Logo />
				</div>
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	)
}
