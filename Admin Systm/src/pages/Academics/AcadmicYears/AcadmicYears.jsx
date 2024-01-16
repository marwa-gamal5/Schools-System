import React, {useEffect, useState} from 'react';
import AxiosInstance from "../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import styles from "../../Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/ManageGrades.module.css";
import {useNavigate} from "react-router-dom";

function AcadmicYears() {
    const [allYears,setallYears]=useState([])
    const navigate = useNavigate()

    const viewOne = (id) => {

        navigate(`/academics/viewacadmicyear/${id}`);
    };

    const ViewYears = async ()=>{
        await AxiosInstance.post('academic/view-acdmic-years/').then((res)=>{
            if(res.data.success){
            setallYears(res.data.success)
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
    }
    useEffect(() => {
        ViewYears()
    }, []);
    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px'}}>
            <h1 className='m-3'>Acadmic years</h1>
            <div className='m-3'>
                <button className='btn btn-info'
                        onClick={()=>{navigate('/academics/newacadmicyears')}}
                >
                    + Add New
                </button>
            </div>
            <div className={`${styles.box} mt-md-5 mt-4`}>
                <div className="d-flex justify-content-center align-content-center  w-100">
                    <table className="table table-bordered mt-3   text-center">
                        <thead>
                        <tr>

                            <th className={`${styles.th} `} scope="col">Year</th>
                            <th className={`${styles.th} `} scope="col">Semester Name</th>
                            <th className={`${styles.th} `} scope="col">Year Name</th>
                            <th className={`${styles.th} `} scope="col">Admission On</th>
                            <th className={`${styles.th} `} scope="col">Is Default</th>
                            <th className={`${styles.th} `} scope="col">Edit Student Status</th>
                            <th className={`${styles.th} `} scope="col">Actions</th>


                        </tr>
                        </thead>
                        <tbody>


                        {allYears.map((item, index) => (
                            <tr key={index} className={`${styles.tr}  `}>
                                <td data-label="course" className={`${styles.td} `}>{item.year_name}</td>
                                <td data-label="Pending" className={`${styles.td} `}>{item.semester_name}</td>
                                <td data-label="Pending" className={`${styles.td} `}>{item.year_name_g}</td>
                                <td style={{color: item.admission_on == 0 ? "red" : 'green'}} data-label="Total"
                                    className={`${styles.td} `}>{item.admission_on == 0 ? 'Disabled' : "Active"}</td>
                                <td style={{color: item.is_default == 0 ? "red" : 'green'}} data-label="Total"
                                    className={`${styles.td} `}>{item.is_default == 0 ? 'Disabled' : "Active"}</td>


                                <td style={{color: item.edit_std_status == 0 ? "red" : 'green'}} data-label="Total"
                                    className={`${styles.td} `}>{item.edit_std_status == 0 ? 'Disabled' : "Active"}</td>
                                <td data-label="Actions" className={`${styles.td} `}>

                                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            className={`${styles.button1} m-0 ms-3`}


                                            onClick={() => {
                                                viewOne(item.id);
                                            }}
                                    >
                                        <p className={`${styles.p1} m-0`}>Edit</p>


                                    </button>
                                </td>
                            </tr>
                        ))}


                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default AcadmicYears;