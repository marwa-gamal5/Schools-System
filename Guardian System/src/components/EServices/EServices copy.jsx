import styles from "./EServices.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import keyboard_arrow_up from "../../assets/keyboard_arrow_up.svg";
import { Collapse, Button, Card } from "react-bootstrap";
function EServices() {

  const [showComplaintDetails, setShowComplaintDetails] = useState(false); // Define showComplaintDetails in the component state

  const [open, setOpen] = useState(false);
  const [isSquare1Active, setIsSquare1Active] = useState(true);
  // const [isSquare1Active, setIsSquare1Active] = useState(false);
  const [isSquare2Active, setIsSquare2Active] = useState(false);
  const [isSquare3Active, setIsSquare3Active] = useState(false);
  const [isSquare4Active, setIsSquare4Active] = useState(false);

  const handleClick1 = () => {
    setIsSquare1Active(!isSquare1Active);
    setIsSquare2Active(false);
    setIsSquare3Active(false);
    setIsSquare4Active(false);
    //  handleButtonClick("Withdrawal Request");
  };

  const handleClick2 = () => {
    setIsSquare2Active(!isSquare2Active);
    setIsSquare1Active(false);
    setIsSquare3Active(false);
    setIsSquare4Active(false);
  };

  const handleClick3 = () => {
    setIsSquare3Active(!isSquare3Active);
    setIsSquare1Active(false);
    setIsSquare2Active(false);
    setIsSquare4Active(false);
  };

  const handleClick4 = () => {
    setIsSquare4Active(!isSquare4Active);
    setIsSquare1Active(false);
    setIsSquare2Active(false);
    setIsSquare3Active(false);
  };
  const [activeSection, setActiveSection] = useState("Withdrawal Request");
  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
    setShowComplaintDetails(false); // Resetting showComplaintDetails on each button click

  };
  return (
    <>
       <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
      <div className=" row p-4 w-100">
        <div className={`${styles.header}`}>E-Services</div>

        <div className="row d-flex justify-content-around  mt-3 px-4">
          {/* Withdrawal Request button  */}
          <div className="col-8 col-sm-8  col-md-6 col-xl-3 col-lg-3  mt-3">
            <button
              className={`  ${ 
                isSquare1Active ? `${styles.Square1} ` : `${styles.Square2} `
              }`}
              onClick={() => {
                handleClick1();
                handleButtonClick("Withdrawal Request");
              }}
             
            >
              <div className="d-flex justify-content-center pt-3">
                <p className={`${isSquare1Active ? styles.p1 : styles.p2}`}>
                  Withdrawal Request
                </p>
                <p className={`${styles.p} ms-3`}>
                  <i
                    className="fa-solid fa-circle-user"
                    style={{
                      color: isSquare1Active ? "#0951FE" : "#858585",
                      fontSize: "60px",
                    }}
                  ></i>
                </p>
              </div>
            </button>
          </div>
          {/* Add Sibling button */}
          <div className="col-8 col-sm-8  col-md-6 col-xl-3 col-lg-3 mt-3 ">
            <button
              className={isSquare2Active ? styles.Square1 : styles.Square2}
              onClick={() => {
                handleClick2();
                handleButtonClick("Add Sibling");
              }}
              // onClick={handleClick2}
            >
              <div className="d-flex justify-content-between  align-items-center  pt-3">
                <p className={`${isSquare2Active ? styles.p1 : styles.p2}`}>
                  Add Sibling
                </p>

                <p className={`${styles.p} ms-3 `}>
                  {" "}
                  <i
                    className="fa-solid fa-circle-user"
                    style={{
                      color: isSquare2Active ? "#0951FE" : "#858585",
                      fontSize: "60px",
                    }}
                  ></i>{" "}
                </p>
              </div>
            </button>
          </div>
            {/* Surveys button  */}
          <div className="col-8 col-sm-8  col-md-6 col-xl-3 col-lg-3 mt-3">
            <button
              className={isSquare3Active ? styles.Square1 : styles.Square2}
              // onClick={handleClick3}
              onClick={() => {
                handleClick3();
                handleButtonClick("Surveys");
              }}
            >
              <div className="d-flex justify-content-between  align-items-center  pt-3">
                <p className={`${isSquare3Active ? styles.p1 : styles.p2}`}>
                  Surveys
                </p>

                <p className={`${styles.p} ms-3 `}>
                  {" "}
                  <i
                    className="fa-solid fa-circle-user"
                    style={{
                      color: isSquare3Active ? "#0951FE" : "#858585",
                      fontSize: "60px",
                    }}
                  ></i>{" "}
                </p>
              </div>
            </button>
          </div>
              {/* Complaints button */}
          <div className="col-8 col-sm-8  col-md-6 col-xl-3 col-lg-3 mt-3 ">
            <button
              className={isSquare4Active ? styles.Square1 : styles.Square2}
              // onClick={handleClick4}
              onClick={() => {
                handleClick4();
                handleButtonClick("Complaints");
              }}
            >
              <div className="d-flex justify-content-between  align-items-center  pt-3">
                <p className={`${isSquare4Active ? styles.p1 : styles.p2}`}>
                  Complaints
                </p>

                <p className={`${styles.p} ms-3 `}>
                  {" "}
                  <i
                    className="fa-solid fa-circle-user"
                    style={{
                      color: isSquare4Active ? "#0951FE" : "#858585",
                      fontSize: "60px",
                    }}
                  ></i>{" "}
                </p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Withdrawal Request section  */}
        <div className={activeSection === "Withdrawal Request" && !showComplaintDetails ? "d-block" : "d-none"}>
   
        <div className="row  mt-5">
          <div className={`${styles.box}  `}>
            <div className="row d-flex justify-content-between align-items-between">
              <div className="col-6 ">
                <div id="accordion"  >
                  <Card >
                    <Card.Header>
                      <h6 className="mb-0">
                        <div className="d-flex justify-content-between  align-items-between ">
                          <Button
                            variant="text"
                            className="buttoncollapse"
                            onClick={() => setOpen(!open)}
                            aria-controls="collapseOne"
                            aria-expanded={open}
                            style={{ border: "none" }}
                          >
                            Withdrawn Instructions
                          </Button>
                          <img
                            onClick={() => setOpen(!open)}
                            src={keyboard_arrow_up}
                            alt="icon"
                          />
                        </div>
                      </h6>
                    </Card.Header>
                    <Collapse in={open}>
                      <div id="collapseOne">
                        <Card.Body>
                          1. Student Passport: Latest
                          <br></br>
                          2. Student National ID/Iqama: Latest cop
                          <br></br>
                          3. Final exit / exit re-entry (9 months) : In case of
                          Transfer to other country, requested by Ministry of
                          Education to Stamp.
                          <br></br>
                          4. Employer Letter: In case of Transfer to other city,
                          requested by Ministry of Education to Stamp.
                          <br></br>
                          5. Admission Letter: In case of Transfer to other
                          school ( No MOE verification Needs here).
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                </div>
              </div>
              <div className="col-6">
                <Form.Select aria-label="Default select example">
                  <option>Choose Withdrawn Reasons</option>
                  <option value="1">Fees Problems</option>
                  <option value="2">Academic Problems</option>
                  <option value="3">Transfer to other city</option>
                  <option value="4">
                    Transfer to a special care school (transfer to a special
                    care school)
                  </option>
                </Form.Select>
              </div>
            </div>
            <div className="row mt-3">
              <p className={`${styles.p3}`}>Choose Student </p>
              <div className="col-3">
                <div className={`${styles.Square3} row py-3`}>
                  <div>
                    <div className="custom-control custom-radio custom-control-inline ">
                      <label
                        className="form-check-label me-5"
                        for="inlineRadio1"
                      >
                        Ahmed Ali Fahd
                      </label>
                      <input
                        className={`${styles.dd} form-check-input `}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                    </div>
                    <div className={`${styles.p6}`}>Active</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className={`${styles.Square3} row py-3`}>
                  <div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <label
                        className="form-check-label me-5"
                        for="inlineRadio2"
                      >
                        Mohamed Ali Fahd
                      </label>
                      <input
                        className={`${styles.dd} form-check-input `}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                    </div>
                    <div className={`${styles.p6}`}>Active</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className={`${styles.Square3} row py-3`}>
                  <div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <label
                        className="form-check-label me-5"
                        for="inlineRadio3"
                      >
                        Mariam Ali Fahd
                      </label>
                      <input
                        className={`${styles.dd} form-check-input `}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                    </div>
                    <div className={`${styles.p6}`}>Active</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className={`${styles.Square3} row py-3`}>
                  <div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <label
                        className="form-check-label me-5"
                        for="inlineRadio4"
                      >
                        Hager Ali Fahd
                      </label>
                      <input
                        className={`${styles.dd} form-check-input `}
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        value="option4"
                      />
                    </div>
                    <div className={`${styles.p6}`}>Active</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 ">
                <p className={`${styles.p3}`}>School Name </p>
                <div className="pe-2">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="School name....." // Added placeholder text
                      aria-label="School name" // Updated aria-label for accessibility
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="col-6 ">
                <p className={`${styles.p3}`}>Verification Request</p>

                <div className={`${styles.Square4} p-2`}>
                  <div className={`${styles.p5} col-9`}>
                    MOE Verification Request
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <label
                      className="custom-control-label me-2  "
                      for="customRadioInline1"
                    >
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="customRadioInline1 "
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <label
                      className="custom-control-label me-2"
                      for="customRadioInline2"
                    >
                      NO
                    </label>
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline1"
                      class="custom-control-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className={`${styles.box}  `}>
            <div className="row d-flex  justify-content-around  align-items-center ">
              <div className="col-4">
                <p className={`${styles.p3}`}>Student Passport </p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <p className={`${styles.p3}`}>Student National Id</p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <p className={`${styles.p3}`}>Final Exit/Exit Re entry</p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex   align-items-center  mt-3">
              <div className="col-4">
                <p className={`${styles.p3}`}>Employer Letter</p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <p className={`${styles.p3}`}>Admission Letter</p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className={`${styles.box}  `}>
            <p className={`${styles.p7}  `}>Important Notes:</p>
            <p>
              {" "}
              The period for receiving the file is not less than one week (if
              documentation is needed), or two weeks (if Ministry of Education
              confirmation is needed) from the date of requesting the file and
              after printing the final certificates.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center  align-items-center  mb-5">
        <button type="button"  className={`${styles.button} p-2 px-4`}>Create Request </button> 
        </div>
        </div>
        {/* Add Sibling section */}
        <div className={activeSection === "Add Sibling" && !showComplaintDetails ? "d-block" : "d-none"}>
          <p>Add Sibling </p>
        </div>
        {/* Surveys section  */}
        <div className={activeSection === "Surveys" && !showComplaintDetails ? "d-block" : "d-none"}>
          <p>Surveys  </p>
        </div>
        {/* Complaints section */}
        
        <div className={activeSection === "Complaints" && !showComplaintDetails ? "d-block" : "d-none"}>

      <div className="row  my-5">
          <div className={`${styles.box}  `}>
          <table className="table table-bordered ">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Subject</th>
      <th className={`${styles.th} `} scope="col">Complaint</th>
      <th className={`${styles.th} `} scope="col">Guardian Name</th>
      <th className={`${styles.th} `} scope="col">Submission Date</th>
      <th className={`${styles.th}  d-flex justify-content-center  align-items-center  `} scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>LPrimary Text</td>
      <td className="d-flex justify-content-center align-items-center">
  <button style={{ border: "none" }} onClick={() => setShowComplaintDetails(true)}>
    <i className="fa-solid fa-eye"></i>
  </button>
  </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>LPrimary Text</td>
      <td className="d-flex justify-content-center align-items-center">
  <button style={{ border: "none" }} onClick={() => setShowComplaintDetails(true)}>
    <i className="fa-solid fa-eye"></i>
  </button>
  </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >LPrimary Text</td>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>LPrimary Text</td>
      <td className="d-flex justify-content-center align-items-center">
  <button style={{ border: "none" }} onClick={() => setShowComplaintDetails(true)}>
    <i className="fa-solid fa-eye"></i>
  </button>
