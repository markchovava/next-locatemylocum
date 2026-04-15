"use client"

import { useAuthStore } from "../../data/store/useAuthStore"
import Button from "@/app/(main)/_components/buttons/Button"
import Link from "next/link"
import { useEffect } from "react"
import { ProfessionalData } from "@/app/admin/_data/sample/ProfessionData"
import { AuthModeData } from "../../data/sample/AuthData"
import { ReferenceData } from "@/app/(main)/_data/sample/ReferenceData"
import TextInput from "@/app/admin/_components/inputs/TextInput"
import SelectInput from "@/app/admin/_components/inputs/SelectInput"
import PasswordInput from "@/app/admin/_components/inputs/PasswordInput"



export default function RegisterPage() {
    const { 
        authMode,
        resetData,
        clearErrors,
    } = useAuthStore()

    useEffect(() => {
        resetData()
        clearErrors()
    }, [resetData, clearErrors])

    const viewMode = () => {
      switch(authMode){
        case AuthModeData[0].value:
            return <WorkerForm />
        case AuthModeData[1].value:
            return <OrganisationForm />
        default:
            return <WorkerForm />
      }
    }
    

  return (
    <>
        <section className="flex-1 flex items-center justify-center py-16">
          <div className="lg:w-[40%] w-[80%] mx-auto bg-white drop-shadow-lg py-6 px-4 rounded-xl">
            <h2 className="text-center font-semibold text-2xl text-green-700 mb-4">
              Register to Locate My Locum
            </h2>
            <AuthMode />
            <p className="font-light text-gray-700 text-center mb-4">
              Please enter your details below
            </p>
            <hr className="border-b border-gray-100 mb-4" />
            
            {viewMode()}

          </div>
        </section>
    </>
  )
}


function OrganisationForm(){
   const {
        data, 
        errors, 
        isSubmitting, 
        setInputValue,
    } = useAuthStore()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return(
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <TextInput 
            name="firstName" 
            type="text"
            label="First Name"
            placeholder="Enter First Name here." 
            value={data.firstName} 
            onChange={setInputValue} 
            error={errors.firstName}
          />
          <TextInput 
            name="lastName" 
            type="text"
            label="Last Name"
            placeholder="Enter Last Name here." 
            value={data.lastName} 
            onChange={setInputValue} 
            error={errors.lastName}
        />
        </div>
        <TextInput 
            name="companyName" 
            type="text"
            label="Company Name"
            placeholder="Enter Company Name here." 
            value={data.companyName} 
            onChange={setInputValue} 
            error={errors.companyName}
        />
        <TextInput 
            name="phone" 
            type="text"
            label="Phone"
            placeholder="Enter Phone here." 
            value={data.phone} 
            onChange={setInputValue} 
            error={errors.phone}
        />
        <TextInput 
            name="email" 
            type="text"
            label="Email"
            placeholder="Enter Email here." 
            value={data.email} 
            onChange={setInputValue} 
            error={errors.email}
        />
        <TextInput 
            name="address" 
            type="text"
            label="Address"
            placeholder="Enter Address here." 
            value={data.address} 
            onChange={setInputValue} 
            error={errors.address}
        />
        <SelectInput 
            name="referredFrom" 
            label="How did you hear about us?"
            data={ReferenceData}
            placeholder="Select Referred from." 
            value={data.referredFrom} 
            onChange={setInputValue} 
            error={errors.referredFrom}
        />
        <PasswordInput 
            name="password" 
            label="Password"
            placeholder="Enter Password here." 
            value={data.password} 
            onChange={setInputValue} 
            error={errors.password}
        />
        <PasswordInput 
            name="passwordConfirm" 
            label="Confirm Password"
            placeholder="Enter Password Confirmation here." 
            value={data.passwordConfirm} 
            onChange={setInputValue} 
            error={errors.passwordConfirm}
        />
        <div className="flex items-center justify-center">
            <Button 
                name="Register" 
                type="submit" 
                status={isSubmitting} 
            />
        </div>
        <p className="font-light text-gray-700 text-center">Already a Member? 
          <Link href='/login' className="ml-1 font-medium hover:text-green-700 hover:underline ease-in-out transition-all duration-300">
            Login
          </Link>
        </p>
    </form>
  )
}



