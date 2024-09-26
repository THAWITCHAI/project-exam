'use client'
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

export default function Edit({ params }: Props) {
    const { id } = params
    const [data, setData] = useState<DataJob[]>([])
    const [form, setForm] = useState({
        id:id[0],
    })

    useEffect(() => {
        fetch('/api/insert')
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])

    const detail = data.filter((res) => res.id == id)

    const handleChang = (e: any) => {
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    }


    const handleSubmit = async () => {
        const res = await fetch('/api/insert', {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status == 200) {
            const resp = await res.json()
            alert(resp.massage)
        }
    }

    return (
        <div className='flex justify-center items-center p-2'>
            {
                detail.map((item, index) => {
                    return (
                        <form className='shadow-lg w-[40%] h-fit my-5 p-5' key={index}>
                            <li className='my-5'>ชื่องาน</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.name} name='name' onChange={handleChang} />
                            <li className='my-5'>ประเภทงาน</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.type_job} name='type_job' onChange={handleChang} />
                            <li className='my-5'>เวลาเริ่ม</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.time_s} name='time_s' onChange={handleChang} />
                            <li className='my-5'>เวลาเสร็จสิ้น</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.time_e} name='time_e' onChange={handleChang} />
                            <li className='my-5'>สถานะงาน</li>
                            <select name="status_job" id="" className='border w-1/2 h-[3rem] my-2 rounded-md outline-none text-center' defaultValue={item.status_job} onChange={handleChang}>
                                <option value="ดำเนินการ">ดำเนินการ</option>
                                <option value="เสร็จสิ้น">เสร็จสิ้น</option>
                                <option value="ยกเลิก">ยกเลิก</option>
                            </select>
                            <li className='my-5'>เวลาสร้างขึ้น</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.create_job} disabled onChange={handleChang} />
                            <li className='my-5'>เวลาอัพเดทล่าสุด</li>
                            <input type="text" className='border w-full h-[3rem] rounded-lg px-5' defaultValue={item.update_job} disabled onChange={handleChang} />
                            <div className='my-5 h-[5rem] flex justify-center items-center'>
                                <button className='bg-blue-500 w-[40%] h-1/2 text-white rounded-md' type='submit' onClick={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}>อัพเดท</button>
                            </div>
                        </form>
                    )
                })
            }
        </div>
    )
}