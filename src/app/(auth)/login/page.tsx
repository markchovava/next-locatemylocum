import Header from '@/app/(main)/_components/headers/AuthHeader'
import LoginPage from './_components/LoginPage'



export default function page() {
  return (
    <>
    <main className="w-full min-h-screen flex flex-col">
        <Header />

        <LoginPage />

       
    </main>
    </>
  )
}
