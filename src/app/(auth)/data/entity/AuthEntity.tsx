export interface AuthInterface{
    email: string
    password: string
    passwordConfirm: string
    firstName: string
    lastName: string
    phone: string
    address: string
    profession: string
    referredFrom: string
    companyName: string
}

export const AuthEntity: AuthInterface ={
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    profession: '',
    referredFrom: '',
    companyName: '',

}


export interface AuthModeInterface {
    id: number | string
    name: string
    value: string
}


export const AuthModeInterface: AuthModeInterface = {
    id: '',
    name: '',
    value: ''
}
   