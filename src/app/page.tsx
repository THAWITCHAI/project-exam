'use client'
import React, { useState } from 'react'


export default function Home({ }: Props) {

  const [form, setForm] = useState({
    type_job: 'Development',
    name: '',
    time_s: '',
    time_e: '',
    status_job: 'ดำเนินการ'
  })

  const handleChange = (e: any) => {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = async () => {
    console.log(form)
    const res = await fetch('/api/insert', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    const resp = await res.json()
    if(res.status==200){
      alert(resp['massage'])
    }else{
      alert('กรอกให้ครบ')
      
    }
    return
  }
  return (
    <div className='w-full h-fit flex justify-center items-center p-2'>
      <form className='shadow-lg w-[40%] h-fit p-10' method='post'>
        <li className='text-xl'>ประเภทงาน</li>
        <select name="type_job" id="" className='border w-1/2 h-[3rem] my-2 rounded-md outline-none text-center' onChange={handleChange}>
          <option value="Development">Development</option>
          <option value="Test">Test</option>
          <option value="Document">Document</option>
        </select>
        <li className='text-xl'>ชื่องานที่ดำเนินการ</li>
        <input type="text" name='name' className='border h-[3rem] w-full rounded-lg outline-none pl-2 ' placeholder='ชื่องาน' onChange={handleChange} />
        <li className='text-xl'>เวลาที่ดำเนินการ</li>
        <input type="time" name='time_s' className='border h-[3rem] w-full rounded-lg outline-none pl-2 ' onChange={handleChange} />
        <li className='text-xl'>เวลาที่เสร็จสิ้น</li>
        <input type="time" name='time_e' className='border h-[3rem] w-full rounded-lg outline-none pl-2 ' onChange={handleChange} />
        <li className='text-xl'>วันที่เริ่มดำเนินการ</li>
        <input type="date" name='create_job' className='border h-[3rem] w-full rounded-lg outline-none pl-2 ' onChange={handleChange} />
        <li className='text-xl'>สถานะการดำเนินงาน</li>
        <select name="status_job" id="" className='border w-1/2 h-[3rem] my-2 rounded-md outline-none text-center' onChange={handleChange}>
          <option value="ดำเนินการ">ดำเนินการ</option>
          <option value="เสร็จสิ้น">เสร็จสิ้น</option>
          <option value="ยกเลิก">ยกเลิก</option>
        </select>
        <div className='my-5 h-[5rem] flex justify-center items-center'>
          <button className='bg-blue-500 w-[40%] h-1/2 text-white rounded-md' type='submit' onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>บันทึก</button>
        </div>
      </form>
    </div>
  )
}