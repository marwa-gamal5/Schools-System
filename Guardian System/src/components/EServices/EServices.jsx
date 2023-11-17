import styles from "./EServices.module.css";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import keyboard_arrow_up from '../../assets/keyboard_arrow_up.svg';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Collapse, Button, Card } from "react-bootstrap";
function EServices() {
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });

  const [buttonClicked, setButtonClicked] = useState(isSmallScreen ? false : 1);
  const [buttonsVisible, setButtonsVisible] = useState(!isSmallScreen);
  useEffect(() => {
    if (isSmallScreen) {
      setButtonClicked(false);
      setButtonsVisible(true);
    }
  }, [isSmallScreen]);
  const [showComplaintDetails, setShowComplaintDetails] = useState(false);

  function handleButtonClick(buttonNumber) {
    // Check if the buttonNumber is related to the eye icon in the table
    if (buttonNumber === 'eyeIcon') {
      // Set state to show Complaint details and hide other sections
      setShowComplaintDetails(true);
      setButtonClicked(null); // Set to null or another value that doesn't correspond to any section
      setButtonsVisible(true); // Show the buttons section
    } else {
      // Handle other button clicks as usual
      setButtonClicked(buttonNumber);
      setButtonsVisible(isSmallScreen ? false : true);
      setShowComplaintDetails(false);
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: '15px' }}>
        <div className='py-3   px-xl-4 px-lg-4 px-md-3 px-sm-2 px-2'>
          <div className={`${styles.header} `}>Messaging</div>

          {/* buttons section */}
          {buttonsVisible && (
            <div className={`row d-flex align-items-center justify-content-center mt-4 ${isSmallScreen ? 'flex-column' : ''}`}>
              {[1, 2, 3, 4].map((buttonNumber) => (
                <div key={buttonNumber} className={`${isSmallScreen ? 'col-12' : 'col-3'} mb-2`}>
                  <button
                    onClick={() => handleButtonClick(buttonNumber)}
                    className={`${styles.button} w-100 px-4 ${buttonClicked === buttonNumber ? styles.buttonstyle2 : ''}`}
                    data-bs-toggle={isSmallScreen ? '' : 'collapse'}
                    data-bs-target={isSmallScreen ? '' : `#section${buttonNumber}`}
                    aria-expanded={buttonClicked === buttonNumber ? 'true' : 'false'}
                  >
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className={`${styles.p1} mt-2  ${buttonClicked === buttonNumber ? styles.p2 : ''}`}>
                        {buttonNumber === 1 ? 'Withdrawal Request' : buttonNumber === 2 ? 'Add Sibling' : buttonNumber === 3 ? 'Surveys' : 'Complaints'}
                      </p>
                      {isSmallScreen ? (
                        <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
                      ) : (
                        <i
                          className={`${styles.iconStyle} fa-solid fa-circle-user  ms-2 ${
                            buttonClicked === buttonNumber ? styles.iconStyle2 : ''
                          }`}
                        ></i>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Section 1 */}
          <Collapse in={buttonClicked === 1}>
            <div id="section1" className={`mt-4`}>
                {/* Section 1 */}
<button
  onClick={() => handleButtonClick(1)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Withdrawal Request
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
 <div  className="px-3 px-md-0">
   
        <div className="row  mt-5">
          <div className={`${styles.box}  `}>
            <div className="row d-flex justify-content-between align-items-between">
              <div className="col-12 col-md-6 mt-3 mt-md-0 ">
                <div id="accordion"  >
                  <Card className={`${styles.cardstyle}  `}  >
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
              <div className="col-12 col-md-6 mt-3 mt-md-0 ">
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
              <div className="col-12 col-xl-3 col-sm-6 mt-3 mt-xl-0">
                <div className={`${styles.Square3} row py-3`}>
                  <div > 
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
              <div className="col-12 col-xl-3 col-sm-6 mt-3 mt-xl-0">
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
              <div className="col-12 col-xl-3 col-sm-6 mt-3 mt-xl-0">
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
              <div className="col-12 col-xl-3 col-sm-6 mt-3 mt-xl-0">
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
              <div className="col-12 col-xl-6 mt-3 mt-xl-0 ">
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
              <div className="col-12 col-xl-6 mt-3 mt-xl-0 ">
                <p className={`${styles.p3}`}>Verification Request</p>

                <div className={`${styles.Square4} p-2`}>
                  <div className="d-flex justify-containt-between align-items-between w-100">
                  <div className={`${styles.p5}   col-sm-9 `}>
                    MOE Verification Request
                  </div>
                  <div className="d-flex d-sm-flex-column d-xs-flex-column">
                  <div className="custom-control custom-radio custom-control-inline ms-3 ">
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
                  <div className="custom-control custom-radio custom-control-inline ms-3">
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
          </div>
        </div>
        
        <div className="row mt-5">
          <div className={`${styles.box}  `}>
            <div className="row d-flex  px-2  align-items-center ">
              <div className="col-12 col-md-6 col-xl-4  mt-3 mt-md-0  ">
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
              <div className="col-12 col-md-6 col-xl-4  mt-3 mt-md-0">
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
              <div className="col-12 col-md-6 col-xl-4  mt-3 mt-md-0">
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
          
              <div className="col-12 col-md-6 col-xl-4  mt-3 mt-md-0">
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
              <div className="col-12 col-md-6 col-xl-4  mt-3 mt-md-0">
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
            <p className={`${styles.p11}`}>
              
              The period for receiving the file is not less than one week (if
              documentation is needed), or two weeks (if Ministry of Education
              confirmation is needed) from the date of requesting the file and
              after printing the final certificates.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center  align-items-center  mb-5">
        <button type="button"  className={`${styles.button3} p-2 px-4`}>Create Request </button> 
        </div>
 </div>
      
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Add Sibling
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Surveys
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(4)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 4 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 4 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Complaints
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
            </div>
          </Collapse>

          {/* Section 2 */}
          <Collapse in={buttonClicked === 2}>
            <div id="section2" className={`mt-4`}>
 <button
  onClick={() => handleButtonClick(1)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Withdrawal Request
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Add Sibling
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div >
          <p>Add Sibling </p>
 </div>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Surveys
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(4)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 4 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 4 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Complaints
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
            </div>
          </Collapse>

          {/* Section 3 */}
          <Collapse in={buttonClicked === 3}>
           
            <div className='mt-3' id="section3" >

<button
  onClick={() => handleButtonClick(1)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Withdrawal Request
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Add Sibling
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Surveys
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div >
          <p>Surveys  </p>
</div>
<button
  onClick={() => handleButtonClick(4)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 4 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 4 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Complaints
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
            </div>
          </Collapse>

          {/* Section 4 */}
    <Collapse in={buttonClicked === 4}>
 <div id="section4" className={`mt-4`}>

 <button
  onClick={() => handleButtonClick(1)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Withdrawal Request
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Add Sibling
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Surveys
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(4)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 4 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 4 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Complaints
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div className="p-3 p-md-0">

<div className="row  my-5">
    <div className={`${styles.box}  `}>
    <table className="table table-bordered mt-3  text-center ">
<thead>
<tr >
<th className={`${styles.th} `} scope="col">Sl No.</th>
<th className={`${styles.th} `} scope="col">Subject</th>
<th className={`${styles.th} `} scope="col">Complaint</th>
<th className={`${styles.th} `} scope="col">Guardian Name</th>
<th className={`${styles.th} `} scope="col">Submission Date</th> 
<th className={`${styles.th} `} scope="col">View</th>
</tr>
</thead>
<tbody>
<tr className={`${styles.tr}  `}>
<th data-label="Sl No."  className={`${styles.td }`} scope="row">1</th>
<td data-label="Subject"  className={`${styles.td }`}>Primary Text</td>
<td data-label="Complaint"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Guardian Name"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Submission Date"  className={`${styles.td }`} >LPrimary Text</td>
<td data-label="View"  className={`${styles.td } `} >
  <button style={{ border: "none" }} onClick={() => handleButtonClick('eyeIcon')}>
    <i className="fa-solid fa-eye"></i>
  </button>
</td>
</tr>
<tr className={`${styles.tr}  `}>
<th data-label="Sl No."  className={`${styles.td }`} scope="row">1</th>
<td data-label="Subject"  className={`${styles.td }`}>Primary Text</td>
<td data-label="Complaint"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Guardian Name"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Submission Date"  className={`${styles.td }`} >LPrimary Text</td>
<td data-label="View"  className={`${styles.td } `} >
  <button style={{ border: "none" }} onClick={() => handleButtonClick('eyeIcon')}>
    <i className="fa-solid fa-eye"></i>
  </button>
</td>
</tr>
<tr className={`${styles.tr}  `}>
<th data-label="Sl No."  className={`${styles.td }`} scope="row">1</th>
<td data-label="Subject"  className={`${styles.td }`}>Primary Text</td>
<td data-label="Complaint"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Guardian Name"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Submission Date"  className={`${styles.td }`} >LPrimary Text</td>
<td data-label="View"  className={`${styles.td }`} >
  <button style={{ border: "none" }} onClick={() => handleButtonClick('eyeIcon')}>
    <i className="fa-solid fa-eye"></i>
  </button>
</td>
</tr>
<tr className={`${styles.tr}  `}>
<th data-label="Sl No."  className={`${styles.td }`} scope="row">1</th>
<td data-label="Subject"  className={`${styles.td }`}>Primary Text</td>
<td data-label="Complaint"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Guardian Name"  className={`${styles.td }`} >Primary Text</td>
<td data-label="Submission Date"  className={`${styles.td }`} >LPrimary Text</td>
<td data-label="View"  className={`${styles.td } `} >
  <button style={{ border: "none" }} onClick={() => handleButtonClick('eyeIcon')}>
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
          <div className="col-12 col-md-6   mt-3 mt-md-0  ">
          <p className={`${styles.p3}`}>Name </p>
          <div className="">
          <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
           <p className={`${styles.p8} mt-3`}>Mahmoud ALi Fahd</p>
          </div>
          </div>
        </div>
        <div className="col-12 col-md-6   mt-3 mt-md-0 ">
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
          <div className="col-12 col-md-6   mt-3 mt-md-0 ">
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
  <button type="button"  className={`${styles.button3} p-2 px-4`}>Create Complaint </button> 
  </div>
          </div>
      </div>
      </div>
      


</div>
       
       
      </div>
    </Collapse>




{/* Complaint details */}

{showComplaintDetails && (
<div id="Complaintdetails ">
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
      
      )}
    
        </div>
      </div>
    </>
  );
}

export default EServices;