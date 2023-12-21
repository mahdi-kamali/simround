import React from 'react'

export default function AllSimCards() {

  


  const headers = [
    "شناسه",
    "ارقام",
    "هزینه",
    "وضعیت فعال بودن",
    "وضعیت کار کرد",
    "نام اپراتور",
    "اقصادی",
    "پیش",
    "وضعیت",
    "شناسه فروشنده",
    "تاریخ ایجاد شده",
    "اخرین تغییرات",
    "کنترل ها",
  ]

  return (
    <section className='all-simcards-section'>

      <h1>
        تمامیه سیم کارت های موجود
      </h1>
      <table>
        <thead>
          <tr>
            {
              headers.map((item, index) => {
                return <th key={index}>{item}</th>
              })
            }

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
