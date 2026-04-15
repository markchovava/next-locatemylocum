import { AdminNavInterface } from "../entity/AdminNavEntity";


export const AdminNavData: AdminNavInterface[] = [
    {id: 1, name: 'Find Shifts', icon: 'shift', isOpen: false, href: '/admin/shift', items: []},
    {id: 2, name: 'Company', icon: 'company', isOpen: false, href: '/admin/company', items: []},
    {id: 3, name: 'My Diary', icon: 'diary', isOpen: false, href: '/admin/my-diary', items: []},
    {id: 4, name: 'My Finance', icon: 'finance', isOpen: false, href: '/admin/my-finance', items: []},
    {id: 5, name: 'My Shifts', icon: 'my-shift', isOpen: false, href: '/admin/my-shift', items: []},
]

export const NotificationNavData = [
    {id: 1, name: 'Notifications', href: '#', icon: 'notification', isOpen: false, items: []},
]

export const SettingsNavData: AdminNavInterface[] = [
    {id: 1, name: 'Settings', icon: 'settings', isOpen: false, href: '#', items: []},
    {id: 2, name: 'Payments', icon: 'settings', isOpen: false, href: '#', items: []},
]

export const UserNavData: AdminNavInterface[] = [
    {id: 1, name: 'User', icon: 'user', isOpen: false, href: '#', items: []},
    {id: 2, name: 'Password', icon: 'password', isOpen: false, href: '#', items: []},
]


export const AdminRightNavData: AdminNavInterface[] = [
    {id: 1, name: 'Notifications', icon: 'notification', isOpen: false, href: '#', items: NotificationNavData},
    {id: 2, name: 'Settings', icon: 'settings', isOpen: false, href: '#', items: SettingsNavData},
    {id: 3, name: 'User', icon: 'user', isOpen: false, href: '#', items: UserNavData},
]