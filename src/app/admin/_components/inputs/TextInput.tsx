"use client"


interface Props{
    label?: string
    type?: string
    name: string
    value: string
    css?: string
    placeholder: string
    error?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({
    label,
    type = 'text',
    name,
    css = 'py-2 px-3',
    value,
    onChange,
    placeholder,
    error,
}: Props) {
  return (
    <div>
        {label &&
          <p className="font-medium text-sm text-gray-700 mb-1">
            {label}:
          </p>
        }
        <input 
            type={type}
            value={value}
            onChange={onChange} 
            name={name} 
            placeholder={placeholder}
            className={`${css} rounded-xl outline-none border border-gray-300 focus:border-gray-400 w-full`} />
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
