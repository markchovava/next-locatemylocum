export interface AdminNavInterface{
    id: string | number
    name: string
    icon: string
    href: string
    isOpen: boolean
    items: AdminNavInterface[]
}

export const AdminNavEntity: AdminNavInterface = {
    id: '',
    name: '',
    href: '#',
    icon: '',
    isOpen: false,
    items: []
}
