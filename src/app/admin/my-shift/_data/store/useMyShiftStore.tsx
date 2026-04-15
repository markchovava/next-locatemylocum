"use client"

import { create } from "zustand"
import { MyShiftEntity, MyShiftInterface } from "../entity/MyShiftEntity"


interface SearchFieldsInterface{
    company: string
    startDate: string
    endDate: string
}

const SearchFieldsEntity: SearchFieldsInterface = {
    company: '',
    startDate: '',
    endDate: '',
}

interface Props{
    data: MyShiftInterface
    search: string
    isSearching: boolean
    errors: MyShiftInterface
    dataList: MyShiftInterface[]
    category: string
    searchFields: SearchFieldsInterface
    setSearchFieldsValue: (name: string, value: string) => void
    setCategory: (i: string) => void
    setSearch: (i: string) => void
    clearErrors: () => void
    resetData: () => void
    setIsSearching: (i: boolean) => void
    setValue: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
}

export const useMyShiftStore = create<Props>((set, get) => ({ 
    data: MyShiftEntity,
    search: '',
    isSearching: false,
    errors: MyShiftEntity,
    dataList: [],
    category: 'For You',
    searchFields: SearchFieldsEntity,
    setSearchFieldsValue: (name, value) => {
        const fields = get().searchFields
        set({
            searchFields: {...fields, [name]: value},
        })
    },
    setCategory: (i) => {
        set({ category: i })
    },
    setSearch: (i) => {
        set({ search: i })
    },
    clearErrors: () => {
        set({ errors: MyShiftEntity })
    },
    resetData: () => {
        set({ data: MyShiftEntity })
    },
    setIsSearching: (i) => {
        set({ isSearching: i })
    },
    setValue: (name, value) => {
        const current = get().data
        set({
            data: {...current, [name]: value}
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
}))