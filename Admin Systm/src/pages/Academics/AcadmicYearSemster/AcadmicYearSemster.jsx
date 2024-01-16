import React, {useEffect, useState} from 'react';
import AxiosInstance from "../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import styles
    from "../../Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/ManageGrades.module.css";
import DatePicker from "react-datepicker";

function AcadmicYearSemster(props) {
    const [AcademicList,setAcademicList]=useState([])
    const [selectedAcademic,setselectedAcademic] = useState({})
    const [Years, setYears] = useState([])
    const [AddAcademic, setAddAcademic] =useState({})
    const getyears = async ()=>{
        await AxiosInstance.post('academic/view-all-years/').then((res)=>
        {
            if(res.data.success){
                setYears(res.data.success)
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


    const ViewYears = async ()=>{
       await AxiosInstance.post('academic/view-all-semsters/').then((res)=>{
            if(res.data.success){
                setAcademicList(res.data.success)
                console.log(res.data.success)

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
               text: 'server error',
               icon: 'error',
           })
       })
    }

    const updateSem =async ()=>{
        const frmdata = new FormData
        frmdata.append('id',selectedAcademic.id)
        frmdata.append('no_of_quarters_each_sem',selectedAcademic.no_of_quarters_each_sem)
        frmdata.append('no_of_semesters',selectedAcademic.no_of_semesters)
       await AxiosInstance.post('academic/update-semster/',frmdata).then((res)=>{
           if(res.data.success){
               Swal.fire({
                   title: 'Success!',
                   text: res.data.success,
                   icon: 'success',
               }).then(()=>{
                   ViewYears()
               })
           }
       }).catch(()=>{
           Swal.fire({
               title: 'Error!',
               text: 'server error',
               icon: 'error',
           })
       })
    }
    
    const AddSemester = async ()=>{
        const arro = ['1','2','3']
        //     console.log(AddAcademic.no_of_semesters)
        // console.log(arro.includes(AddAcademic.no_of_semesters))
        if(!arro.includes(AddAcademic.no_of_semesters)){
            Swal.fire({
                title: 'Error',
                text: 'Please Choose a Valid No Of Semester',
                icon: 'error',
            })
            return;
        }
        if(!arro.includes(AddAcademic.no_of_quarters_each_sem)){
            console.log(AddAcademic.no_of_quarters_each_sem)
            Swal.fire({
                title: 'Error',
                text: 'Please Choose a Valid No Of Quarters',
                icon: 'error',
            })
            return;
        }
        if(AddAcademic.year === undefined || AddAcademic.year ==='0' || AddAcademic.year ===0 ){
             Swal.fire({
                title: 'Error',
                text: 'Please Choose a Valid Year',
                icon: 'error',
            })
            return;
        }
        console.log(AddAcademic.year)
        const frmData= new FormData

        frmData.append('year_id',AddAcademic.year)
        frmData.append('no_of_semesters',AddAcademic.no_of_semesters)
        frmData.append('no_of_quarters_each_sem',AddAcademic.no_of_quarters_each_sem)



        await AxiosInstance.post('academic/add-semster/',frmData).then((res)=>{
            console.log(res.data.error)
            if(res.data.success){
                Swal.fire({
                    title: 'Success',
                    text: res.data.success,
                    icon: 'success',
                }).then(()=>{
                    ViewYears()
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
                text: 'server error',
                icon: 'error',
            })
        })
    }
    useEffect(() => {
        ViewYears()
        getyears()
    }, []);

    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px'}}>
            <h1 className='m-3'>Acadmic Year Semster</h1>
            <div className='m-3'>
                <div className='col input-group-text'>
                    <div className="mb-3">
                        <label className="form-label me-2">Year</label>
                        <select
                            value={selectedAcademic.year}
                            onChange={(e) => {
                                setAddAcademic({...AddAcademic, year: e.target.value})

                            }}
                            className="form-select" id="group5" name="group5">
                            <option value={0}>Choose</option>
                            {
                                Years.map((item, index) => (
                                    <option key={index} value={item.id}>{item.year}</option>

                                ))
                            }


                        </select>
                    </div>
                    <div className="ms-3">
                        <label htmlFor="group5">No of Semesters</label>
                        <select
                            value={selectedAcademic.no_of_semesters}
                            onChange={(e) => {
                                setAddAcademic({...AddAcademic, no_of_semesters: e.target.value});

                            }}

                            className="form-select" id="group5" name="group5">
                            <option value={0}>Choose</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>

                        </select>
                    </div>

                    <div className=" ms-3">
                        <label htmlFor="input6" className="form-label">No Of Quarters</label>
                        <select
                            value={selectedAcademic.no_of_quarters_each_sem}
                            onChange={(e) => {
                                setAddAcademic({...AddAcademic, no_of_quarters_each_sem: e.target.value});

                            }}
                            className="form-select" id="input6" name="input6">
                            <option value={0}>Choose</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>

                        </select>
                    </div>

                    <button className='btn btn-info ' type='button'
                            onClick={AddSemester}

                    >+Add
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{selectedAcademic.year_name}</h5>
                            {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                            {/*        aria-label="Close"></button>*/}
                        </div>
                        <div className="modal-body">


                            {/* Repeat similar structure for Input 5 and Input 6 */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="group5">No of Semesters</label>
                                    <select
                                        value={selectedAcademic.no_of_semesters}
                                        onChange={(e) => {
                                            setselectedAcademic({...selectedAcademic, no_of_semesters: e.target.value})
                                        }}
                                        className="form-select" id="group5" name="group5">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>

                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="input6" className="form-label">No Of Quarters</label>
                                    <select
                                        value={selectedAcademic.no_of_quarters_each_sem}
                                            onChange={(e) => {
                                                setselectedAcademic({ ...selectedAcademic , no_of_quarters_each_sem:e.target.value} )
                                            }}
                                        className="form-select" id="input6" name="input6">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>

                                    </select>
                                </div>
                            </div>

                            {/* Input 7 */}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button
                                onClick={updateSem}
                                type="button" className="btn btn-primary">Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.box} mt-md-5 mt-4`}>
                <div className="d-flex justify-content-center align-content-center  w-100">
                    <table className="table table-bordered mt-3   text-center">
                        <thead>
                        <tr>

                            <th className={`${styles.th} `} scope="col">Year</th>
                            <th className={`${styles.th} `} scope="col">No Of Semesters</th>

                            <th className={`${styles.th} `} scope="col">No Of Quarters</th>
                            <th className={`${styles.th} `} scope="col">Actions</th>

                        </tr>
                        </thead>
                        <tbody>


                        {AcademicList.map((item, index) => (
                            <tr key={index} className={`${styles.tr}  `}>
                                <td data-label="Year" className={`${styles.td} `}>{item.year_name}</td>
                                <td data-label="No Of Semesters" className={`${styles.td} `}>{item.no_of_semesters}</td>
                                <td data-label="No Of Quarters"
                                    className={`${styles.td} `}>{item.no_of_quarters_each_sem}</td>

                                <td data-label="Actions" className={`${styles.td} `}>

                                    <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            className={`${styles.button1} m-0 ms-3`}
                                            onClick={() => {
                                                setselectedAcademic(AcademicList.find(obj => obj.id == item.id))
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

        </div>

    );
}

export default AcadmicYearSemster;