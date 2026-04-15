"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import DropDownInput from "../../_components/inputs/DropDownInput"
import TextInput from "../../_components/inputs/TextInput"
import Title from "../../_components/titles/Title"
import { CompanyData } from "../../company/_data/sample/CompanyData"
import { MyShiftCategoryData, MyShiftData } from "../_data/sample/MyShiftData"
import { useMyShiftStore } from "../_data/store/useMyShiftStore"
import ButtonSecondary from "../../_components/buttons/ButtonSecondary"
import IconDefault from "@/components/icons/IconDefault"
import Link from "next/link"
import ButtonPaginate from "@/components/buttons/ButtonPaginate"
import { formatDate } from "@/_utils/formatDate"



export default function MyShiftPage() {
    const title = 'My Shifts'
    const companyList: string[] = CompanyData.map((company) => company.name);
    const {
        searchFields, 
        isSearching, 
        setSearchFieldsValue, 
        setIsSearching
    } = useMyShiftStore()

  return (
    <>
    <main className="pt-16 pb-20">
        <section className="container__primary">
            <Title name={title} css="mb-2 text-gray-700 border-b border-gray-300 mb-2 pb-1" />
        </section>

        <section className="container__primary bg-white drop-shadow-lg grid lg:grid-cols-5 grid-cols-1">
            <div className="col-span-1 border-r border-gray-300 py-6 px-5">
                {/*  */}
                <MyShiftAside />
            </div>
            <div className="lg:col-span-4 col-span-1 py-6 px-5">
                
                <MyShiftForm />

                <MyShiftTable />

            </div>

        </section>
    </main>
    </>
  )
}


function MyShiftTable(){
    return(
        <>
        <section className="lg:block hidden">
            <div className="bg-gray-600 text-white font-medium grid grid-cols-9">
                <div className="col-span-2 px-2 py-1 border-r border-gray-300">DATE</div>
                <div className="col-span-1 px-2 py-1 border-r border-gray-300">STATUS</div>
                <div className="col-span-1 px-2 py-1 border-r border-gray-300">TIME</div>
                <div className="col-span-2 px-2 py-1 border-r border-gray-300">COMPANY</div>
                <div className="col-span-3 px-2 py-1">ADDRESS</div>
            </div>

            {MyShiftData.map((i, key) => (
                <div key={key} className="border-b border-x border-gray-300 text-gray-900 grid grid-cols-9 text-sm">
                    <div className="col-span-2 px-2 py-1.5 border-r border-gray-300 ">
                        <Link href='#' className="group">
                            <p className="flex items-center justify-start gap-2">
                                <span className={`cursor-pointer border-b border-transparent 
                                    group-hover:text-green-800 group-hover:border-green-800`}>
                                    {formatDate(i.date)}
                                </span> 
                                <IconDefault type='link' css='text-normal group-hover:text-green-800' />
                            </p>
                        </Link>
                    </div>
                    <div className="col-span-1 px-2 py-1.5 border-r border-gray-300">
                        {i.status}</div>
                    <div className="col-span-1 px-2 py-1.5 border-r border-gray-300">
                        {i.time}</div>
                    <div className="col-span-2 px-2 py-1.5 border-r border-gray-300">
                        {i.company}</div>
                    <div className="col-span-3 px-2 py-1">
                        {i.address}</div>
                </div>
            ))}

        </section>

        <section className="block lg:hidden">
            <div className="space-y-5">
                {MyShiftData.map((i, key) => (
                    <div key={key} className="p-4 text-gray-700 rounded-lg border border-gray-300 space-y-3">
                        <div>
                            <p className="text-xs">Date:</p>
                            <Link href='#' className="group">
                                <p className="flex items-center justify-start gap-2">
                                    <span className={`cursor-pointer border-b border-transparent 
                                        group-hover:text-green-800 group-hover:border-green-800`}>
                                        {formatDate(i.date)}
                                    </span> 
                                    <IconDefault type='link' css='text-normal group-hover:text-green-800' />
                                </p>
                            </Link>
                        </div>
                        <div>
                            <p className="text-xs">Date:</p>
                            <p>Status</p>
                        </div>
                        <div>
                            <p className="text-xs">Time:</p>
                            <p>{i.time}</p>
                        </div>
                        <div>
                            <p className="text-xs">Company:</p>
                            <p>{i.company}</p>
                        </div>
                        <div>
                            <p className="text-xs">Address:</p>
                            <p>{i.address}</p>
                        </div>
                        
                    </div>
                ))}
            </div>

        </section>

        <div className="flex items-center justify-end gap-4 mt-6 ">
            <ButtonPaginate btnType="prev" />
            <ButtonPaginate btnType="next" />
        </div>
       
        </>
    )
}


function MyShiftForm(){
    const companyList: string[] = CompanyData.map((company) => company.name);
    const {
        searchFields, 
        isSearching, 
        setSearchFieldsValue, 
        setIsSearching
    } = useMyShiftStore()
    return(
        <div className="grid lg:grid-cols-6 gap-3 mb-6">
            <div className="lg:col-span-2">
                <DropDownInput
                    label="Company"
                    data={companyList} 
                    value={searchFields.company}
                    onChange={(e) => setSearchFieldsValue('company', e)}
                />
            </div>
            <div className="lg:col-span-1">
                <TextInput 
                    css="h-12 px-3 text-gray-700"
                    label="Starting Date"
                    type="date"
                    placeholder="" 
                    name="startDate" 
                    value={searchFields.startDate} 
                    onChange={(e) => setSearchFieldsValue('startDate', e.target.value)}
                />
            </div>
            <div className="lg:col-span-1">
                <TextInput 
                    label="Ending Date"
                    type="date"
                    placeholder="" 
                    name="endDate" 
                    css="h-12 px-3 text-gray-700"
                    value={searchFields.endDate} 
                    onChange={(e) => setSearchFieldsValue('endDate', e.target.value)}
                />
            </div>
            <div className="lg:col-span-1 lg:mt-6">
                <ButtonSecondary name="Reset" css="h-12 rounded-xl w-full hover:text-white hover:bg-green-700" />
            </div>
            <div className="lg:col-span-1 lg:mt-6">
                <Button name="Search" css="h-12 rounded-xl w-full" />
            </div>
        </div>
    )
}


function MyShiftAside(){
    return(
        <ul className="space-y-3 w-full">
            {MyShiftCategoryData.map((i, key) => (
                <li key={key} className="group cursor-pointer flex items-center justify-between">
                    <span className={`text-gray-700 border-b-2 border-transparent 
                        group-hover:text-green-800 group-hover:border-green-800`}>
                        {i.name}
                    </span>
                    <span className="group-hover:text-green-900">
                        [{i.count}]
                    </span>
                </li>
            ))}
        </ul>
    )
}
 