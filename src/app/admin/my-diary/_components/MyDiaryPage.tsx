"use client"
import Title from '../../_components/titles/Title'
import { MyDiaryReportData } from '../_data/sample/MyDiaryData'

export default function MyDiaryPage() {
  const title = 'My Diary'
  return (
    <>
      <main className="pt-16 pb-20">
        <section className="container__primary">
            <Title 
              name={title} 
              css="mb-2 text-gray-700 border-b border-gray-300 mb-2 pb-1" 
            />
        </section>

        <MyDiaryReport />
         
      </main>
    </>
  )
}


function MyDiaryReport(){
  return(
    <section className="container__primary px-16 py-8 bg-white drop-shadow-lg grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-8">
      {MyDiaryReportData.map((i, key) => (
        <div key={key} className={`${(key+1) < MyDiaryReportData.length && "lg:border-r lg:border-b-transparent border-b border-gray-300"} pb-3 flex items-center justify-center flex-col`}>
          <h2 className='font-bold text-5xl text-green-700 mb-2 text-center'>{i.total}</h2>
          <p className='text-center font-light'>{i.name}</p>
        </div>
      ))}
    </section>
  )
}
