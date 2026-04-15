import BreadCrumb from "@/_components/breadcrumbs/BreadCrumb"
import AdminHeader from "../_components/headers/AdminHeader"
import MyDiaryPage from "./_components/MyDiaryPage"




const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Admin', href: '/admin'},
    {id: 3, name: 'My Diary', href: '/admin/my-diary'},
]

export default function page() {
  return (
    <main className="w-full min-h-screen flex flex-col">
        <AdminHeader />
        <BreadCrumb data={CrumbsData} />

        <MyDiaryPage />
        
    </main>
  )
}
