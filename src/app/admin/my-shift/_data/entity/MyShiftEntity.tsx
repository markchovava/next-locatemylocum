export interface MyShiftInterface {
    id: number | string;
    date: string;
    status: "Cancelled" | "In Negotiation" | "Applications" | "Booked Shifts" | "Worked Shifts";
    time: string;
    company: string;
    location: string;
    address: string; // Added field
    city: string;
    rate: number | string;
    hrs: number | string;
    total: number | string;
}


export const MyShiftEntity: MyShiftInterface = {
    id: '',
    date: '',
    status: 'Applications',
    address: '',
    time: '',
    company: '',
    location: '',
    city: '',
    rate: '',
    hrs: '',
    total: ''
}