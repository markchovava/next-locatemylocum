import Header from '@/app/(main)/_components/headers/AuthHeader'
import LoginPage from './_components/LoginPage'
import AuthFooter from '@/app/(main)/_components/footers/AuthFooter'



export default function page() {
  return (
    <>
    <main className="w-full min-h-screen flex flex-col">
        <Header />

        <LoginPage />

        <AuthFooter />
    </main>
    </>
  )
}
