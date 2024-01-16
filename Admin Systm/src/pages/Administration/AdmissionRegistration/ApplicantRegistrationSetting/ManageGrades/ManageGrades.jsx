import React, {useEffect, useState} from 'react';
import styles from './ManageGrades.module.css';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosInstance from "../../../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
function ManageGrades(props) {
    const navigate = useNavigate();
    const [Grades,setGrades] = useState([])
    const [oneGrade,setoneGrade]=useState({})
    const [Amount,setAmount] = useState(0)
    const [Score,setScore] = useState(0)
    const [isActive,setIsactive] = useState(0)
    const [isEnable,setIsenable] = useState(0)
    const [ageLimit,setageLimit]  = useState(0)

    const viewOne = (idd) => {

        AxiosInstance.post('general_settings/view-one-reg-grade/',{id:idd}).then((res)=>{
            if(res.data.success){
                console.log(res.data.success)
            setoneGrade(res.data.success)
                 setAmount(res.data.success.amount)
                  setScore(res.data.success.minimum_score)
                 setIsactive(res.data.success.is_active)
                setIsenable(res.data.success.enable_approval_system)
                 setageLimit(res.data.success.age_limit_g)

            }
            if(res.data.error){
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                })
            }
        })


    };
    const GotoAdd = () => {

        navigate('/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/AddGRade');


    };
    const updateOneGrade =async ()=>{
        const dateObject = new Date(ageLimit);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(dateObject.getDate()).padStart(2, '0');
        const formattedDateString = `${year}-${month}-${day}`;
        console.log(Amount,Score,isActive,isEnable)
        console.log(formattedDateString)
        const frmData = new FormData
        frmData.append('id',oneGrade.id)
        frmData.append('amount',Amount)
        frmData.append('minimum_score',Score)
        frmData.append('is_active',isActive)
        frmData.append('enable_approval_system',isEnable)
        frmData.append('age_limit_g',formattedDateString.toString())
        AxiosInstance.post('general_settings/update-reg-grade/',
            frmData
            ).then((res)=>{
                if(res.data.success){
                    Swal.fire({
                        title: 'Success!',
                        text: res.data.success,
                        icon: 'success',
                    }).then(()=>{
                        AxiosInstance.post('general_settings/view-all-reggrades/').then((res)=> {
                            if (res.data.success) {
                                setGrades(res.data.success)
                            }
                        })
                    })
                }
            if(res.data.error){
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                })
            }


        }).catch(()=>{
            Swal.fire({
                title: 'Error!',
                text: 'Server Error',
                icon: 'error',
            })
        })
    }

    useEffect(() => {
        AxiosInstance.post('general_settings/view-all-reggrades/').then((res)=>{
        if(res.data.success){
            setGrades(res.data.success)
            console.log(res.data.success)
        }
        if(res.data.error){
            Swal.fire({
                title: 'Error!',
                text: res.data.error,
                icon: 'error',
            })
        }
        })
    }, []);


    const toGgleActivation = async(idd,ststus,name)=>{
        let stt= ''

        if (ststus===0){
            stt='Activate'
        }
        if (ststus===1){
            stt='Disable'
        }
        Swal.fire({
            title: '!',
            text: `Are you Sure to ${stt}  ${name } `,
            icon: 'question',
            confirmButtonText: `Yes ${stt}`,
            showCancelButton: true,
            cancelButtonColor: '#d33',

            cancelButtonText: 'No',
        }).then((result)=>{
            if(result.isConfirmed){
                AxiosInstance.post('general_settings/toggle/',{id:idd}).then((res)=>{
                    if(res.data.success){
                        Swal.fire({
                            title: 'Success!',
                            text: res.data.success,
                            icon: 'success',
                        }).then(()=>{
                            AxiosInstance.post('general_settings/view-all-reggrades/').then((res)=>{
                                if(res.data.success){
                                    setGrades(res.data.success)
                                }
                        })

                        })
                    }
                })
            }
        })

    }

    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px"}}>
            <div className='p-4'>
                {/* title */}
                <div className={`${styles.title}`}>Manage Registration Grades</div>
                {/* section one */}
                <div className="mt-3 d-lg-flex   align-items-center justify-content-between ">


                    <div className='d-flex w-50 '>
                        <div className='d-flex w-100 mt-3  '>
                            <div className='w-50 ms-xl-4  ms-md-2 ms-1'>
                                <Button onClick={GotoAdd} className={`${styles.btn} w-50 `} variant="outline-primary">Add
                                    Grade (Reg)</Button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* section 2 */}

                <div className={`${styles.box} mt-md-5 mt-4`}>
                    <div className="d-flex justify-content-center align-content-center  w-100">
                        <table className="table table-bordered mt-3   text-center">
                            <thead>
                            <tr>

                                <th className={`${styles.th} `} scope="col">Name</th>
                                <th className={`${styles.th} `} scope="col">Code</th>

                                <th className={`${styles.th} `} scope="col">Status</th>
                                <th className={`${styles.th} `} scope="col">Actions</th>

                            </tr>
                            </thead>
                            <tbody>


                            {Grades.map((item, index) => (
                                <tr key={index} className={`${styles.tr}  `}>
                                    <td data-label="course" className={`${styles.td} `}>{item.grade_name}</td>
                                    <td data-label="Pending" className={`${styles.td} `}>{item.code}</td>

                                    <td style={{color: item.is_active == 0 ? "red" : 'green'}} data-label="Total"
                                        className={`${styles.td} `}>{item.is_active == 0 ? 'Disabled' : "Active"}</td>
                                    <td data-label="Actions" className={`${styles.td} `}>
                                        <button className={`${styles.button1} m-0`} onClick={()=>{toGgleActivation(item.id,item.is_active,item.grade_name)}}>
                                            <p style={{color: item.is_active == 0 ? "green" : 'red'}}
                                               className={`${styles.p1} m-0`}>{item.is_active == 0 ? 'Activate' : "Disable"}</p>
                                        </button>
                                        <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                className={`${styles.button1} m-0 ms-3`}
                                                onClick={() => {
                                            viewOne(item.id)
                                        }}
                                        >
                                            <p
                                                className={`${styles.p1} m-0`}>Edit</p>
                                        </button>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{oneGrade.grade_name}</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                                {/*        aria-label="Close"></button>*/}
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    {/* Input 1 */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input1" className="form-label">Amount</label>
                                        <input onChange={(e)=>{setAmount(e.target.value)}} type="text" className="form-control" id="input1" value={Amount}/>
                                    </div>

                                    {/* Input 2 */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input2" className="form-label">Score</label>
                                        <input onChange={(e)=>{setScore(e.target.value)}} value={Score} type="text" className="form-control" id="input2"/>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Repeat similar structure for Input 3 and Input 4 */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input3" className="form-label">Age Limit (G)</label>
                                        <DatePicker
                                            className={'form-control'} dateFormat="yyyy-MM-dd"
                                                       selected={ageLimit ? new Date(ageLimit): "" }
                                                       onChange={(date) => setageLimit(date)}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input3" className="form-label">Age Limit (H)</label>
                                        <DatePicker className={'form-control'} dateFormat="yyyy-MM-dd"
                                                    selected={oneGrade.age_limit_h ? new Date(oneGrade.age_limit_h) : ""}
                                            // onChange={(date) => setageLimit(date)}
                                        />
                                    </div>
                                </div>

                                {/* Repeat similar structure for Input 5 and Input 6 */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="group5">Approval System</label>
                                        <select value={isEnable}
                                            onChange={(e) => {
                                            setIsenable(e.target.value)
                                        }}
                                            className="form-select" id="group5" name="group5">
                                            <option  value={1}>Activated</option>
                                            <option  value={0}>Deactivated</option>

                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input6" className="form-label">Is Active</label>
                                        <select value={isActive}
                                                onChange={(e) => {
                                                setIsactive(e.target.value)
                                            }}
                                                className="form-select" id="input6" name="input6">
                                            <option  value={1}>Activated</option>
                                            <option  value={0}>Deactivated</option>

                                        </select>
                                    </div>
                                </div>

                                {/* Input 7 */}

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button onClick={updateOneGrade} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ManageGrades;