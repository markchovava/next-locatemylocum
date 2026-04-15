"use client"

import Link from "next/link"
import Title from "../../_components/titles/Title"
import TitleSecondary from "../../_components/titles/TitleSecondary"
import { MyFinanceCategoryData } from "../_data/sample/MyFinanceData"




export default function MyFinancePage() {
  const title = 'My Finance'

  return (
    <main className="pt-16 pb-20">
      <section className="container__primary">
        <Title name={title} css="mb-2 text-gray-700 border-b border-gray-300 mb-2 pb-1" />
      </section>

      <section className="container__primary bg-white drop-shadow-lg grid lg:grid-cols-5 grid-cols-1">
        {/*  */}
        <div className="col-span-1 border-r border-gray-300 py-6 px-5">
            <MyFinanceAside />
        </div>
        {/*  */}
        <div className="lg:col-span-4 col-span-1 py-6 px-5">
            <TitleSecondary name='Bank Account Details' css="mb-8 text-gray-700" />

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">Currency:</p>
              <p className="text-gray-800">USD ($)</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">Bank Name:</p>
              <p className="text-gray-800">CBZ Holdings</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">Account Holder:</p>
              <p className="text-gray-800">Simone Doe</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">Account Number:</p>
              <p className="text-gray-800">12342436ZX7</p>
            </div>

            <div className="bg-green-50 my-4 px-4 py-4">
                <p className="text-sm font-medium text-gray-600">Account Number:</p>
                <p className="text-gray-800">
                  Updating your details can take up to two weeks to be processed.
                </p>
                <p className="text-green-800 text-lg font-medium">
                  PLEASE DO NOT SUBMIT MORE THAN ONCE.
                </p>
            </div>

            <div className="mb-4">
              <Link href='#' className="flex">
                <p className="border-b-2 border-green-700 text-green-700 hover:border-transparent font-medium">
                  Update your bank details by clicking here.
                </p>
              </Link>
            </div>
           


        </div>
      </section>
    </main>
  )
}



function MyFinanceAside(){
    return(
        <ul className="space-y-3 w-full">
            {MyFinanceCategoryData.map((i, key) => (
                <li key={key} className="group cursor-pointer flex items-center justify-between">
                    <span className={`text-gray-700 border-b-2 border-transparent 
                        group-hover:text-green-800 group-hover:border-green-800`}>
                        {i.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}
