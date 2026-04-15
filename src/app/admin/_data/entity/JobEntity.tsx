export interface JobInterface {
    name: string
    description: string
    requirements: string
    location: string
    wage: string
    salary: number | string
    company: string
    startingDate: string
    startTime: string
    endTime: string
}


export const JobEntity: JobInterface = {
    name: "",
    description: "",
    requirements: "",
    location: "",
    wage: "",
    salary: "",
    company: "",
    startingDate: "",
    startTime: "",
    endTime: ""
}
