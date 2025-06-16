import CustomersTable from '@/app/ui/customers/table'
import { fetchFilteredCustomers } from '@/app/lib/data'
import { Suspense } from 'react'

export default async function Page() {
	const customers = await fetchFilteredCustomers('')
	return (
		<Suspense>
			<CustomersTable customers={customers} />
		</Suspense>
	)
}
