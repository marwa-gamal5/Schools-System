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
  return (
    <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}>
      <div className='p-4'>
        {/* title */}
        <div className={`${styles.title}`}>Applicant Registration</div>
        <div className={`${styles.title2} mt-3`}>Year / Semester</div>
        {/* section one */}
       <div className="mt-3 d-lg-flex   align-items-center justify-content-between ">
        
          <div className='col-4'>
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
          <div className='d-flex w-100 mt-3 '>
          <div className='w-100 ms-4 '>
          <Button  className={`${styles.btn} w-100 `} variant="outline-primary">Print</Button>
          </div>
          <div className='w-100 ms-4'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary">View Applicants</Button>
          </div>
          <div className='w-100 ms-4'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary">Allot Applicants</Button>
          </div>
          <div className='w-100 ms-4'>
          <Button className={`${styles.btn} w-100`} variant="outline-primary">Reject Applicants</Button>
          </div>
          </div>
        </div>
        {/* section 2 */}

        <div className={`${styles.box} mt-5`}>
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
      <td  data-label="course" className={`${styles.td}  align-middle `} >Kindergarten</td>
      <td data-label="Pending" className={`${styles.td} align-middle `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle`}  >0</td>
       <td data-label="Total"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle `} >Frist Introductory class</td>
      <td data-label="Pending" className={`${styles.td} align-middle `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle `}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle `} >Second Introductory class</td>
      <td data-label="Pending" className={`${styles.td} align-middle `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle `}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle `} >Third Introductory class</td>
      <td data-label="Pending" className={`${styles.td} align-middle `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}align-middle  `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle `}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle `} >Frist Grade</td>
      <td data-label="Pending" className={`${styles.td} align-middle `}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle `}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle `} >Second Grade</td>
      <td data-label="Pending" className={`${styles.td} align-middle`}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle `}  >0</td>
       <td data-label="Rejected"  className={`${styles.td} align-middle`}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle`}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle`}  >2</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>

    <tr className={`${styles.tr}  `} >
      <td  data-label="course" className={`${styles.td} align-middle`} >Third Grade</td>
      <td data-label="Pending" className={`${styles.td} align-middle`}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle`}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle`}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle`}  >2</td>
       <td data-label="Actions" className={`${styles.td} align-middle`}>
      <button className={`${styles.button1} m-0`} onClick={handleViewApplicantsClick}>
        <p className={`${styles.p1} m-0`}>View Applicants</p>
      </button>
    </td>
    </tr>
    <tr className={`${styles.tr}  `} >
    <td data-label="course" className={`${styles.td} align-middle`} style={{ backgroundColor: "#6B97FE" ,color:"#fff" }}>Total</td>
      <td data-label="Pending" className={`${styles.td} align-middle`}  >0</td>
       <td data-label="In Process"  className={`${styles.td} align-middle`}  >0</td>
       <td data-label="Rejected"  className={`${styles.td}align-middle `}  >0</td>
       <td data-label="Alloted"  className={`${styles.td} align-middle`}  >1</td>
       <td data-label="Total"  className={`${styles.td} align-middle`}  >2</td>
      <td data-label="Actions"  className={`${styles.td} align-middle`}  >  </td>
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