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





import Switch from "react-switch";



export default function AllSimCards() {



  const [selectedPage, setSelectedPage] = useState(1)

  const [data, error, loading, refresh, setUrl] = useFetch(
    ADMIN_PANEL.SIM_CARDS.GET + `?pageNumber=${1}`, {})



  const headersList = [
    "شناسه",
    "ارقام",
    "هزینه",
    "استفاده شده",
    "نام اپراتور",
    "اقصادی",
    "پیش",
    "وضعیت",
    " فروشنده",
    "تاریخ ایجاد",
    "اخرین تغییرات",
    "کنترل ها",
  ]







  const orderListButtons = [
    "All Orders",
    "success",
    "on progress",
    "on error",
    "on pause"
  ]

  const [ordersStatus, setOrdersStatus] = useState(orderListButtons[0])

  const [sortedList, setSortedList] = useState([])

  const [editState, setEditState] = useState(false)





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


  const handleEditSimCardClick = (simCard) => {
    alert("ok")
  }






  return (
    <section className='all-simcards-section'>

      <h1>
        تمامیه سیم کارت های موجود
      </h1>

      <div className="body">


        <Table columnsStyle={"10rem 10ch 7rem 7rem 7rem 4rem 5rem 4rem 5rem 6rem 8rem 7rem 1fr"}>
          <TableHeader>
            {
              headersList.map((record, index) => {
                return <ItemHeader key={index}>
                  {record}
                </ItemHeader>
              })
            }
          </TableHeader>
          <TableBody>
            {
              !loading ? data?.data.map((record) => {


                return <Row key={record._id}>
                  <Property>
                    <div className="property-header">
                      {headersList[0]}
                    </div>
                    <div className="property-body">
                      {record._id}
                    </div>
                    <div className="peoperty-edit-input">
                      <input type="hidden" />
                    </div>
                  </Property>

                  <Property>
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



                  <Property>
                    <div className="property-header">
                      {headersList[3]}
                    </div>
                    <div className="property-body">
                      {record.simCardUsageState}

                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[4]}
                    </div>
                    <div className="property-body">
                      {record.operatorName}
                    </div>
                  </Property>

                  <Property>
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

                  <Property>
                    <div className="property-header">
                      {headersList[7]}
                    </div>
                    <div className="property-body icon">
                      <Switch onChange={undefined} checked={record.vaziat} />
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[8]}
                    </div>
                    <div className="property-body">
                      {record.sellerID}
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[9]}
                    </div>
                    <div className="property-body">
                      {formatDate(record.createdAt)}
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[10]}
                    </div>
                    <div className="property-body">
                      {formatDate(record.updatedAt)}
                    </div>
                  </Property>

                  <Property>
                    <div className="property-header">
                      {headersList[11]}
                    </div>
                    <div className="property-body">
                      <div className="buttons">
                        <button>
                          ویرایش
                          <Icon icon="iconamoon:edit-bold" />
                        </button>
                        <button>
                          حذف
                          <Icon icon="iconamoon:edit-bold" />
                        </button>
                        <button>
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
              }) : <h1>Loading...</h1>
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
