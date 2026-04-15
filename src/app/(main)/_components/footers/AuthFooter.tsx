import Link from 'next/link'
import { AuthNavData } from '../../_data/sample/NavData'


export default function AuthFooter() {
  return (
    <footer className="w-full py-4 bg-gray-100">
          <div className="container__primary flex items-center justify-end">
            <ul className='flex items-center justify-eng gap-4 text-sm font-medium text-gray-700'>
            {AuthNavData.map((i, key) => (
                <Link 
                    key={key}
                    href={i.href}>
                        <li className='border-b-2 border-transparent hover:border-gray-700'>{i.name}</li>
                </Link>
            ))}
            </ul>
          </div>
    </footer>
  )
}
