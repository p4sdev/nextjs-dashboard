import { BoltIcon, GlobeAltIcon, RectangleGroupIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Logo() {
	return (
		<div className='flex items-center justify-center h-[100px]'>
			<Link href='/'>
				<RectangleGroupIcon className='inline size-12 text-blue-600 rotate-[95deg] hover:rotate-[115deg] transition ease-in-out hover:text-orange-300 duration-700 hover:scale-125' />
			</Link>
		</div>
	)
}
