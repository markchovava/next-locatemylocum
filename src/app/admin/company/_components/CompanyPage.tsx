"use client"

import Button from "@/app/(main)/_components/buttons/Button"
import TextInput from "../../_components/inputs/TextInput"
import Title from "../../_components/titles/Title"
import { useCompanyStore } from "../_data/store/useCompanyStore"
import { CompanyCategoryData, CompanyData } from "../_data/sample/CompanyData"
import ButtonSecondary from "../../_components/buttons/ButtonSecondary"
import TitleSecondary from "../../_components/titles/TitleSecondary"
import { SortData } from "../../_data/sample/SortData"
import CompanyCard from "../../_components/cards/CompanyCard"
import { NoImageData } from "../../_data/sample/NoData"
import ButtonPaginate from "@/_components/buttons/ButtonPaginate"



export default function CompanyPage() {
    const {
        data, 
        search,
        isSearching, 
        category,
        setSearch, 
        setIsSearching
    } = useCompanyStore()
  
    return (
    <>
    <main className="pt-16 pb-20">
        <CompanyForm title="Search Company" />

        <CompanyCategorySection />

        <section className="w-full">
            <div className="container__primary flex items-center justify-between border-b border-gray-300 pb-2">
                <TitleSecondary 
                    name={category ? category : 'Companies'} css="mb-2 text-gray-700" />
                <select className="outline-none border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                    {SortData.map((option) => (
                        <option key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        </section>

        <div className="container__primary grid lg:grid-cols-4 gap-8 py-6">
            {CompanyData.slice(0, 12).map((i, key) => (
                <CompanyCard
                    key={key}
                    image={NoImageData}
                    name={i.name}
                    phone={i.phone}
                    email={i.email}
                    address={i.address}
                    shifts={i.locumJobs}
                />
            ))}
        </div>

        <div className="container__primary flex items-center justify-end gap-4 mt-6 ">
            <ButtonPaginate btnType="prev" />
            <ButtonPaginate btnType="next" />
        </div>

    </main>
    </>
  )
}


function CompanyCategorySection(){
     const { 
        category,
        setCategory,
    } = useCompanyStore()

    return(
        <section className="flex items-center justify-center gap-4 my-16">
            {CompanyCategoryData.map((i, key) => (
                <ButtonSecondary 
                    key={key} 
                    name={i.name} 
                    css={`${category === i.name ? 'text-white bg-green-700' : ''} py-2.5 px-10 hover:bg-green-700 hover:text-white`}
                    onClick={() => setCategory(i.name)}
                />
            ))}
        </section>
    )
}



interface pInterface{
    title: string
}

function CompanyForm({ 
    title 
}: pInterface) {
    const {
        data, 
        search,
        isSearching, 
        setSearch, 
        setIsSearching
    } = useCompanyStore()

    return(
        <section className="w-full">
            <div className="container__primary bg-white drop-shadow-lg rounded-xl py-8 px-8 ">
                <Title name={title} css="mb-2 text-gray-700" />
                <div className="grid lg:grid-cols-8 gap-4">
                    <div className="lg:col-span-7">
                        <TextInput 
                            type='text'
                            name='search'
                            css="h-12 px-3"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by Name."
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <Button type='button'
                            name='Search'
                            css="h-12 w-full rounded-xl"
                            status={isSearching}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
