'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}
interface DataJob {
    id: string,
    name: string
    time_s: string
    time_e: string
    status_job: string
    create_job: string
    update_job: string
    type_job: string

}
export default function ShowData({ }: Props) {
    const [data, setData] = useState<DataJob[]>([])
    const [input, setInput] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('/api/insert').then((res) => res.json())
            .then((res) => setData(res))
    }

    const search = data.filter((item) => {
        return (
            (item.name && item.name.toUpperCase().includes(input.toUpperCase())) ||
            (item.create_job && item.create_job.toUpperCase().includes(input.toUpperCase()))
        )
    })






    return (
        <div>
            <div className='w-full h-[5rem] my-10 p-5 flex justify-center items-center'>
                <input type="text" className='w-1/2 h-full border outline-none rounded-md px-5' placeholder='ค้นหาชื่อ วันที่ เวลา หรือประเภท' onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='w-full h-[5rem] p-5 my-5'>
                จำนวนทั้งหมด : {input == '' ? data.length : search.length}
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ชื่องานที่ดำเนินการ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                เวลาที่ดำเนินการ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                เวลาเสร็จสิ้น
                            </th>
                            <th scope="col" className="px-6 py-3">
                                สถานะงาน
                            </th>
                            <th scope="col" className="px-6 py-3">
                                เวลาสร้าง
                            </th>
                            <th scope="col" className="px-6 py-3">
                                เวลาอัพเดทงาน
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ประเภท
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {input == '' && (
                            data.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.time_s}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.time_e}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.status_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.create_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.update_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.type_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className='w-[8rem] h-[3rem] bg-yellow-400 text-white rounded-md mx-4'><Link className='w-full h-full' href={`/show-data/${item.id}`}>แก้ไข</Link></button>
                                            <button className='w-[8rem] h-[3rem] bg-red-400 text-white rounded-md' onClick={() => {

                                                fetch('/api/insert', {
                                                    method: 'DELETE',
                                                    body: JSON.stringify({ id: item.id })
                                                })

                                                getData()
                                            }

                                            }>ลบ</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                        {input != '' && (
                            search.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.time_s}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.time_e}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.status_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.create_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.update_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.type_job}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className='w-[8rem] h-[3rem] bg-yellow-400 text-white rounded-md mx-4'><Link className='w-full h-full' href={`/show-data/${item.id}`}>แก้ไข</Link></button>
                                            <button className='w-[8rem] h-[3rem] bg-red-400 text-white rounded-md' onClick={() => {

                                                fetch('/api/insert', {
                                                    method: 'DELETE',
                                                    body: JSON.stringify({ id: item.id })
                                                })

                                                getData()
                                            }

                                            }>ลบ</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}