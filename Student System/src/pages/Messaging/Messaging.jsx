import styles from './Messaging.module.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Collapse from 'react-bootstrap/Collapse';
import keyboard_arrow_up from '../../assets/keyboard_arrow_up.svg';

function Messaging() {
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });

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
          <div className={`${styles.header} `}>Messaging</div>

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
      {buttonNumber === 1 ? 'Inbox' : buttonNumber === 2 ? 'Send' : 'Create New'}
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

       <div  id="section1" className={` mt-4 `}>
       <button
  onClick={() => handleButtonClick(1)}
  className={`${styles.button} w-100 px-4 mt-3 d-block d-sm-none ${buttonClicked === 1 ? styles.buttonstyle2 : ''}`}
  data-bs-toggle={isSmallScreen ? '' : 'collapse'}
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
      Inbox
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div className={`${styles.boxboreder} mt-4`}>
<table class="table table-bordered mt-3 md-sm-3 w-100">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">From</th>
      <th className={`${styles.th} `} scope="col">Subject</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  className={`${styles.td} `} scope="row">1</th>
      <td className={`${styles.td} `}  >Primary Text </td>
      <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >2023/2024</td>
      
      
       
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">2</th>
       <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >2023/2024</td>
      
       
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">3</th>
      <td className={`${styles.td} `}  >Primary Text</td>
      <td className={`${styles.td} `}  >Primary Text </td>  
       <td className={`${styles.td} `}  >2023/2024</td>
      
       
    
      
    </tr>
    
    
  </tbody>
</table>
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
      Send
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
      Create New
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
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
      Inbox
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
    <p className={`${styles.p1} mt-2  ${buttonClicked === 2 ? styles.p2 : ''}`}>
      Send
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div className={`${styles.boxboreder} mt-4`}>
<table class="table table-bordered mt-xs-4 mt-4">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">To</th>
      <th className={`${styles.th} `} scope="col">Subject</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  className={`${styles.td} `} scope="row">1</th>
      <td className={`${styles.td} `}  >Primary Text </td>
      <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >2023/2024</td>
      
      
       
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">2</th>
       <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >Primary Text </td>
       <td className={`${styles.td} `}  >2023/2024</td>
      
       
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">3</th>
      <td className={`${styles.td} `}  >Primary Text</td>
      <td className={`${styles.td} `}  >Primary Text </td>  
       <td className={`${styles.td} `}  >2023/2024</td>
      
       
    
      
    </tr>
    
    
  </tbody>
</table>

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
      Create New
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
  data-bs-target={isSmallScreen ? '' : '#section1'}
  aria-expanded={buttonClicked === 1 ? 'true' : 'false'}
>
  <div className='d-flex align-items-center justify-content-between'>
    <p className={`${styles.p1} mt-2 ${buttonClicked === 1 ? styles.p2 : ''}`}>
      Inbox
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
      Send
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
      Create New
    </p>
    <img className={`${styles.iconStyle}  `} src={keyboard_arrow_up} alt='keyboard_arrow_up image' />
  </div>
</button>
<div className='mx-3'>
<div className={`${styles.title}  mt-sm-3 mt-3 `}> New Massage</div>
<div className={`${styles.box} d-flex  row    mt-3  `}>
<form>
  <div class="form-group ">
    <div className=''>
    <label for="Subject" className={`${styles.p3}`}>Subject</label>
    <input type="text" class="form-control mt-2" id="Subject" aria-describedby="emailHelp" placeholder="Type Subject ......"/>
    </div>
  </div>
  <div class="form-group mt-3">
    <label for="exampleFormControlTextarea1 "  className={`${styles.p3}`} >Massege</label>
    <textarea class="form-control mt-2" id="exampleFormControlTextarea1" placeholder="Type Massege ......"  rows="3"></textarea>
  </div>
  <div class="form-check mt-3">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Send To Email</label>
  </div>
  <div className='d-flex align-items-center justify-content-center'>
  <button  class="btn btn-primary mt-3 ">Send Massage</button>
  </div>
</form>
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