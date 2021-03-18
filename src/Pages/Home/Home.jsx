import React, { Component,useState,useEffect} from 'react';
import './Home.css'
import {AiOutlineMenu,AiOutlineUp,AiOutlineDown} from 'react-icons/ai'
import {
    DashboardIc,
    GorillaLogo,
    ProfileIc,
    LogoutIc,
    HelpIc,
    CalenderIc,
    MoreIc,
    DownArrowIc,
    SalesTurnIc,
    Product1

} from './../../Assets/index'
import { Bar } from '@reactchartjs/react-chart.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'
export default function Home(){
    const Swal = require('sweetalert2')
    const [isOpen, setIsOpen] = useState(false)
    const [menuDate,setMenuDate]=useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [classActive,setClassActive]=useState(true)
    const [onToday,setOnToday]=useState(false)
    const [onYesterday,setOnYesterday]=useState(false)
    const [onWeek,setOnWeek]=useState(false)
    const [onLastMonth,setOnLastMonth]=useState(false)
    const [onMonth,setOnMonth]=useState(false)
    const [onCustom,setOnCustom]=useState(false)

    const [todayDate,setTodayDate]=useState(null)
    const [YesterdayDate,setYesterdayDate]=useState(null)
    const [LastWeekDate,setLastWeekDate]=useState(null)
    const [lastMonthDate,setLastMonthDate]=useState(null)
    const [firstDayMonth,setFirstDayMonth] = useState(null)
    const [sixLastMonth,setSixLastMonth] = useState(null)
    const [finalStartDate,setFinalStartDate]=useState(null)
    const [finalEndDate,setFinalEndDate]=useState(null)

    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    const updateDate=()=>{
        var gettoday = new Date()
        var yesterday = new Date(gettoday)
        var lastWeek = new Date(gettoday)
        var lastMonth = new Date(gettoday)
        var sixLastMonth = new Date(gettoday)
        yesterday.setDate(yesterday.getDate() - 1)
        lastWeek.setDate(lastWeek.getDate()-7)
        lastMonth.setDate(lastMonth.getDate()-30)
        sixLastMonth.setMonth(sixLastMonth.getMonth()-6)

        

        var firstDay = new Date(gettoday.getFullYear(), gettoday.getMonth(), 1);
        console.log(firstDay)
        
        // var today = gettoday.getDate()
        // console.log(yesterday,' ini yesterday')
        // setYesterdayDate(yesterday)
        setTodayDate(gettoday)
        setYesterdayDate(yesterday)
        setLastWeekDate(lastWeek)
        setLastMonthDate(lastMonth)
        setFirstDayMonth(firstDay)
        setSixLastMonth(sixLastMonth)
    }

    useEffect(()=>{
        updateDate()
    },[])
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

      const onChangeDate=()=>{
          setMenuDate(true)
      }
      const toggle=()=>{
          setMenuDate(false)
      }
     
        const onTodaybtn=()=>{
            setOnToday(true)
            setOnWeek(false)
            setOnYesterday(false)
            setOnLastMonth(false)
            setOnMonth(false)
            setOnCustom(false)
            console.log(startDate.getDate())
            console.log(endDate)
            console.log(todayDate, ' ini today date')
            console.log(YesterdayDate, ' ini yesterday 116')
            setStartDate(todayDate)
        }
        const onYesterdaybtn=()=>{
            setOnToday(false)
            setOnWeek(false)
            setOnYesterday(true)
            setOnLastMonth(false)
            setOnMonth(false)
            setOnCustom(false)
            setStartDate(YesterdayDate)
            setEndDate(todayDate)
            
        }
        const onWeekbtn=()=>{
            setOnToday(false)
            setOnWeek(true)
            setOnYesterday()
            setOnLastMonth(false)
            setOnMonth(false)
            setOnCustom(false)
            setStartDate(LastWeekDate)
            setEndDate(todayDate)
        }
        const onLastMonthbtn=()=>{
            setOnToday(false)
            setOnWeek(false)
            setOnYesterday(false)
            setOnLastMonth(true)
            setOnMonth(false)
            setOnCustom(false)
            setStartDate(lastMonthDate)
            setEndDate(todayDate)
        }
        const onMonthbtn=()=>{
            setOnToday(false)
            setOnWeek(false)
            setOnYesterday(false)
            setOnLastMonth(false)
            setOnMonth(true)
            setOnCustom(false)
            setStartDate(firstDayMonth)
            setEndDate(todayDate)
        }
        const onCustombtn=()=>{
            setOnToday(false)
            setOnWeek(false)
            setOnYesterday(false)
            setOnLastMonth(false)
            setOnMonth(false)
            setOnCustom(true)
        }

        const onApplybtn=()=>{
            console.log(startDate, ' ini start date')
            console.log(endDate , ' ini end date')
            console.log(todayDate, ' today date')
            console.log(sixLastMonth, ' ini sixlast month')
            var nameMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']
            if(startDate === null || endDate === null ){
                
                Swal.fire({
                    title: 'Error!',
                    text: 'You have to choose Start Date & End Date',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                  })
            }else if (startDate > todayDate || endDate > todayDate){
                
                Swal.fire({
                    title: 'Error!',
                    text: 'Can\'t Choose More Than Today\'s date ',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                  })
            }else if (startDate < sixLastMonth ){
                
                Swal.fire({
                    title: 'Error!',
                    text: 'Maximum 6 Month',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                  })
                
            }else {
                var findMonthStart = (startDate.getMonth())
                var findMonthEnd = (endDate.getMonth())
                var finalStartDate = startDate.getDate() + ' ' + nameMonth[findMonthStart] + '  ' + startDate.getFullYear()
                var finalEndDate = endDate.getDate() + '  ' + nameMonth[findMonthEnd] + '  ' + endDate.getFullYear()
                setFinalEndDate(finalEndDate)
                setFinalStartDate(finalStartDate)
            }
            
            setMenuDate(false)
        }
    return (
        <>
        <Modal isOpen={menuDate} toggle={toggle}  >
            <ModalHeader toggle={toggle} className="header-modal">
                <img src={CalenderIc} className="icon-calender"/> 
                <p>PERIOD</p> 
            </ModalHeader>
            <ModalBody style={{display:'flex',flexDirection:'row'}}>
            <div className="modal-box-left">
                <div className="modal-day" onClick={onTodaybtn} >
                    <p  className={`${(onToday ? 'classActive' : '')}`}>Today</p>
                </div>
                <div className="modal-day" onClick={onYesterdaybtn}>
                    <p className={`${(onYesterday ? 'classActive' : '')}`}>Yesterday</p>
                </div>
                <div className="modal-day" onClick={onWeekbtn}>
                    <p className={`${(onWeek ? 'classActive' : '')}`}>Last 7 days</p>
                </div>
                <div className="modal-day" onClick={onLastMonthbtn} >
                    <p className={`${(onLastMonth ? 'classActive' : '')}`}>Last 30 days</p>
                </div>
                <div className="modal-day" onClick={onMonthbtn}>
                    <p className={`${(onMonth ? 'classActive' : '')}`}>This Month</p>
                </div>
                <div className="modal-day"onClick={onCustombtn} >
                    <p className={`${(onCustom ? 'classActive' : '')}`}>Custom</p>
                </div>

                <div className="modal-btn" onClick={onApplybtn}>
                    APPLY
                </div>

            </div>
            <div className="modal-box-right">
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    className="date-picker"
                    />
            </div>
            </ModalBody>
            {/* <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter> */}
      </Modal>




            <div className="box-big-home">
                <div className="box-header">
                    <img src={GorillaLogo} className="icon-dashb"/>
                    <div className="box-outer-username">
                        <div className="box-username">
                            <p>Username</p>
                            <p>Company Name</p>
                        </div>
                        <img src={ProfileIc} className="icon-profile" />
                        <img src={LogoutIc} className="icon-logout"/>
                    </div>

                </div>
                <div className="box-content">
                    <div className="box-content-left">
                        <AiOutlineMenu  className="icon-bars"/>
                        <img src={DashboardIc} className="icon-dashb"/>
                    </div>
                    <div className="box-content-right">
                        <div className="box-right-dashboard">
                             <h1>DASHBOARD</h1>
                             <div className="box-date-dashboard" onClick={onChangeDate}>
                                  <img src={CalenderIc} className="icon-calender"/>
                                  <p>Period</p>
                                  <p>{finalStartDate}</p>
                                  <p>-</p>
                                  <p>{finalEndDate}</p>
                                  <AiOutlineDown className="icon-down"/>
                             </div>
                        </div>
                        <div className="box-right-market">
                             <p>MARKET INSIGHT</p>
                             <div className="box-market-icon">
                                <img src={HelpIc} className="icon-help"/>
                                <p>Click Here For Help</p>
                                <AiOutlineUp className="icon-up"/>
                             </div>
                        </div>
                        <div className="box-right-sales">
                            <div className="sales-left">
                                <div className="part-left-1">
                                    <p>Sales Turnover</p>
                                    <img src={MoreIc} className="icon-more"/>
                                </div>
                            </div>
                            <div className="sales-right">
                                <div className="part-left-2">
                                    <div className="part-left-2-1">
                                        <p>Rp 3,600.000</p>
                                        <div className="part-left-2-2">
                                            <img src={DownArrowIc} className="icon-down" />
                                            <p style={{color:'red'}}>13.8% </p>
                                            <p > last period in products sold</p>
                                        </div>
                                    </div>
                                    <img src={SalesTurnIc} className="icon-sales"/>
                                </div>           
                            </div>
                        </div>

                        <div className="box-right-chart">
                            <div className="chart-1">
                                <div className="box-chart-name-1">
                                    <p>AVERAGE PURCHASE VALUE</p>
                                    <div className="box-bydate">
                                        <p>Last 6 Month</p>
                                        <AiOutlineDown className="icon-down"/>
                                    </div>
                                    <img src={MoreIc}className="icon-more" />
                                </div>
                                <Bar data={data} options={options} />
                            </div>
                            <div className="chart-2">
                                 <div className="box-chart-name">
                                    <p>BEST SELLING SKU</p>
                                    <img src={MoreIc}className="icon-more" />
                                 </div>
                                 <div className="box-favorite-chart">
                                    <img src={Product1}/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 
                            </div>
                            <div className="chart-2">
                            <div className="box-chart-name">
                                    <p>TOP COMPETITOR SKU</p>
                                    <img src={MoreIc}className="icon-more" />
                                 </div>
                                 <div className="box-favorite-chart">
                                    <img src={Product1}/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                                 <div className="box-normal-chart">
                                    <img src={Product1} className="img-normal-chart"/>
                                    <div className="box-fav-name">
                                        <p>[NAMA PRODUCT]</p>
                                        <div className="box-fav-name-2">
                                            <p>Rp XXX</p>
                                            <p>[Jml Terjual]</p>
                                        </div>

                                    </div>
                                 </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}