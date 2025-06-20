import { geistMono } from './fonts'
import { RectangleGroupIcon } from '@heroicons/react/24/solid'

export default function Logo() {
	return (
		<div className='h-[100px] flex items-center justify-center'>
			<RectangleGroupIcon className='size-10 rotate-[95deg]' />
			<h1 className={`${geistMono.className} font-bold text-3xl`}>панелька</h1>
		</div>
	)
}
