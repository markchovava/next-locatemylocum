"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import IconDefault from "@/_components/icons/IconDefault"
import ButtonSecondary from "../buttons/ButtonSecondary"


interface Props{
    image: string
    company: string
    date: string
    time: string
    location: string
    wage: string
    total?: string | number
}

export default function JobCard({ 
    image, 
    company,
    date, 
    time, 
    location, 
    wage, 
    total
}: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-white drop-shadow hover:drop-shadow-lg cursor-pointer">
        <div className="aspect-4/3 bg-gray-600 w-full">
            <img src={image} className="w-full h-full object-cover" alt='Image' />
        </div>
        <div className="px-3 pt-3 pb-5 text-green-800">
            <h6 className="font-medium text-gray-700">{company}</h6>
            <h2 className="text-xl font-medium leading-tight">
                {date}
            </h2>
            <p className="text-gray-700 mb-2">{time}</p>
            <div className="flex items-start justify-start mb-2">
                <IconDefault type="location" css="text-green-900 text-xl mt-1 mr-1" />
                <p className="text-green-900">{location}</p> 
            </div>
            <h6 className="font-bold text-2xl text-green-700 ">{wage}</h6>
            <p className="text-gray-700 mb-3">Total: {total}</p>
            <div className="space-y-3">
                <Button name="Book Now" css="w-full rounded-full py-3" />
                <ButtonSecondary name="View More" css="w-full rounded-full py-2 hover:bg-green-700 hover:text-white" />

            </div>
        </div>
    </div>
  )
}
