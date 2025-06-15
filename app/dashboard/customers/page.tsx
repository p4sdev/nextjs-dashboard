import CustomersTable from '@/app/ui/customers/table'
import { fetchFilteredCustomers } from '@/app/lib/data'

export default async function Page() {
	const customers = await fetchFilteredCustomers('')

	const table = await CustomersTable({ customers })

	return <div>{table}</div>
}
