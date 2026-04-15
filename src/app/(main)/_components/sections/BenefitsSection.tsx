"use client"

import IconDefault from "@/_components/icons/IconDefault"
import { PackageBenefitsData } from "../../_data/sample/PackageData"



export default function BenefitsSection() {
  return (
    <section className="w-full py-24">
        <div className="container__primary grid lg:grid-cols-3 gap-6">
          {PackageBenefitsData.map((i, key) => (
            <div key={key} className="flex items-center justify-center flex-col">
              <IconDefault 
                type={i.iconType} 
                css="text-6xl text-green-700 mb-3" />
              <h6 className="text-2xl font-semibold text-gray-700 mb-2">
                {i.name}
              </h6>
              <p className="text-center px-4">
               {i.details}
              </p>
            </div>
          ))}

        </div>
      </section>
  )
}
