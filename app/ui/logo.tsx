import { geistMono } from './fonts'
import { RectangleGroupIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Logo() {
	return (
		<div className='flex items-center justify-center'>
			<Link href='/'>
				<RectangleGroupIcon className='size-12 rotate-[95deg] hover:rotate-[105deg] transition ease-in-out hover:text-orange-300 duration-700 hover:scale-125' />
			</Link>
			<h1 className={`${geistMono.className} text-3xl`}>панелька</h1>
		</div>
	)
}
