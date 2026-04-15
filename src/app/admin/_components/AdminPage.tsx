"use client"

import IconDefault from "@/_components/icons/IconDefault"
import AdminCard from "./cards/AdminCard"
import { AdminNavData } from "../_data/sample/AdminNavData"
import { AdminColorsData } from "../_data/sample/AdminColorsData"

export default function AdminPage() {
  return (
    <>
    <main className="w-full pt-16">
        <section className="container__primary">
            <h1 className="text-3xl font-bold text-gray-700 border-b border-gray-300 pb-2">
                Admin Dashboard
            </h1>
            <div className="w-full grid grid-cols-4 gap-6 pt-6">
                
                {AdminNavData.map((i, key) => (
                    <AdminCard 
                        key={key}
                        href={i.href} 
                        name={i.name}
                        css={AdminColorsData[key]} 
                        icon={i.icon} />
                ))}

            </div>
        </section>
    </main>
    </>
  )
}