</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >LPrimary Text</td>
      <td>Primary Text</td>
      <td>Primary Text</td>
      <td>LPrimary Text</td>
      <td className="d-flex justify-content-center align-items-center">
  <button style={{ border: "none" }} onClick={() => setShowComplaintDetails(true)}>
    <i className="fa-solid fa-eye"></i>
  </button>
  </td>
    </tr>
    
    
    
  </tbody>
</table>
            </div>
            </div>
            <div className={`${styles.header2} mb-4`}>New Complaint</div>
            <div className="row  my-5">
          <div className={`${styles.box}  `}>
                <div className="row">
                <div className="col-6 ">
                <p className={`${styles.p3}`}>Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Mahmoud ALi Fahd</p>
                </div>
                </div>
              </div>
              <div className="col-6 ">
                <p className={`${styles.p3}`}>Subject</p>
                <div className="pe-2">
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Type Subject ......" // Added placeholder text
                      aria-label="SType Subject ......" // Updated aria-label for accessibility
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
              </div>

                </div>
                <div className="row" >
                <div className="col-6">
                <p className={`${styles.p3}`}>Attachment </p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>
                </div>
                <div className="row">
                  <div className="">
                <label for="exampleFormControlTextarea1" className={`${styles.p3} mb-3`}>Complaint</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Type Complaint ......"></textarea>
                 </div>
                </div>
                <div>
                <div className="d-flex justify-content-center  align-items-center  mt-4">
        <button type="button"  className={`${styles.button} p-2 px-4`}>Create Complaint </button> 
        </div>
                </div>
            </div>
            </div>
            


      </div>


