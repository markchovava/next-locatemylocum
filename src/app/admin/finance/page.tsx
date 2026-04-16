import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import AdminHeader from "../_components/headers/AdminHeader"
import FinancePage from "./_components/FinancePage"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'My Finance', href: '/admin/finance'},
]

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <AdminHeader />
        <BreadCrumb data={CrumbsData} />

        <FinancePage />
        
    </main>
  )
}
