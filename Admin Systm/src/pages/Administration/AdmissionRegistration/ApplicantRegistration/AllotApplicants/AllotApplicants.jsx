
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import styles from './AllotApplicants.module.css';
import InputGroup from "react-bootstrap/InputGroup";
function AllotApplicants() {
  const [isFilterTableVisible, setFilterTableVisible] = useState(false);

  const toggleFilterTable = () => {
    setFilterTableVisible(!isFilterTableVisible);
  };
  return (
    <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}>
      <div className='p-4'>
       <div className={`${styles.title}`}>Allot Applicants</div>
       <div className={`${styles.box} mt-4 `}>
   
          <div className="row d-flex justify-content-start align-items-center w-100">
 <div className="col-md-4 col-xl-3 mt-3 ">
                <p className={`${styles.lable1} mb-3 `}>Applicant </p>
               
                  <InputGroup className="">
                    <Form.Control
                      placeholder="Type Applicant....." // Added placeholder text
                      aria-label="Type Applicant " // Updated aria-label for accessibility
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                
 </div>
 <div className="col-md-4 col-xl-3 mt-3 ">
                <p className={`${styles.lable1} mb-3 `}>From </p>
               
                  <InputGroup className="">
                    <Form.Control
                     name="date_of_birth" id="dob" type="date" class="form-control" placeholder="Date of birth"
                    />
                  </InputGroup>
                
 </div>
 <div className="col-md-4 col-xl-3 mt-3 ">
                <p className={`${styles.lable1} mb-3 `}>To </p>
               
                  <InputGroup className="">
                    <Form.Control
                     name="date_of_birth" id="dob" type="date" class="form-control" placeholder="Date of birth"
                    />
                  </InputGroup>
                
 </div>
<div className="col-md-4 col-xl-3  mt-3">
<div className={`${styles.lable1} mb-3 `}>Gender</div>
<Form.Select aria-label="Default select example">
      <option>Select Gender</option>
      <option value="1">Male </option>
      <option value="2">Female</option>
     
    </Form.Select>
</div>






            </div>
            <div className=" d-flex justify-content-center  w-100">
                <button  onClick={toggleFilterTable}  type="button"  className={`${styles.button} p-2 px-4 mt-5`}>Filter</button> 
                </div>
                {isFilterTableVisible && (
                <div className="FilterTable mt-lg-0 mt-xl-0 mt-md-3 mt-3 mt-ms-3  w-100">

<div class="d-flex justify-content-center align-content-center  w-100">
       <table class="table table-bordered mt-3  text-center " >
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Num</th>
      <th className={`${styles.th} `} scope="col">Order Number</th>
      <th className={`${styles.th} `} scope="col">Name</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      <th className={`${styles.th} `} scope="col">status</th>
      <th className={`${styles.th} `} scope="col">Accept</th>
    </tr>
  </thead>
  <tbody>
  <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0   `} >
        <p className={`${styles.p1} m-0`}>Final Acceptance</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1}  `} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button2} m-0`} >
        <p className={`${styles.p2} m-0`}>No fees were paid</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button2} m-0`} >
        <p className={`${styles.p2} m-0`}>No fees were paid</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Final Acceptance</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Final Acceptance</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Num" className={`${styles.td} `} scope="row">1</th>
      <td data-label="Order Number" className={`${styles.td} `}  >A004754</td>
       <td data-label="Name"  className={`${styles.td} `}  >Yasser Eza Bakhet Elzhrany</td>
       
       <td data-label="Data"  className={`${styles.td} `}  >30/8/2020</td>
       <td data-label="status"  className={`${styles.td} `}  >
       <button className={`${styles.button2} m-0`} >
        <p className={`${styles.p2} m-0`}>No fees were paid</p>
      </button>
        </td>
       <td data-label= "Accept" className={`${styles.td} `}  >
       <button className={`${styles.button1} m-0`} >
        <p className={`${styles.p1} m-0`}>Accept</p>
      </button>
       </td>
    </tr>


    
    
  </tbody>
      </table>
      </div>


          </div>
          )}


          </div>
          </div>
        </div>
   
  )
}

export default AllotApplicants