{/* Complaint details */}

 
<div className={showComplaintDetails ? "d-block px-4" : "d-none"}>
        <div className={`${styles.boxborder} mt-5  `}>
        <div className="row d-flex justify-content-between align-items-center">
        <div className='col-4 '>
          <p className={`${styles.p9}`}>Complaint No</p>
          
          <div className={`${styles.filedstyle}`}> 
          <p className={`${styles.p8} mt-3`}>CMP000006</p>
           
          </div>

        </div>
        <div className='col-4 '>
          <p className={`${styles.p9}`}>Complaint By</p>
          
          <div className={`${styles.filedstyle}`}> 
          <p className={`${styles.p8} mt-3`}>Mahmoud ALi Fahd</p>
           
          </div>

        </div>
        <div className='col-4  '>
          <p className={`${styles.p9}`}>Sibling</p>
          
          <div className={`${styles.filedstyle}`}> 
          <p className={`${styles.p8} mt-3`}>Mariam Mahmoud ALi </p>
           
          </div>

        </div>
</div>

<div className="row d-flex justify-content-between align-items-center mt-3">
        <div className='col-6 '>
          <p className={`${styles.p9}`}>Complaint Type</p>
          
          <div className={`${styles.filedstyle}`}> 
          <p className={`${styles.p8} mt-3`}>Educational</p>
           
          </div>

        </div>
        <div className='col-6 '>
          <p className={`${styles.p9}`}>Subject</p>
          
          <div className={`${styles.filedstyle}`}> 
          <p className={`${styles.p8} mt-3`}> dnscsic dhvcisj jzsnci </p>
           
          </div>

        </div>
        
