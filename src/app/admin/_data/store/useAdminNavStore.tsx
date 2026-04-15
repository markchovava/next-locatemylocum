"use client"
import { create } from "zustand"
import { AdminNavInterface } from "../entity/AdminNavEntity"
import { AdminRightNavData } from "../sample/AdminNavData"



interface Props{
    rightNavList: AdminNavInterface[]
    setRightNavList: (i: AdminNavInterface[]) => void
    setIsOpen: (b: boolean, i: AdminNavInterface) => void
}

export const useAdminNavStore = create<Props>((set, get) => ({
    rightNavList: AdminRightNavData,
    setRightNavList: (i) => {
        set({
            rightNavList: i
        })
    },
    setIsOpen: (bool, i) => {
        const current = get().rightNavList
        const list = current.map((a) => (
            a.id === i.id ? {...a, isOpen: bool} : {...a, isOpen: false}
        ))
        set({
            rightNavList: list
        })
    }
 }))