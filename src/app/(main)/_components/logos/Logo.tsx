"use client"
import Link from 'next/link'


export default function Logo() {
  return (
    <Link href='/'>
      <h1 className="font-bold text-xl uppercase">Locate My Locum</h1>
    </Link>
  )
}
