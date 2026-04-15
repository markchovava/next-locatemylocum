"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import IconDefault from "@/_components/icons/IconDefault"
import ButtonSecondary from "../buttons/ButtonSecondary"


interface Props{
    image: string
    name: string
    phone: string
    address: string
    email: string

    shifts?: string | number
}

export default function CompanyCard({ 
    image, 
    name,
    phone,
    email,  
    address,  
    shifts
}: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-white drop-shadow hover:drop-shadow-lg cursor-pointer">
        <div className="aspect-4/3 bg-gray-600 w-full">
            <img src={image} className="w-full h-full object-cover" alt='Image' />
        </div>
        <div className="px-3 pt-3 pb-5 text-green-800">
            <h6 className="font-medium text-gray-700 mb-1">{name}</h6>
            <h2 className="text-lg font-medium leading-tight">
                {phone}
            </h2>
            <p className="text-gray-700 mb-2">{email}</p>
            <div className="flex items-start justify-start mb-2">
                <IconDefault type="location" css="text-green-900 text-xl mt-1 mr-1" />
                <p className="text-green-900">{address}</p> 
            </div>
            <p className="text-gray-700 mb-1">Open Shifts: {shifts}</p>
            <p className="text-gray-700 mb-3">Permanent Jobs: {shifts}</p>
            <div className="space-y-3">
                <ButtonSecondary 
                    name="View More" 
                    css="w-full rounded-full py-2 hover:bg-green-700 hover:text-white" />
            </div>
        </div>
    </div>
  )
}
