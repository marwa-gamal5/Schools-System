import styles from './Profile.module.css';
import student_image from '../../assets/student_image.png';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Collapse from 'react-bootstrap/Collapse';
import keyboard_arrow_up from '../../assets/keyboard_arrow_up.svg';

function Messaging() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const [buttonClicked, setButtonClicked] = useState(isSmallScreen ? false : 1);
  const [buttonsVisible, setButtonsVisible] = useState(!isSmallScreen);

  useEffect(() => {
    if (isSmallScreen) {
      setButtonClicked(false);
      setButtonsVisible(true);
    }
  }, [isSmallScreen]);

  function handleButtonClick(buttonNumber) {
    setButtonClicked(buttonNumber);
    setButtonsVisible(isSmallScreen ? false : true);
  }

  return (
    <>
      <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: '15px' }}>
        <div className='py-3   px-xl-4 px-lg-4 px-md-3 px-sm-2 px-2'>
        <div className={`${styles.title}  `}> Profile Details  </div>
          {/* Section one */}
          <div className='py-3   px-xl-4 px-lg-4 px-md-3 px-sm-3 px-3'>
        <div  className={`${styles.box} d-flex  row     mt-3 justify-content-around `}>
   
          <div className={`${styles.imagecontaner} justify-content-center align-items-center `}>
          <div className='d-flex   w-100   d-flex flex-lg-row  flex-xl-row  flex-md-row  flex-sm-column flex-column  '>
            <div className='d-flex align-items-center justify-content-center '> <img className={`${styles.image} shadow `} style={{ borderRadius: '8px' }} src={student_image}  alt='student image' /></div>
            <div className=' d-flex justify-content-center mt-lg-0 mt-xl-0 mt-md-0 mt-sm-4  mt-4 ' >
            <div className='d-flex row w-100  ms-lg-4 ms-xl-4 ms-md-0 ms-sm-0  ms-0 '> 
       <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 m-0  mt-1">
                <p className={`${styles.p3} mb-1`}>Name </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Mahmoud ALi Fahd</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12  mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>File Number </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>2336</p>
                </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12   mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>Guardian ID </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>G000954</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12  mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>User Name</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>S153149</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1   m-0">
                <p className={`${styles.p3} mb-1`}>Admission Date </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Septamber , 3 , 2023</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Program </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>General</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>Course </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Frist Grade</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1   m-0">
                <p className={`${styles.p3} mb-1`}>Admission Type </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Normal</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Arabic / ASL </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Normal</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Batch </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Frist Grade - Boys - A - 1445</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1   m-0">
                <p className={`${styles.p3} mb-1`}>Year  </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>2023/2024</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1 mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Status</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Active</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Application ID </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>A005665</p>
                </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12mt-1  m-0">
                <p className={`${styles.p3} mb-1`}>Semester </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Frist </p>
                </div>
                </div>
              </div>
              </div>
              </div>
              </div>
        
        </div>


        {/* Section 2 buttons*/}
        </div>
        </div>
          {buttonsVisible && (
            <div className={`row d-flex align-items-center justify-content-center mt-4 ${isSmallScreen ? 'flex-column' : ''}`}>
              {[1, 2, 3].map((buttonNumber) => (
                <div key={buttonNumber} className={`${isSmallScreen ? 'col-12' : 'col-4'} mb-2`}>
              <button
  onClick={() => handleButtonClick(buttonNumber)}
  className={`${styles.button} w-100 px-4 ${buttonClicked === buttonNumber ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : `#section${buttonNumber}`}
  aria-expanded={buttonClicked === buttonNumber ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === buttonNumber ? styles.p2 : ''}`}>
      {buttonNumber === 1 ? 'Basic Information' : buttonNumber === 2 ? 'Guardian Information' : 'Last Attended Institution Details '}
    </p>
    {isSmallScreen ? (
      <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
    ) : (
      ''
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
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Basic Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
                <div >
   
        <div className={`${styles.title} mt-3`}> Basic Information </div>
        <div className={`${styles.box} d-flex justify-content-between  mt-3`}>
        <div className='row w-100'>
       <div className='d-flex row w-100  ms-4  mt-1'> 
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1" >
                <p className={`${styles.p3} mb-1`}>Frist Name </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Mahmoud </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Second Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>ALi </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> Third Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Fahd</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Last Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Ahmed</p>
                </div>
                </div>
              </div>
        
       

    
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Category </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Outside The Air Base - Boys</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Nationality  </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>National ID</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>1184869723</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>National ID Source</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Khamis Mushaait</p>
                </div>
                </div>
              </div>
   
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Source Data </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>10/12/1445 </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Date of Birth </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>3/12/1438</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Birth Country</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Passport ID</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>56565466</p>
                </div>
                </div>
              </div>
        
   
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Passport Expiry Date </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>3/12/2027</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Passport Country  </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Religion</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Islam</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Native Language</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Arabic</p>
                </div>
                </div>
              </div>
   
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> Gender </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>male</p>
                </div>
                </div>
              </div>
           
             
        
       </div>
       </div>
        </div>



        <div className={`${styles.title} mt-3`}> Contact Information </div>
        <div className={`${styles.box} d-flex justify-content-between  mt-3`}>
        <div className='row w-100'>
       <div className='d-flex row w-100  ms-4  mt-1'> 
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Address </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Abha </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>City </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Abha  </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> District </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Khamis Mushaait</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Country </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
        
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Phone </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>0506899120</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Mobile  </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>00966504643664</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Emergency Mobile</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>0546598933</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Email</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>ahmdabwhamd@gmail.com</p>
                </div>
                </div>
              </div>
        
       </div>
       </div>
         </div>
         </div>

         
            <button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Guardian Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Last Attended Institution Details
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
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Basic Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button> 
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2  ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Guardian Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div >
         <div className={`${styles.title} mt-3`}> Guardian Information </div>
         <div className={`${styles.box} d-flex justify-content-between  mt-3`}>
        <div className='row w-100'>
       <div className='d-flex row w-100  ms-4  mt-1'> 
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1" >
                <p className={`${styles.p3} mb-1`}>Name </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>ALi  </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Middle Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Fahd  </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> Last Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Ahmed</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>National ID </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>1021786868</p>
                </div>
                </div>
              </div>
        
       

    
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>National ID Source </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Khamis Mushaait</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Source Data</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>10/12/1445</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Passport ID</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>56565466</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Passport Expiry Date</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>3/12/2027</p>
                </div>
                </div>
              </div>
   
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Passport Country </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Date of Birth </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>3/12/1438</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Relation</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Father</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Occupation</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Chief</p>
                </div>
                </div>
              </div>
        
   
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Company</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>None</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}>Education</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>None</p>
                </div>
                </div>
              </div>
            
              </div>
           
             
     
       </div>
        </div>

        <div className={`${styles.title} mt-3`}> Contact Information </div>
        <div className={`${styles.box} d-flex justify-content-between  mt-3`}>
        <div className='row w-100'>
       <div className='d-flex row w-100  ms-4  mt-1'> 
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1" >
                <p className={`${styles.p3} mb-1`}>Office Address </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Khamis Mushaait</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>City </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Abha   </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> District</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>None</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Country</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia</p>
                </div>
                </div>
              </div>
        
       

    
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Phone </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>0506899120</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Mobile</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>00966504643664</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Email</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>ahmdabwhamd@gmail.com</p>
                </div>
                </div>
              </div>
              
   
     
          
            
              </div>
           
             
     
       </div>
        </div>
</div>


   
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Last Attended Institution Details
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
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
    Basic Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(2)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 2 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section2'}
  aria-expanded={buttonClicked === 2 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 2 ? styles.p2 : ''}`}>
    Guardian Information
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<button
  onClick={() => handleButtonClick(3)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-md-none ${buttonClicked === 3 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section3'}
  aria-expanded={buttonClicked === 3 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 3 ? styles.p2 : ''}`}>
    Last Attended Institution Details
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div >
<div className={`${styles.title} mt-3`}> Last Attended Institution Details </div>
        <div className={`${styles.box} d-flex justify-content-between  mt-3`}>
        <div className='row w-100'>
       <div className='d-flex row w-100  ms-4  mt-1'> 
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1" >
                <p className={`${styles.p3} mb-1`}>Last Attended Institution </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>AL road</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Country </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Saudi Arabia   </p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1">
                <p className={`${styles.p3} mb-1`}> Last Grade</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Second evaluation class</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Year</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>2023 </p>
                </div>
                </div>
              </div>
        
       

    
       <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Score </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>None</p>
                </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-1 ">
                <p className={`${styles.p3} mb-1`}>Year</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>None</p>
                </div>
                </div>
              </div>
              
              
   
     
          
            
              </div>
           
             
     
       </div>
        </div>
        </div>

            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Messaging;