"use client"


interface Props{
    name: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    css?: string
}

export default function ButtonSecondary({ 
    name, 
    type='button', 
    onClick, 
    css = ` hover:bg-green-700 hover:text-white px-8 py-3`,
}: Props) {
  return (

    <button 
        className={`${css} text-green-700 border border-green-700 cursor-pointer rounded-full 
        ease-in-out duration-200 transition-all`} 
        onClick={onClick}
        type={type}>
      {name}
    </button>
  )
}

        