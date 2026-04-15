"use client"


interface Props{
    label?: string
    name: string
    data: any[]
    value: string
    placeholder: string
    error?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectInput({
    label,
    name,
    data,
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
        <select
            value={value}
            onChange={onChange} 
            name={name} 
            className={`rounded-lg outline-none border border-gray-300 
                focus:border-gray-400 w-full py-2 px-3`}>
            <option value="" disabled>
                {placeholder}
            </option>
            {data.map((i, key) => (
                <option key={key} value={i}>
                    {i}
                </option>
            ))}
        </select>   
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
