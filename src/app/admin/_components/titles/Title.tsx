"use client"

interface Props{
    name: string
    css?: string 
}

export default function Title({ 
    name, 
    css = 'text-gray-700 border-b border-gray-300 pb-2'
}: Props) {
  return (
    <h1 className={`text-4xl font-bold ${css}`}>
        {name}
    </h1>
  )
}
