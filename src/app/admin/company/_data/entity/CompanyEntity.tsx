export interface CompanyInterface {
    image: string
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
    website: string
    category?: string
    permanentJobs: number | string
    locumJobs: number | string
}


export const CompanyEntity: CompanyInterface = {
    image: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    website: '',
    category: '',
    permanentJobs: '',
    locumJobs: ''
}