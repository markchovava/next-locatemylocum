"use client"
import Logo from '../logos/Logo'


export default function AuthHeader() {
  return (
    <header className="w-full bg-green-700 text-white py-4 border-b-6 drop-shadow-xl">
        <div className="container__primary flex items-center justify-between">
          <div>
              <Logo />
          </div>
        </div>
    </header>
  )
}
