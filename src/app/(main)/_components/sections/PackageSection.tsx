"use client"

import Title from "@/app/admin/_components/titles/Title"
import { PackageData } from "../../_data/sample/PackageData"
import IconDefault from "@/_components/icons/IconDefault"
import Link from "next/link"
import Button from "../buttons/Button"



export default function PackageSection() {
  return (
    <section className="w-full bg-gray-50 py-24">
        <div className="container__primary grid lg:grid-cols-2 gap-8">
            
            <div className="bg-white text-gray-700 drop-shadow-lg px-6 py-8">
                <Title name={PackageData.worker.title} css="text-green-700 mb-6" />
                <div>
                    <p className="text-lg mb-6">
                      {PackageData.worker.desc}
                    </p>
                    <ul className="space-y-4  text-lg mb-6">
                      {PackageData.worker.list.map((i, key) => (
                        <li key={key} className="flex items-center justify-start gap-2">
                          <IconDefault type="mark" css="text-xl text-green-800" />
                          {i}
                        </li>
                    
                      ))}
                    </ul>
                  <Link href={PackageData.worker.href}>
                    <Button name={PackageData.worker.btnTitle} />
                  </Link>
                </div>
            </div>

           <div className="bg-white text-gray-700 drop-shadow-lg px-6 py-8">
                <Title name={PackageData.organisation.title} css="text-green-700 mb-6" />
                <div>
                    <p className="text-lg mb-6">
                      {PackageData.organisation.desc}
                    </p>
                    <ul className="space-y-4  text-lg mb-6">
                      {PackageData.organisation.list.map((i, key) => (
                        <li key={key} className="flex items-center justify-start gap-2">
                          <IconDefault type="mark" css="text-xl text-green-800" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  <Link href={PackageData.organisation.href}>
                    <Button name={PackageData.organisation.btnTitle} />
                  </Link>
                </div>
            </div>
        </div>
      </section>
  )
}
