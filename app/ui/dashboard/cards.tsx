import { fetchCardData } from '@/app/lib/data'
import {
	BanknotesIcon,
	ClockIcon,
	UserGroupIcon,
	InboxIcon,
} from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import { formatCurrency } from '@/app/lib/utils'

const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
}

export default async function CardWrapper() {
	const {
		numberOfInvoices,
		numberOfCustomers,
		totalPaidInvoices,
		totalPendingInvoices,
	} = await fetchCardData()
	return (
		<>
			<Card
				title='Получено'
				value={formatCurrency(totalPaidInvoices)}
				type='collected'
			/>
			<Card
				title='В ожидании'
				value={formatCurrency(totalPendingInvoices)}
				type='pending'
			/>
			<Card title='Всего заказов' value={numberOfInvoices} type='invoices' />
			<Card
				title='Всего пользователей'
				value={numberOfCustomers}
				type='customers'
			/>
		</>
	)
}

export function Card({
	title,
	value,
	type,
}: {
	title: string
	value: number | string
	type: 'invoices' | 'customers' | 'pending' | 'collected'
}) {
	const Icon = iconMap[type]

	return (
		<div className='rounded-xl bg-gray-50 p-2 shadow-sm'>
			<div className='flex p-4'>
				{Icon ? <Icon className='h-5 w-5 text-gray-700' /> : null}
				<h3 className='ml-2 text-sm font-medium'>{title}</h3>
			</div>
			<p
				className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
			>
				{value}
			</p>
		</div>
	)
}
