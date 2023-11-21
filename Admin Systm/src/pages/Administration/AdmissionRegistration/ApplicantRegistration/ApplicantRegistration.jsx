import React from 'react';
import styles from './ApplicantRegistration.module.css';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ApplicantRegistration() {
  const navigate = useNavigate();
  const handleViewApplicantsClick = () => {
    
    navigate('/Administration/AdmissionRegistration/ApplicantRegistration/ViewApplicants');

  };
  const handleAllotApplicantsClick = () => {
    
    navigate('/Administration/AdmissionRegistration/ApplicantRegistration/AllotApplicants/AllotApplicants');

    
  };
  const handleRejectApplicantsClick = () => {
    
    navigate('/Administration/AdmissionRegistration/ApplicantRegistration/RejectApplicants/RejectApplicants');

    
  };
  const handleViewAllApplicantsClick = () => {
    
    navigate('/Administration/AdmissionRegistration/ApplicantRegistration/ViewAllApplicants/ViewAllApplicants');

    
  };
  return (
    <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}>
      <div className='p-4'>
        {/* title */}
        <div className={`${styles.title}`}>Applicant Registration</div>
        <div className={`${styles.title2} mt-3`}>Year / Semester</div>
        {/* section one */}
       <div className="mt-3 d-lg-flex   align-items-center justify-content-between ">
        
          <div className='col-12 col-md-4'>
          <Form.Select aria-label="Default select example">
      <option>Select Complaint Type</option>
      <option value="1">Educational</option>
      <option value="2">behaviorism</option>
      <option value="3">Administrative</option>
      <option value="4">Activities</option>
      <option value="5">Healthy</option>
      <option value="6">School Transportation</option>
      <option value="7">Accounting</option>
      <option value="8">Maintenance</option>
      <option value="9">Other</option>
    </Form.Select>
          </div>
          <div className='d-flex w-100 '>
          <div className='d-flex w-100 mt-3  '>
          <div className='w-100 ms-xl-4  ms-md-2 ms-1'>
          <Button  className={`${styles.btn} w-100 `} variant="outline-primary">Print</Button>
          </div>
          <div className='w-100 ms-xl-4 ms-md-2 ms-1'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary" onClick={handleViewAllApplicantsClick}>View All Applicants</Button>
          </div>
          <div className='w-100 ms-xl-4 ms-md-2 ms-1'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary" onClick={handleAllotApplicantsClick}>Allot Applicants</Button>
          </div>
          <div className='w-100 ms-xl-4 ms-md-2 ms-1'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary" onClick={handleRejectApplicantsClick}>Reject Applicants</Button>
          </div>
          </div>
          </div>
        </div>
        {/* section 2 */}

        <div className={`${styles.box} mt-md-5 mt-4`}>
        <div class="d-flex justify-content-center align-content-center  w-100">
        <table class="table table-bordered mt-3   text-center">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">course</th>
      <th className={`${styles.th} `} scope="col">Pending</th>
      <th className={`${styles.th} `} scope="col">In Process</th>
      <th className={`${styles.th} `} scope="col">Rejected</th>
      <th className={`${styles.th} `} scope="col">Alloted</th>
      <th className={`${styles.th} `} scope="col">Total</th>
      <th className={`${styles.th} `} scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>

  <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} `} >Kindergarten</td>
      <td data-label="Pending" className={`${styles.td}  `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} `}  >0</td>
       <td data-label="Total"  className={`${styles.td}  `}  >0</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td}  `} >Frist Introductory class</td>
      <td data-label="Pending" className={`${styles.td}  `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td}  `}  >1</td>
       <td data-label="Total"  className={`${styles.td}  `}  >0</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td}  `} >Second Introductory class</td>
      <td data-label="Pending" className={`${styles.td}  `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td}  `}  >1</td>
       <td data-label="Total"  className={`${styles.td}  `}  >0</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td}  `} >Third Introductory class</td>
      <td data-label="Pending" className={`${styles.td}  `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td}  `}  >1</td>
       <td data-label="Total"  className={`${styles.td}  `}  >0</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td}  `} >Frist Grade</td>
      <td data-label="Pending" className={`${styles.td}  `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td}  `}  >1</td>
       <td data-label="Total"  className={`${styles.td}  `}  >0</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td}  `} >Second Grade</td>
      <td data-label="Pending" className={`${styles.td} `}  >0</td>
       <td data-label="In Process"  className={`${styles.td}  `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} `}  >1</td>
       <td data-label="Total"  className={`${styles.td} `}  >2</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} `} >Third Grade</td>
      <td data-label="Pending" className={`${styles.td} `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} `}  >1</td>
       <td data-label="Total"  className={`${styles.td} `}  >2</td>
       <td data-label="Actions" className={`${styles.td} `}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>
    <tr className={`${styles.tr}  `} >
    <td data-label="course" className={`${styles.td} `} style={{ backgroundColor: '#6B97FE', color: '#fff' }}>Total</td>

      <td data-label="Pending" className={`${styles.td} `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} `}  >1</td>
       <td data-label="Total"  className={`${styles.td} `}  >2</td>
      <td data-label="Actions"  className={`${styles.td} `}  >  </td>
    </tr>
  
  
    
    
  </tbody>
      </table>
        </div>
        </div>


      </div>
       </div>
  )
}

export default ApplicantRegistration