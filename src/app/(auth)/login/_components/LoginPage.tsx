"use client"


import PasswordInput from "@/app/admin/_components/inputs/PasswordInput"
import { useAuthStore } from "../../data/store/useAuthStore"
import Button from "@/app/(main)/_components/buttons/Button"
import TextInput from "@/app/admin/_components/inputs/TextInput"
import Link from "next/link"
import { useEffect } from "react"


export default function LoginPage() {
    const {
        data, 
        errors, 
        isSubmitting, 
        resetData,
        clearErrors,
        setInputValue,
    } = useAuthStore()

    useEffect(() => {
        resetData()
        clearErrors()
    }, [resetData, clearErrors])


    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <>
        <section className="flex-1 flex items-center justify-center py-16">
          <div className="lg:w-[40%] w-[80%] mx-auto bg-white drop-shadow-lg py-6 px-4 rounded-xl">
            <h2 className="text-center font-semibold text-2xl text-green-700 mb-4">
              Login to Locate My Locum
            </h2>
            <p className="font-light text-gray-700 text-center mb-4">
              Please enter your details below
            </p>

            <hr className="border-b border-gray-100 mb-4" />

            <form onSubmit={handleSubmit} className="space-y-4">
                <TextInput
                    name="email" 
                    type="text"
                    label="Email"
                    placeholder="Enter Email here." 
                    value={data.email} 
                    onChange={setInputValue} 
                    error={errors.email}
                />

                <PasswordInput
                    name="password" 
                    label="Password"
                    placeholder="Enter Password here." 
                    value={data.password} 
                    onChange={setInputValue} 
                    error={errors.password}
                />

                <div className="flex items-center justify-center">
                  <Link href='/admin'>
                      <Button 
                          name="Login" 
                          type="submit" 
                          status={isSubmitting} 
                      />
                  </Link>
                </div>

                <p className="font-light text-gray-700 text-center">Are you new to Locate a Locum? 
                  <Link href='/register' className="ml-1 font-medium hover:text-green-700 hover:underline ease-in-out transition-all duration-300">
                    Get Started
                  </Link>
                </p>
            </form>

          </div>
        </section>
    </>
  )
}
