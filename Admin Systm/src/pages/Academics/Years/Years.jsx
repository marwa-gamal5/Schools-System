import React, {useEffect, useState} from 'react';
import styles
    from "./Years.module.css";
import AxiosInstance from "../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

function Years(props) {
    const[yearsList,setyearsList]=useState([])
    const [Year,setyear]=useState(0)
    const [Yearmodal,setyearmodal]=useState(0)
    const [Yearid,setYearid]=useState(0)
    const handleInputyear= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setyear(inputValue);
    };
    const handleyearmodal= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setyearmodal(inputValue)
    };


    const viewYears=async ()=>{
        AxiosInstance.post('academic/view-all-years/').then((res)=>{
            if(res.data.success){
                console.log(res.data.success)
                setyearsList(res.data.success)
        }
            else{
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

    const AddYear = async ()=>{
        Swal.fire({
            title: '!',
            text: `Are you Sure to add ${Year} as a new year `,
            icon: 'question',
            confirmButtonText: `Yes`,
            showCancelButton: true,
            cancelButtonColor: '#d33',

            cancelButtonText: 'No',
        }).then((result)=>{
            if (result.isConfirmed){


        const frmData = new FormData
        frmData.append('year',Year)
        AxiosInstance.post('academic/add-year/',frmData).then((res)=>{
            if(res.data.success){
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(()=>{
                    viewYears()
                })
            }
            else {
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
    }
        )}

    const DeleteYear=async (idd,yeaa)=>{
        Swal.fire({
            title: '!',
            text: `Are you Sure to Delete ${yeaa } `,
            icon: 'question',
            confirmButtonText: `Yes `,
            showCancelButton: true,
            cancelButtonColor: '#d33',

            cancelButtonText: 'No',
        }).then((result)=>{
            if(result.isConfirmed){
                AxiosInstance.post('academic/delete-year/',{id:idd}).then((res)=>{
                    if(res.data.success){
                        Swal.fire({
                            title: 'Success!',
                            text: res.data.success,
                            icon: 'success',
                        }).then(()=>{
                           viewYears()

                        })
                    }
                })
            }
        })
    }

    const viewOne = async (idd)=>{
        AxiosInstance.post('academic/view-one-year/',{id:idd}).then((res)=>{
            if(res.data.success){
                console.log(res.data.success)
                setyearmodal(res.data.success)
            }
        })
    }

    const updateYear= async ()=>{
        const frmData= new FormData
        frmData.append('id',Yearid)
        frmData.append('year',Yearmodal)
        console.log(Yearmodal)
        AxiosInstance.post('academic/update-year/',frmData).then((res)=>{
            if(res.data.success){
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(()=>{
                    viewYears()
                })
            }
            if (res.data.error){
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
        viewYears()
    }, []);
    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px'}}>
            <h1 className='m-3'>Years</h1>
            <br/>
            <div className='ms-3 row'>
                <div className='col-6 input-group-text'>
                    <label className="form-label me-2">Year</label>
                    <input value={Year} onChange={handleInputyear} className='form-control ms-3  me-3 ' id='yearInput'/>
                    <button type='button'
                            onClick={() => {
                                AddYear()
                            }}
                            className='btn btn-info'> + add
                    </button>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className={`${styles.box} mt-md-5 mt-4`}>
                            <div className="d-flex justify-content-center align-content-center  w-100">
                                <table className="table table-bordered mt-3   text-center">
                                    <thead>
                                    <tr>

                                        <th className={`${styles.th} `} scope="col">Year</th>
                                        <th className={`${styles.th} `} scope="col">Actions</th>

                                    </tr>
                                    </thead>
                                    <tbody>


                                    {yearsList.map((item, index) => (
                                        <tr key={index} className={`${styles.tr}  `}>
                                            <td data-label="course" className={`${styles.td} `}>{item.year}</td>


                                            <td data-label="Actions" className={`${styles.td} `}>
                                                <button className={`${styles.button1} m-0`}
                                                        onClick={() => {
                                                            DeleteYear(item.id, item.year)
                                                        }}
                                                >
                                                    <p
                                                        className={`${styles.p1} m-0 `}>Delete</p>
                                                </button>
                                                <button type='button' data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        className={`${styles.button1} m-0 ms-3`}
                                                    onClick={() => {
                                                        viewOne(item.id)
                                                        setYearid(item.id)
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
                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{Yearmodal.year}</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal"*/}
                                {/*        aria-label="Close"></button>*/}
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    {/* Input 1 */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="input1" className="form-label">Year</label>
                                        <input
                                            onInput={(e)=>{
                                                handleyearmodal(e)
                                            }}

                                            type="text" className="form-control" id="input1" value={Yearmodal.year}/>
                                    </div>

                                    {/* Input 2 */}

                                </div>




                                {/* Input 7 */}

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button
                                    onClick={()=>{
                                        updateYear()
                                    }}
                                    type="button" className="btn btn-primary">Save
                                    changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Years;