</div>

<div className="row d-flex justify-content-between align-items-center mt-3">
        <div className='col-12 '>
          <p className={`${styles.p9}`}>Comments</p>
          
          <div className={`${styles.filedstyle2}`}> 
          <div className="d-flex justify-content-between align-items-center">
          
          <p className={`${styles.p8}`}>Mahmoud ALi Fahd</p>
          <div>
            <div className="d-flex">
            <p className={`${styles.p10}`}> 21/10/2023</p>
            <div className={`${styles.line} mx-2 mt-1`}></div>
            <p className={`${styles.p10}`}>21/10/2023</p>
            </div>
            </div>
          
          
          </div>
          <p className={`${styles.p9}`}>dvfsiodj figij jifhoajf asofa asufhcsoacn jsncaiosfjc paso</p>
         
           
          </div>

        </div>
        <div className='col-12  mt-3'>
          
        <div className={`${styles.filedstyle2}`}> 
          <div className="d-flex justify-content-between align-items-center">
          
          <p className={`${styles.p8}`}>Mahmoud ALi Fahd</p>
          <div>
            <div className="d-flex">
            <p className={`${styles.p10}`}> 21/10/2023</p>
            <div className={`${styles.line} mx-2 mt-1`}></div>
            <p className={`${styles.p10}`}>21/10/2023</p>
            </div>
            </div>
          
          
          </div>
          <p className={`${styles.p9}`}>dvfsiodj figij jifhoajf asofa asufhcsoacn jsncaiosfjc paso</p>
         
           
          </div>

        </div>
        
</div>
<div>
<div className="mt-3">
                <label for="exampleFormControlTextarea1" className={`${styles.p3} mb-3`}>New Comment</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Type Complaint ......"></textarea>
                 </div>
</div>
<div>
<div className=" mt-3">
                <p className={`${styles.p3}`}>Attachment </p>

                <div>
                  <div class="input-group mb-3">
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile02"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center  align-items-center  mt-4 mb-3">
        <button type="button"  className={`${styles.button3} p-2 px-4`}> Submit  </button> 
        </div>
</div>


       </div>
       </div> 
      
        
      </div>
      </div>
    </>
  );
}

export default EServices;
