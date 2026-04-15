"use client"

import IconDefault from "@/components/icons/IconDefault"
import Title from "../../_components/titles/Title"
import DropDownInput from "../../_components/inputs/DropDownInput"
import { ProfessionalData } from "../../_data/sample/ProfessionData"
import TextInput from "../../_components/inputs/TextInput"
import { useShiftStore } from "../_data/store/useShiftStore"
import { CityData } from "../../_data/sample/CityData"
import Button from "@/app/(main)/_components/buttons/Button"
import ButtonSecondary from "../../_components/buttons/ButtonSecondary"
import { ShiftCategoryData } from "../_data/sample/ShiftData"
import TitleSecondary from "../../_components/titles/TitleSecondary"
import { SortData } from "../../_data/sample/SortData"
import { JobData } from "../../_data/sample/JobData"
import JobCard from "../../_components/cards/JobCard"
import { NoImageData } from "../../_data/sample/NoData"
import { formatDate } from "@/_utils/formatDate"
import ButtonPaginate from "@/components/buttons/ButtonPaginate"



export default function ShiftPage() {
    const { 
        category,
    } = useShiftStore()



  return (
    <main className="w-full pt-16 pb-20">
        <section className="container__primary">
            <ShiftForm 
                title="Find Shift" />

            <ShiftCategorySection />

            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                <TitleSecondary 
                    name={category ? category : 'Shifts'} css="mb-2 text-gray-700" />
                <select className="outline-none border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                    {SortData.map((option) => (
                        <option key={option.id} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-4 gap-8 py-6">
                {JobData.slice(0, 12).map((i, key) => (
                    <JobCard
                        key={key}
                        image={NoImageData}
                        company={i.company}
                        date={formatDate(i.startingDate)}
                        time={i.startTime + ' - ' + i.endTime}
                        location={i.location}
                        wage={i.wage}
                        total={'$' + Number(i.salary).toFixed(2)}
                    />
                ))}

            </div>

            <div className="flex items-center justify-end gap-4">
                <ButtonPaginate btnType="prev" />
                <ButtonPaginate btnType="next" />
            </div>

        </section>
    </main>
  )
}



function ShiftCategorySection(){
     const { 
        category,
        setCategory,
    } = useShiftStore()

    return(
        <section className="flex items-center justify-center gap-4 my-16">
            {ShiftCategoryData.map((i, key) => (
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

function ShiftForm({ title }: pInterface) {
    const { 
        data, 
        isSearching,
        setIsSearching,
        setInputValue, 
        setValue 
    } = useShiftStore()

    return (
        <div className="w-full bg-white drop-shadow-lg rounded-xl py-8 px-8 ">
            <Title name={title} css="mb-2 text-gray-700" />
            <div className="relative grid grid-cols-7 gap-4">
                <div className="col-span-2">
                    <DropDownInput 
                        data={ProfessionalData}
                        value={data.profession}
                        onChange={(name: string) => setValue('profession', name)}
                    />
                </div>
                <div className="col-span-2">
                    <TextInput
                        css="h-12 text-gray-700 py-2 px-3"
                        name="date"
                        type="date"
                        value={data.date}
                        placeholder="Enter Date here."
                        onChange={setInputValue}
                    />
                </div>
                <div className="col-span-2">
                    <DropDownInput 
                        data={CityData}
                        value={data.city}
                        onChange={(name: string) => setValue('city', name)}
                    />
                </div>
                <div className="col-span-1">
                    <Button type='button'
                        name='Search'
                        css="h-12 w-full rounded-xl"
                        status={isSearching}
                    />
                </div>
            </div>
        </div>
    )
}
