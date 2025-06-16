import NavLinks from '@/app/ui/dashboard/nav-links'
import Logo from '../logo'
import { signOut } from '@/auth'
import { PowerIcon } from '@heroicons/react/24/outline'

export default function SideNav() {
	return (
		<div className='flex h-full flex-col bg-gray-100 p-2'>
			{/* 1. Логотип */}
			<Logo />

			{/* 2. Навигация с отступом 4px */}
			<div className='flex-grow mt-2'>
				<NavLinks />
			</div>

			{/* 3. Кнопка выхода внизу */}
			<div>
				<form
					action={async () => {
						'use server'
						await signOut({ redirectTo: '/' })
					}}
				>
					<button className='h-[48px] flex w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3'>
						<PowerIcon className='w-6' />
						<div className='hidden md:block'>Выход</div>
					</button>
				</form>
			</div>
		</div>
	)
}
