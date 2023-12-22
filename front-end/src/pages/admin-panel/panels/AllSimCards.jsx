import React, { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';

import { deleteF, useFetch } from '../../../libs/fetcher'
import { ADMIN_PANEL } from '../../../constants/API_URLS'
import { formatDate } from '../../../libs/timeFormater'
import Swal from "sweetalert2"
import { showError, showSuccess } from "../../../libs/alertHandler"


import Table from "../../../components/table/Table"
import ItemHeader from "../../../components/table/components/ItemHeader"
import Property from "../../../components/table/components/Property"
import Row from "../../../components/table/components/Row"
import TableBody from "../../../components/table/components/TableBody"
import TableCategory from "../../../components/table/components/TableCategory"
import TableHeader from "../../../components/table/components/TableHeader"
import TablePaginations from "../../../components/table/components/TablePaginations"
import { Icon } from '@iconify/react';
import Select from 'react-select'


import Switch from "react-switch";



export default function AllSimCards() {

  const [data, error, loading, refresh, setUrl] = useFetch(
    ADMIN_PANEL.SIM_CARDS.GET + `?pageNumber=${1}`, {})

  const [isTableEditing, setIsTableEditing] = useState(false)


  const headersList = [
    "شناسه",
    "ارقام",
    "هزینه",
    "کارکرد سیمکارت",
    "نام اپراتور",
    "اقصادی",
    "پیش",
    "وضعیت",
    "فروشنده",
    "تاریخ ایجاد",
    "اخرین تغییرات",
    "کنترل ها",
  ]




  const handleDeleteSimCardClick = (simCard) => {
    Swal.fire({
      icon: "question",
      text: "آیا میخواهید فعالیت را ادامه دهید ؟",
      showDenyButton: true,
      denyButtonText: "حذف",
      confirmButtonText: "لغو",
      confirmButtonColor: "green"
    }).then(res => {
      if (res.isDenied) {
        deleteF(ADMIN_PANEL.SIM_CARDS.DELETE, {
          simCardID: simCard._id
        }).then(resp => {
          showSuccess("عملیات موفق بود !", "سیمکارت مورد نظر حذف شد.")
          refresh()
        }).catch(err => {
          showError("مشکلی وجود اومده.", "در حین انجام عملیات مشکلی بوجود امده است")
        })
      }
    })
  }


  const handleEditSimCardClick = () => {
    setIsTableEditing(!isTableEditing)
  }




  const simCardUsageOptions = [
    { value: 'new', label: 'جدید' },
    { value: 'used', label: 'مصرف شده' },
    { value: 'semi used', label: 'نسبتا جدید' }
  ]


  const simCardsOperatorNae = [
    { value: 'Irancell', label: 'ایرانسل' },
    { value: 'Hamrah-e Aval', label: 'همراه اول' },
    { value: 'Rightel', label: 'رایتل' }
  ]





  return (
    <section className='all-simcards-section'>

      <h1>
        تمامیه سیم کارت های موجود
      </h1>

      <div className="body">


        <Table

          columnsStyle={"6rem 10ch 7rem 9rem 9rem 4rem 5rem 4rem 5rem 6rem 8rem 7rem 1fr"}>


          <TableHeader>
            {
              headersList.map((record, index) => {
                return <ItemHeader key={index}>
                  {record}

                </ItemHeader>
              })
            }
          </TableHeader>


          <TableBody
            isEditing={isTableEditing}
            setIsEditing={setIsTableEditing} >
            {
              data?.data.map((record) => {

                return <Row key={record._id} >
                  <Property isReadOnly={true} >
                    <div className="property-header">
                      {headersList[0]}
                    </div>
                    <div className="property-body">
                      {record._id}
                    </div>

                  </Property>

                  <Property inputName="numbers" >
                    <div className="property-header">
                      {headersList[1]}
                    </div>
                    <div className="property-body">
                      {record.numbers}
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[2]}
                    </div>
                    <div className="property-body">
                      {record.price}
                    </div>
                  </Property>


                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[3]}
                    </div>
                    <div className="property-body select-box">
                      <select
                        disabled={!isTableEditing}
                        name="simCardUsageState" >
                        {simCardUsageOptions.map((item) => {
                          return <option
                            key={item.value}
                            value="">
                            {item.label}
                          </option>
                        })}
                      </select>

                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[4]}
                    </div>
                    <div className="property-body select-box">
                      <select
                        disabled={!isTableEditing}
                        name="simCardUsageState" >
                        {simCardsOperatorNae.map((item) => {
                          return <option
                            key={item.value}
                            value="">
                            {item.label}
                          </option>
                        })}
                      </select>
                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[5]}
                    </div>
                    <div className="property-body icon">
                      <Switch onChange={undefined} checked={record.ghesti} />
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[6]}
                    </div>
                    <div className="property-body">
                      {record.pish}
                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[7]}
                    </div>
                    <div className="property-body icon">
                      <Switch onChange={undefined} checked={record.vaziat} />
                    </div>
                  </Property>

                  <Property isSelectBox={true} >
                    <div className="property-header">
                      {headersList[8]}
                    </div>
                    <div className="property-body">
                      {record.sellerID}
                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[9]}
                    </div>
                    <div className="property-body">
                      {formatDate(record.createdAt)}
                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[10]}
                    </div>
                    <div className="property-body">
                      {formatDate(record.updatedAt)}
                    </div>
                  </Property>

                  <Property isReadOnly={true}>
                    <div className="property-header">
                      {headersList[11]}
                    </div>
                    <div className="property-body">
                      <div className="buttons">

                        {
                          !isTableEditing ?
                            <button
                              className='edit'
                              onClick={() => handleEditSimCardClick()}
                              type='submit'>
                              <span>ویرایش</span>
                              <Icon icon="iconamoon:edit-bold" />
                            </button> :
                            <button
                              className='submit'
                              onClick={() => handleEditSimCardClick()}
                              type='button'>
                              <span>ثبت</span>
                              <Icon icon="iconamoon:edit-bold" />
                            </button>

                        }

                        <button className='delete'>
                          حذف
                          <Icon icon="iconamoon:edit-bold" />
                        </button>
                        <button className='status'>
                          فعال
                          {
                            record.isActivated ?
                              <Icon icon="material-symbols:do-not-touch" />
                              : <Icon icon="eos-icons:system-ok" />
                          }
                        </button>
                      </div>

                    </div>
                  </Property>


                </Row>
              })
            }

          </TableBody>

          <TablePaginations>
            <ResponsivePagination
              current={data?.currentPage ? data?.currentPage : 0}
              total={2}
              onPageChange={(pageNumber) => {
                setUrl(ADMIN_PANEL.SIM_CARDS.GET + `?pageNumber=${pageNumber}`)
              }}
            />
          </TablePaginations>


        </Table>



      </div>

    </section>
  )
}
