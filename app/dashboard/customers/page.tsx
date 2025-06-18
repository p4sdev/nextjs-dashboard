import { lusitana } from '@/app/ui/fonts'
import { CustomersTable } from '@/app/ui/customers/table'
import { fetchFilteredCustomers } from '@/app/lib/data'
import { fetchCustomersPages } from '@/app/lib/data'
import { Suspense } from 'react'
import Search from '@/app/ui/search'
import Pagination from '@/app/ui/customers/pagination'
import { CustomersTableSkeleton } from '@/app/ui/skeletons'

export default async function Page(props: {
	searchParams?: Promise<{
		query?: string
		page?: string
	}>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query || ''
	const currentPage = Number(searchParams?.page) || 1
	const customer = await fetchFilteredCustomers(query)
	const totalPages = await fetchCustomersPages(query)
	return (
		<div>
			<h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
				Клиенты
			</h1>
			<Search placeholder='Поиск клиента...' />
			<Suspense>
				<CustomersTable
					query={query}
					currentPage={currentPage}
					customer={customer}
				/>
				<Suspense
					key={query + currentPage}
					fallback={<CustomersTableSkeleton />}
				></Suspense>
			</Suspense>
			<div className='mt-5 flex w-full justify-center'>
				<Pagination totalPages={totalPages} />
			</div>
		</div>
	)
}
