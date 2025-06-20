import LoginForm from '@/app/ui/login-form'
import Logo from '@/app/ui/logo'
import { Suspense } from 'react'

export default function LoginPage() {
	return (
		<main className='flex items-center justify-center md:h-screen'>
			<div>
				<div className='flex w-full items-center justify-center rounded-lg p-3 md:h-36'>
					<Logo />
				</div>
				<Suspense>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	)
}
