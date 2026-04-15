import BreadCrumb from '@/components/breadcrumbs/BreadCrumb'
import AdminHeader from '../_components/headers/AdminHeader'
import ShiftPage from './_components/ShiftPage'



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'Find Shifts', href: '/admin/shift'},
]

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <AdminHeader />
        <BreadCrumb data={CrumbsData} />

        <ShiftPage />
       
    </main>
  )
}
