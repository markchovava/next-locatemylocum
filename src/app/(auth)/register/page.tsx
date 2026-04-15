
import RegisterPage from './_components/RegisterPage'
import AuthHeader from '@/app/(main)/_components/headers/AuthHeader'



export default function page() {
  return (
    <>
    <main className="w-full min-h-screen flex flex-col">
        <AuthHeader />

        <RegisterPage />

       
    </main>
    </>
  )
}
