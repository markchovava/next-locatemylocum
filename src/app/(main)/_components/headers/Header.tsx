"use client"
import Link from 'next/link'
import Logo from '../logos/Logo'
import { MainNavData } from '../../_data/sample/NavData'
import HeaderResponsive from './HeaderResponsive'


export default function AuthHeader() {
  return (
    <>
    <header className="hidden lg:block w-full bg-green-800 text-white py-4 border-b-6 drop-shadow-xl">
        <div className="container__primary flex items-center justify-between">
           
            <Logo />

            <nav className='flex items-center justify-end gap-4'>
                <ul className='text-md font-medium flex items-center justify-start gap-4'>
                    {MainNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <li className='uppercase hover:text-amber-200'>{i.name}</li>
                        </Link>
                    ))}          
                </ul>
                <Link href='/login'>
                    <button className={`cursor-pointer font-medium uppercase hover:text-amber-200 
                        ease-in-out transition-all duration-200`}>
                        Login
                    </button>
                </Link>
                <Link href='/login'>
                    <button className={`uppercase text-sm font-medium cursor-pointer bg-amber-200 
                        hover:bg-amber-300 text-green-950 py-2 px-5 rounded-full`}>
                        Getting started
                    </button>
                </Link>
            </nav>
        </div>
    </header>

    <HeaderResponsive />
    </>
  )
}
