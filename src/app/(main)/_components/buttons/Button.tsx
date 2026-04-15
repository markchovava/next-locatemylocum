import React from 'react'


interface Props{
    type?: 'submit' | 'reset' | 'button'
    name: string
    status?: boolean
    css?: string
    onClick?: () => void
}

export default function Button({
    type,
    name,
    status,
    onClick,
    css = 'py-2.5 px-12 rounded-full',
}: Props) {
  return (
    <button 
        type={type} 
        onClick={onClick} 
        className={`${css} cursor-pointer text-white bg-green-700 
        duration-200 hover:bg-green-800 ease-in-out transition-all`}>
        {status ? 'Processing' : name}
    </button>
  )
}
