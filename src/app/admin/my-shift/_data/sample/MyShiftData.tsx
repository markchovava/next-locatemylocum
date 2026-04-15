import { MyShiftInterface } from "../entity/MyShiftEntity";


export const MyShiftCategoryData = [
    {id: 1, name: 'Cancelled', slug: 'cancelled', count: 1},
    {id: 2, name: 'In Negotiation', slug: 'in-negotiation', count: 0},
    {id: 3, name: 'Applications', slug: 'applications', count: 0},
    {id: 4, name: 'Booked Shifts', slug: 'booked-shifts', count: 2},
    {id: 5, name: 'Worked Shifts', slug: 'worked-shifts', count: 0}
];




export const MyShiftData: MyShiftInterface[] = [
    { id: 1, date: "2026-04-10", status: "Worked Shifts", time: "08:00 - 17:00", company: "Parirenyatwa Group of Hospitals", location: "Milton Park", address: "Mazowe Street North", city: "Harare", rate: 25, hrs: 9, total: 225 },
    { id: 2, date: "2026-04-11", status: "Worked Shifts", time: "19:00 - 07:00", company: "Mpilo Central Hospital", location: "Mzilikazi", address: "Vera Road", city: "Bulawayo", rate: 30, hrs: 12, total: 360 },
    { id: 3, date: "2026-04-20", status: "In Negotiation", time: "08:00 - 16:00", company: "Avenues Clinic", location: "Avenues", address: "Corner Baines Ave & Mazowe St", city: "Harare", rate: 35, hrs: 8, total: 280 },
    { id: 4, date: "2026-04-18", status: "Booked Shifts", time: "07:00 - 15:00", company: "United Bulawayo Hospitals", location: "Ascot", address: "St Lukes Road", city: "Bulawayo", rate: 22, hrs: 8, total: 176 },
    { id: 5, date: "2026-04-12", status: "Worked Shifts", time: "08:00 - 17:00", company: "Chitungwiza Central Hospital", location: "Zengeza", address: "Zengeza 4", city: "Chitungwiza", rate: 20, hrs: 9, total: 180 },
    { id: 6, date: "2026-04-13", status: "Cancelled", time: "10:00 - 18:00", company: "PSMI West End Hospital", location: "Avenues", address: "133 Baines Avenue", city: "Harare", rate: 40, hrs: 8, total: 320 },
    { id: 7, date: "2026-04-22", status: "Booked Shifts", time: "08:00 - 20:00", company: "Mutare Provincial Hospital", location: "Mutare Central", address: "Hospital Road", city: "Mutare", rate: 18, hrs: 12, total: 216 },
    { id: 8, date: "2026-04-14", status: "Worked Shifts", time: "06:00 - 14:00", company: "Clay Bank Hospital", location: "Windsor Park", address: "7960 Windsor Park", city: "Gweru", rate: 28, hrs: 8, total: 224 },
    { id: 9, date: "2026-04-25", status: "Applications", time: "09:00 - 17:00", company: "Gweru Provincial Hospital", location: "CBD", address: "Main Street", city: "Gweru", rate: 18, hrs: 8, total: 144 },
    { id: 10, date: "2026-04-15", status: "Worked Shifts", time: "20:00 - 08:00", company: "Mater Dei Hospital", location: "Burnside", address: "Malindela Road", city: "Bulawayo", rate: 45, hrs: 12, total: 540 },
    { id: 11, date: "2026-04-21", status: "Booked Shifts", time: "08:00 - 13:00", company: "HealthPoint Upper East", location: "Belgravia", address: "67 Upper East Road", city: "Harare", rate: 50, hrs: 5, total: 250 },
    { id: 12, date: "2026-04-16", status: "Worked Shifts", time: "07:30 - 16:30", company: "Masvingo General Hospital", location: "Masvingo Central", address: "Beitbridge Road", city: "Masvingo", rate: 17, hrs: 9, total: 153 },
    { id: 13, date: "2026-04-28", status: "Applications", time: "08:00 - 17:00", company: "Corporate 24 Hospital", location: "Belgravia", address: "6 Bath Road", city: "Harare", rate: 32, hrs: 9, total: 288 },
    { id: 14, date: "2026-04-19", status: "Booked Shifts", time: "14:00 - 22:00", company: "St Annes Hospital", location: "Avondale", address: "1000 King George Road", city: "Harare", rate: 38, hrs: 8, total: 304 },
    { id: 15, date: "2026-04-17", status: "Worked Shifts", time: "08:00 - 17:00", company: "Kwekwe General Hospital", location: "CBD", address: "Kwekwe Central", city: "Kwekwe", rate: 19, hrs: 9, total: 171 },
    { id: 16, date: "2026-04-27", status: "Booked Shifts", time: "07:00 - 19:00", company: "Cimas Rescue", location: "Highlands", address: "60 Ridgeway North", city: "Harare", rate: 27, hrs: 12, total: 324 },
    { id: 17, date: "2026-04-09", status: "Worked Shifts", time: "08:00 - 16:00", company: "Victoria Falls District Hospital", location: "Chinotimba", address: "Park Way Road", city: "Victoria Falls", rate: 21, hrs: 8, total: 168 },
    { id: 18, date: "2026-05-01", status: "In Negotiation", time: "22:00 - 06:00", company: "Karanda Mission Hospital", location: "Mt Darwin", address: "Karanda Mission", city: "Mashonaland Central", rate: 20, hrs: 8, total: 160 },
    { id: 19, date: "2026-04-23", status: "Booked Shifts", time: "08:00 - 17:00", company: "Econet Maisha Health", location: "Msasa", address: "1 Old Mutare Road", city: "Harare", rate: 33, hrs: 9, total: 297 },
    { id: 20, date: "2026-04-08", status: "Cancelled", time: "09:00 - 13:00", company: "Baines Imaging Group", location: "Avenues", address: "20 Mazowe Street", city: "Harare", rate: 42, hrs: 4, total: 168 }
];