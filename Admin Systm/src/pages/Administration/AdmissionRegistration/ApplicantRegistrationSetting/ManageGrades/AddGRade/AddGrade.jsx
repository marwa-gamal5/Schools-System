import React, {useEffect, useState} from 'react';
import styles from "../ManageGrades.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../../../../Utils/AxiosInstance.jsx";
import Swal from 'sweetalert2'
function AddGrade(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [Years,setYears] = useState([])
    const [Amount,setAmount] = useState(0)
    const [Score,setScore] = useState(0)
    const [yearInput,setyearInput] = useState(0)
    const [isActive,setIsactive] = useState(0)
    const [isEnable,setIsenable] = useState(0)
    const [ageLimit,setageLimit]  = useState(0)


    const handleInputamount= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setAmount(inputValue);
    };
    const handleInputascore= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setScore(inputValue);
    };
    const GetYears = async ()=> {
        axiosInstance.post('general_settings/view-all-grades/').then((res) => {
            console.log(res.data.success)
            setYears(res.data.success)
        })
    }

    const AddGrade =async ()=>{
        console.log(yearInput)
        console.log(ageLimit)
        const frmData = new FormData
         //     "enable_approval_system":1,
        //     "age_limit_g":"2001-05-15"
        const dateObject = new Date(ageLimit);

// Extract year, month, and day components

        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(dateObject.getDate()).padStart(2, '0');
        let isMissing=''
        const statesArray = [yearInput,Amount,Score,ageLimit]
        const messagesArray = ['Grade', 'Amount', 'Score' ,'Age Limit'];
        for (let i = 0; i < statesArray.length; i++) {
            const value = statesArray[i];
            // Check if the trimmed value is an empty string
            if (value === 0) {
                 Swal.fire({
                    title: 'Error!',
                    text: messagesArray[i] + ' is Missing ',
                    icon: 'error',
                }).then(()=>{
                    isMissing=''
                })
                return; // Stop checking once an empty state is found
            }
        }

// Create the formatted date string in "yyyy-mm-dd" format
        const formattedDateString = `${year}-${month}-${day}`;
        console.log(formattedDateString)
        frmData.append("grade_id",yearInput )
        frmData.append("is_active",isActive )
        frmData.append('minimum_score',Score)
        frmData.append('amount',Amount)
        frmData.append('enable_approval_system',isEnable)
        frmData.append('age_limit_g',formattedDateString)

        axiosInstance.post('general_settings/add-reg-grade/',frmData).then((res)=>{
            if(res.data.success){
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'sucess',
                })
            }
            if(res.data.error){
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                })            }
            console.log(res.data)
        }).catch((res)=>{

            Swal.fire({
                title: 'Error!',
                text:'Server Error ',
                icon: 'error',
            })
        })
    }

        useEffect(() => {
            GetYears()
        }, []);
    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px"}}>
            <div className='p-4 mt-4'>
                {/* title */}
                <div className={`${styles.title}`}>Add Registration Grades</div>
                <div className="row mt-4">
                    <div className="col">
                        <label htmlFor="group1">Grade</label>

                        <select onChange={(e) => {
                            setyearInput(e.target.value)
                        }} className="form-select" id="group1" name="group1">
                            <option   value='none'>select grade</option>
                            {Years.map(item => (
                                <option key={item.id} value={item.id}>{item.grade_name_lng1}</option>
                            ))}


                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="group2">Min Score</label>
                        <input placeholder='Type Min Score'
                               type="text"
                               id="numericInput"
                               value={Score}
                               onInput={handleInputascore}
                               className="form-control"
                               aria-label="Amount (to the nearest dollar)"/>


                    </div>
                    <div className="col">
                        <label htmlFor="group3">Amount</label>
                        <input placeholder='Type Amount'
                               type="text"
                               id="numericInput"
                               value={Amount}
                               onInput={handleInputamount}
                              className="form-control"
                               aria-label="Amount (to the nearest dollar)"/>

                    </div>
                    <div className="col">
                        <label htmlFor="group4">Is Active </label>
                        <select onChange={(e)=>{setIsactive(e.target.value)}} className="form-select" id="group4" name="group4">
                            <option value="1">Activated</option>
                            <option selected value="0">Deactivated</option>

                        </select>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <label htmlFor="group5">Enable Approval System</label>
                        <select onChange={(e)=>{setIsenable(e.target.value)}} className="form-select" id="group4" name="group4">
                            <option value="1">Activated</option>
                            <option selected value="0">Deactivated</option>

                        </select>
                    </div>
                    <div className="col">
                                <label htmlFor="floatingInputGroup2">Age Limit (Gregorian )</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <div className="form-floating is-invalid">
                                <DatePicker    className={'form-control'} dateFormat="yyyy-MM-dd" selected={startDate}
                                            onChange={(date) => setageLimit(date)}/>
                            </div>

                        </div>



                    </div>
                    <div className="col">
                        <label htmlFor="group7">Age Limit (Hijri)</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <div className="form-floating is-invalid">
                                <DatePicker className={'form-control'} dateFormat="yyyy-MM-dd"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                />
                            </div>

                        </div>
                    </div>
                    <div className={'mt-4 '}>

                    <Button className={'btn '} onClick={AddGrade}> add</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddGrade;