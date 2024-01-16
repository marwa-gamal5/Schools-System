import React, {useEffect, useState,useRef } from 'react';
import DatePicker from "react-datepicker";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";
import {useNavigate, useParams} from "react-router-dom";
import { toHijri, toGregorian } from "hijri-converter";
import Swal from "sweetalert2";

function ViewAcademicYear(props) {

    const {idd} = useParams()
    console.log('idd',idd)
    const [Years,setYears]=useState([])
    const [Year,setYear]=useState('')
    const [Semester,setSemester]=useState('')

    const [YearnameG,setYearNameG]=useState('')
    const [Yearnameh,setYearNameh]=useState('')
    const [SemName,setSemname]=useState('')
    const [Weeks,setWeeks] = useState(0)
    const [startDate,setstartDate] = useState(new Date('2024/1/1'))
    const [endDate,setendDate] = useState(new Date('2024/1/1'))

    const navigate = useNavigate()
    const [Checks, setChecks] = useState({
        admissionon:false,
        isdefault:false,
        studentstatus:false,
        gradeedit:false,
        weeklplan:false,
        weeklyplandates:false,
        materialcover:false,
        applicanton:false
    })

    const Allowed_plans = Array.from({ length: 60 }, (_, index) => index + 1);

    const [createWP,setcreateWP] = useState(0)
    const [viewWP,setviewWP] = useState(0)

    const SaveYear = async ()=>{
        const dateObjectst = new Date(startDate);

        const yearst = dateObjectst.getFullYear();
        const monthst = String(dateObjectst.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const dayst = String(dateObjectst.getDate()).padStart(2, '0');
        const starttingdate = `${yearst}-${monthst}-${dayst}`;

        const dateObjecten = new Date(startDate);
        const yearen = dateObjecten.getFullYear();
        const monthen = String(dateObjecten.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const dayen = String(dateObjecten.getDate()).padStart(2, '0');
        const endingate = `${yearen}-${monthen}-${dayen}`;
        let admissionon = 0
        let isdefault = 0
        let studentstatus = 0
        let gradeedit = 0
        let weeklplan = 0
        let weeklyplandates = 0
        let materialcover = 0
        let applicanton = 0
        if(Checks.admissionon){admissionon=1}else {admissionon=0}
        if(Checks.isdefault){isdefault=1}else {isdefault=0}
        if(Checks.studentstatus){studentstatus=1}else {studentstatus=0}
        if(Checks.gradeedit){gradeedit=1}else {gradeedit=0}
        if(Checks.weeklplan){weeklplan=1}else {weeklplan=0}
        if(Checks.weeklyplandates){weeklyplandates=1}else {weeklyplandates=0}
        if(Checks.materialcover){materialcover=1}else {materialcover=0}
        if(Checks.applicanton){applicanton=1}else {applicanton=0}
        const frmData = new FormData
        frmData.append('id', idd);

        frmData.append('start_date',starttingdate)
        frmData.append('end_date',endingate)
        frmData.append('number_of_weeks',Weeks)
        frmData.append('admission_on',admissionon)
        frmData.append('is_default',isdefault)
        frmData.append('edit_std_status',studentstatus)
        frmData.append('grade_edit',gradeedit)
        frmData.append('week_plan',weeklplan)
        frmData.append('ignore_weekly_pal_dates',weeklyplandates)
        frmData.append('allow_add_material_cover',materialcover)
        frmData.append('job_applicant_on',applicanton)
        frmData.append('allow_to_create_weekly_plan',createWP)
        frmData.append('allow_to_view_weekly_plan',viewWP)
        console.log("formdata" , frmData.entries())
        await AxiosInstance.post('academic/update-acdmic-year/',frmData).then((res)=>{

            if(res.data.success){

                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'sucess',
                }).then(()=>{
                    navigate('/academics/acadmicyears')
                })
            }
            if(res.data.error){
                console.log("res.data.error",res.data.error)
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                })
            }
        }).catch((reso)=>{
            Swal.fire({
                title: 'Error!',
                text:'server error',
                icon: 'error',
            })
        })
    }


    const handleCheckboxChange = (checkboxName) => {

        setChecks((prevValues) => ({
            ...prevValues,
            [checkboxName]: !prevValues[checkboxName],
        }));
        console.log("Checks",Checks)
    };

    const handleInputascore= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setWeeks(inputValue);
    };


    const GetYears =async ()=>{
        await AxiosInstance.post('academic/view_years_by_semster/').then((res)=>{
            if (res.data.success){
                setYears(res.data.success)
                console.log(res.data.success)
            }
        })
    }


    const GetYear = async () => {
        await AxiosInstance.post(`academic/view-one-acdmic-year/${idd}/`).then((res) => {
            console.log(res)
            if (res.data.success) {
                const academicYear = res.data.success;
                console.log("view-one",res.data.success)

                setYear(academicYear.year);
                setSemester(academicYear.semester);
                setYearNameG(academicYear.year_name_g);


                setYearNameh(academicYear.year_name_h);
                setSemname(academicYear.semester_name);
                setWeeks(academicYear.number_of_weeks);
                setstartDate(new Date(academicYear.start_date));
                setendDate(new Date(academicYear.end_date));





                setChecks({
                    admissionon: academicYear.admission_on === 1 ? true : false,
                    isdefault: academicYear.is_default === 1 ? true : false,
                    studentstatus:  academicYear.edit_std_status === 1 ? true : false,
                    gradeedit:  academicYear.grade_edit === 1 ? true : false,
                    weeklplan:  academicYear.week_plan === 1 ? true : false,
                    weeklyplandates: academicYear.ignore_weekly_pal_dates === 1 ? true : false,
                    materialcover: academicYear.allow_add_material_cover === 1 ? true : false,
                    applicanton: academicYear.job_applicant_on === 1 ? true : false,
                });
                setcreateWP(academicYear.allow_to_create_weekly_plan);
                setviewWP(academicYear.allow_to_view_weekly_plan);
            }
        })
    }


    useEffect(() => {
        GetYears()
        GetYear()
    }, []);

    return (
        <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px'}}>
            <div className='m-3'>
                <h1>View One Academic Year</h1>
                <div className='row mt-3'>
                    <div className="col">
                        <label htmlFor="group3">Year</label>
                        <input placeholder='0000/0000'
                               type="text"
                               id="numericInput"
                               disabled
                               className="form-control"
                               value={Year}

                               aria-label="Amount (to the nearest dollar)"/>
                    </div>

                    <div className="col">
                        <label htmlFor="group3">Semester</label>
                        <input placeholder='0000/0000'
                               type="text"
                               id="numericInput"
                               disabled
                               className="form-control"
                               value={Semester}

                               aria-label="Amount (to the nearest dollar)"/>
                    </div>


                    <div className="col">
                        <label htmlFor="group3">Year name (G)</label>
                        <input placeholder='0000/0000'
                               type="text"
                               id="numericInput"
                               disabled
                               className="form-control"
                               value={YearnameG}

                               aria-label="Amount (to the nearest dollar)"/>
                    </div>


                    <div className='col'>

                        <label htmlFor="group3">Year Name (h)</label>
                        <input placeholder='0000/0000'
                               type="text"
                               disabled
                               id="numericInput"
                               value={Yearnameh}
                            // value={Amount}
                            // onInput={handleInputamount}
                               className="form-control"
                               aria-label="Amount (to the nearest dollar)"/>
                    </div>

                </div>

                <div className='row mt-5'>
                    <div className="col">
                        <label htmlFor="group3">Semester name</label>
                        <input placeholder='0000/0000'
                               type="text"
                               id="numericInput"
                               disabled
                               className="form-control"
                               value={SemName}

                               aria-label="Amount (to the nearest dollar)"/>
                    </div>
                    <div className="col">
                        <div className="input-group ">
                            <label htmlFor="calo1">Start Date <span className="text-danger">*</span></label>
                            <DatePicker
                                id="calo1"
                                className="form-control border-right-0"
                                dateFormat="yyyy-MM-dd"
                                aria-describedby="button-addon2"
                                selected={startDate}
                                value={startDate}
                                onChange={(date) => setstartDate(date)}
                            />


                        </div>

                    </div>
                    <div className="col">
                        <label htmlFor="calo">End Date <span className="text-danger">*</span></label>
                        <DatePicker id='calo' className={'form-control'} dateFormat="yyyy-MM-dd"
                                    selected={endDate}
                                    value={endDate}
                                    onChange={(date) => setendDate(date)}
                        />
                    </div>

                    <div className='col'>

                        <label htmlFor="group3">No Of Weeks</label>
                        <input placeholder='Type Amount'
                               type="text"
                               id="numericInput"
                               value={Weeks}
                               onInput={handleInputascore}
                               className="form-control"
                               aria-label="Amount (to the nearest dollar)"/>
                    </div>

                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Admission On" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.admissionon}
                                               onChange={() => handleCheckboxChange('admissionon')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Is Default" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.isdefault}
                                               onChange={() => handleCheckboxChange('isdefault')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Edit Student Status" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.studentstatus}
                                               onChange={() => handleCheckboxChange('studentstatus')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Grade Edit" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.gradeedit}
                                               onChange={() => handleCheckboxChange('gradeedit')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Weekly Plan Access" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.weeklplan}
                                               onChange={() => handleCheckboxChange('weeklplan')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Ignore Weekly Plan Dates" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                                checked={Checks.weeklyplandates}
                                               onChange={() => handleCheckboxChange('weeklyplandates')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Allow Update Material Cover " disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.materialcover}
                                               onChange={() => handleCheckboxChange('materialcover')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="en , Job Applicant On" disabled/>

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <div className="form-check">
                                        <input type="checkbox"
                                               checked={Checks.applicanton}
                                               onChange={() => handleCheckboxChange('applicanton')}
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <label htmlFor="group4">allow_to_create_weekly_plan</label>
                        <select
                            onChange={(e) => {
                                setcreateWP(e.target.value);
                            }}
                            className="form-select" id="group4" name="group4"
                            value={createWP}
                        >
                            <option value={0} selected disabled>Choose</option>

                            {Allowed_plans.map((item, index) => (
                                <option key={index} value={item}>{item}</option>

                            ))}


                        </select>
                    </div>
                    <div className='col'>
                        <label htmlFor="group4">allow_to_view_weekly_plan</label>
                        <select
                            onChange={(e) => {
                                setviewWP(e.target.value)
                            }}

                            className="form-select" id="group4" name="group4"
                            value={viewWP}
                        >
                            <option value={0} selected disabled>Choose</option>

                            {Allowed_plans.map((item, index) => (
                                <option key={index} value={item}>{item}</option>

                            ))}


                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 '>

                        <button className='btn btn-dark m-5'
                                onClick={() => {
                                    SaveYear()
                                }}
                        > Save Changes
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ViewAcademicYear;