"use client"

import { create } from "zustand"
import { CompanyEntity, CompanyInterface } from "../entity/CompanyEntity"



interface Props{
    data: CompanyInterface
    search: string
    isSearching: boolean
    errors: CompanyInterface
    dataList: CompanyInterface[]
    category: string
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

export const useCompanyStore = create<Props>((set, get) => ({ 
    data: CompanyEntity,
    search: '',
    isSearching: false,
    errors: CompanyEntity,
    dataList: [],
    category: 'All Companies',
    setCategory: (i) => {
        set({ category: i })
    },
    setSearch: (i) => {
        set({ search: i })
    },
    clearErrors: () => {
        set({ errors: CompanyEntity })
    },
    resetData: () => {
        set({ data: CompanyEntity })
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