function WorkerForm(){
   const {
        data, 
        errors, 
        isSubmitting, 
        setInputValue,
    } = useAuthStore()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return(
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <TextInput 
            name="firstName" 
            type="text"
            label="First Name"
            placeholder="Enter First Name here." 
            value={data.firstName} 
            onChange={setInputValue} 
            error={errors.firstName}
          />
          <TextInput 
            name="lastName" 
            type="text"
            label="Last Name"
            placeholder="Enter Last Name here." 
            value={data.lastName} 
            onChange={setInputValue} 
            error={errors.lastName}
        />
        </div>
        <TextInput 
            name="phone" 
            type="text"
            label="Phone"
            placeholder="Enter Phone here." 
            value={data.phone} 
            onChange={setInputValue} 
            error={errors.phone}
        />
        <TextInput 
            name="email" 
            type="text"
            label="Email"
            placeholder="Enter Email here." 
            value={data.email} 
            onChange={setInputValue} 
            error={errors.email}
        />
        <TextInput 
            name="address" 
            type="text"
            label="Address"
            placeholder="Enter Address here." 
            value={data.address} 
            onChange={setInputValue} 
            error={errors.address}
        />
        <SelectInput 
            name="profession" 
            label="Profession"
            data={ProfessionalData}
            placeholder="Select Profession." 
            value={data.profession} 
            onChange={setInputValue} 
            error={errors.profession}
        />
        <SelectInput 
            name="referredFrom" 
            label="How did you hear about us?"
            data={ReferenceData}
            placeholder="Select Referred from." 
            value={data.referredFrom} 
            onChange={setInputValue} 
            error={errors.referredFrom}
        />
        <PasswordInput 
            name="password" 
            label="Password"
            placeholder="Enter Password here." 
            value={data.password} 
            onChange={setInputValue} 
            error={errors.password}
        />
        <PasswordInput 
            name="passwordConfirm" 
            label="Confirm Password"
            placeholder="Enter Password Confirmation here." 
            value={data.passwordConfirm} 
            onChange={setInputValue} 
            error={errors.passwordConfirm}
        />
        <div className="flex items-center justify-center">
            <Button 
                name="Register" 
                type="submit" 
                status={isSubmitting} 
            />
        </div>
        <p className="font-light text-gray-700 text-center">Already a Member? 
          <Link href='/login' className="ml-1 font-medium hover:text-green-700 hover:underline ease-in-out transition-all duration-300">
            Login
          </Link>
        </p>
    </form>
  )
}



function AuthMode(){
  const {authMode, setAuthMode} = useAuthStore()
  return(
    <div className="flex items-center justify-start gap-4 mb-4">
      <button 
        onClick={() => setAuthMode(AuthModeData[0].value)} 
        className={`${authMode === AuthModeData[0].value ? 'bg-green-700 text-white' : 'bg-white text-green-700'}  cursor-pointer px-8 py-2.5 border border-green-700 hover:bg-green-700 text-green-700 hover:text-white ease-in-out transition-all duration-300`}>
        Register as a {AuthModeData[0].name}
      </button>
      <button 
        onClick={() => setAuthMode(AuthModeData[1].value)}  
        className={`${authMode === AuthModeData[1].value ? 'bg-green-700 text-white' : 'bg-white text-green-700'} cursor-pointer px-8 py-2.5 border border-green-700 hover:bg-green-700 text-green-700 hover:text-white ease-in-out transition-all duration-300`}>
        Register as an {AuthModeData[1].name}
      </button>
    </div>
  )
}
