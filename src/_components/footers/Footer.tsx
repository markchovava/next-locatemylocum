import Logo from '@/app/(main)/_components/logos/Logo'
import Link from 'next/link'
import IconDefault from '../icons/IconDefault'
import { CompanyNavData, IndustryNavData, LegalNavData, SocialNavData } from '@/app/(main)/_data/sample/NavData'



export default function Footer() {
  return (
    <footer className='text-gray-50 bg-green-950 pt-16 pb-10'>
        <section className='container__primary grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-12 pb-10 border-b border-b-green-800'>
            <div>
                <h3 className='text-xl font-medium mb-4'>Our Company</h3>
                <ul className='flex text-sm items-start justify-center flex-col gap-3'>
                    {CompanyNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <li className='border-b border-transparent hover:border-gray-50'>
                                {i.name}
                            </li>
                        </Link>
                    ))} 
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-medium mb-4'>Industry</h3>
                <ul className='flex text-sm items-start justify-center flex-col gap-3'>
                    {IndustryNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <li className='border-b border-transparent hover:border-gray-50'>
                                {i.name}
                            </li>
                        </Link>
                    ))} 
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-medium mb-4'>Legal</h3>
                <ul className='flex text-sm items-start justify-center flex-col gap-3'>
                    {LegalNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <li className='border-b border-transparent hover:border-gray-50'>
                                {i.name}
                            </li>
                        </Link>
                    ))} 
                </ul>
            </div>
            <div>
                <Logo />
                <p className='font-light'>Getting you working.</p>
                <div className='mt-6 flex flex-wrap items-center justify-start gap-3'>
                    {SocialNavData.map((i, key) => (
                        <Link key={key} href={i.href}>
                            <IconDefault 
                                type={i.slug} 
                                css='text-lg hover:scale-110 ease-in-out transition-all duration-200' 
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
        {/*  */}
        <section className='container__primary flex items-center justify-end pt-2'>
            <p className='text-end font-light text-xs text-gray-200'>
                Website Maintained by FL Designers © {new Date().getFullYear()}
            </p>
        </section>
    </footer>
  )
}
