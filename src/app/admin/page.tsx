import BreadCrumb from '@/_components/breadcrumbs/BreadCrumb'
import AdminHeader from './_components/headers/AdminHeader'
import AdminPage from './_components/AdminPage'


const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Dashboard', href: '/admin'},
]

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <AdminHeader />
        <BreadCrumb data={CrumbsData} />

        <AdminPage />
       
    </main>
  )
}
