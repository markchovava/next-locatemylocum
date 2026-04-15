"use client"
import IconDefault from '@/components/icons/IconDefault'
import Link from 'next/link'


interface Props{
    href: string
    name: string
    icon: string
    css: string
}

export default function AdminCard({ 
    href, 
    name, 
    icon,
    css,
}: Props) {
  return (
    <>
    <Link href={href}>
        <div className={`${css} flex cursor-pointer ease-in-out duration-200 items-center justify-start drop-shadow 
            hover:drop-shadow-xl text-white rounded-xl p-4`}>
            <div className="w-[30%] h-20 items-center justify-center flex">
                <IconDefault type={icon} css='text-4xl' />
            </div>
            <div className="w-[70%] flex items-center justify-start border-l px-4 border-gray-300">
                <h2 className="text-2xl font-bold ">{name}</h2>
            </div>
        </div>
    </Link>
    </>
  )
}
