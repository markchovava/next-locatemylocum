import { create } from "zustand";
import { ShiftEntity, ShiftInterface } from "../entity/ShiftEntity";


export interface Props{
    data: ShiftInterface
    category: string
    isSearching: boolean
    errors: ShiftInterface
    dataList: ShiftInterface[]
    currentList: ShiftInterface[]
    setCategory: (i: string) => void
    setCurrentList: (a: string, i: ShiftInterface[]) => void
    setIsSearching: (i: boolean) => void
    setValue: (name: string, value: string) => void
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
}


export const useShiftStore = create<Props>((set, get) => ({ 
    data: ShiftEntity,
    category: "",
    isSearching: false,
    dataList: [],
    currentList: [],
    errors: ShiftEntity,
    setCategory: (i) => {
        set({
            category: i
        })
    },
    setCurrentList: (a, i) => {
        const list  = get().dataList.filter((item) => item.category === a)
        set({ 
            currentList: i 
        })
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