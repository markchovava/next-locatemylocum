"use client"

import IconDefault from "@/_components/icons/IconDefault"
import { useState } from "react"



interface Props{
    data: any[]
    value: string
    label?: string
    onChange: (name: string) => void
}

export default function DropDownInput({ 
    data, 
    value,
    label,
    onChange,
}: Props) {
    const [current, setCurrent] = useState( value || "Select an option" )
    const [isOpen, setIsOpen] = useState(false)


    const handleSelect = (i: string) => {
        setCurrent(i)
        setIsOpen(false)
        onChange(i)
    } 

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
    <div className="w-full relative text-gray-700">

        {label &&
          <p className="font-medium text-sm text-gray-700 mb-1">
            {label}:
          </p>
        }
        
        <button onClick={toggleOpen} className="cursor-pointer h-12  w-full border border-gray-300 rounded-xl grid grid-cols-10">
            <div className="col-span-9 h-full pl-3 pr-2 text-start flex items-center justify-start">
                {current}
            </div>
            <div className="col-span-1 h-full flex items-center justify-center border-l border-gray-200">
                <IconDefault type="down" css="text-gray-500" />
            </div>
        </button>
        
        {isOpen &&
            <ul className="border h-40 overflow-y-auto border-gray-300 absolute z-50 w-full bg-white drop-shadow-lg top-[110%] rounded-xl overflow-hidden">
                {data.map((i, key) => (
                    <li key={key}
                        onClick={() => handleSelect(i)}
                        className="cursor-pointer h-12 border-b border-gray-200 w-full hover:bg-gray-50 px-3 flex items-center justify-start">
                        {i}
                    </li>
                ))}
            </ul>
        }
    </div>
    </>
  )
}
