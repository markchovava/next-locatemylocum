"use client"

interface Props{
    name: string
    css?: string 
}

export default function TitleSecondary({ 
    name, 
    css = 'text-gray-700 border-b border-gray-300 pb-2'
}: Props) {
  return (
    <h1 className={`text-2xl font-semibold ${css}`}>
        {name}
    </h1>
  )
}
