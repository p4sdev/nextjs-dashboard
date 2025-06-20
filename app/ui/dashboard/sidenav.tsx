import NavLinks from '@/app/ui/dashboard/nav-links'
import Logo from '../logo'
import { signOut } from '@/auth'
import { PowerIcon } from '@heroicons/react/24/outline'

export default function SideNav() {
	return (
		<div id='parent' className='flex h-full flex-col p-2 bg-gray-100'>
			<div id='logo' className='mb-2'>
				<Logo />
			</div>
			<div id='nav_link' className='flex-grow'>
				<NavLinks />
			</div>
			<div id='exit_button'>
				<form
					action={async () => {
						'use server'
						await signOut({ redirectTo: '/' })
					}}
				>
					<button className='bg-gray-50 transition ease-in-out duration-500 hover:scale-110 h-[48px] flex w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:justify-start md:p-2 md:px-3'>
						<PowerIcon className='w-6' />
						<div className='hidden md:block'>Выход</div>
					</button>
				</form>
			</div>
		</div>
	)
}
