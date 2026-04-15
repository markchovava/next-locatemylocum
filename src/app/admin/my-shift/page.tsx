import BreadCrumb from "@/components/breadcrumbs/BreadCrumb"
import AdminHeader from "../_components/headers/AdminHeader"
import MyShiftPage from "./_components/MyShiftPage"



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'My Shifts', href: '/admin/my-shift'},
]

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <AdminHeader />
        <BreadCrumb data={CrumbsData} />

        <MyShiftPage />
        
    </main>
  )
}
