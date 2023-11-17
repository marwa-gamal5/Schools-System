import styles from './Sons.module.css';
import * as React from 'react';
import Shape2 from '../../assets/Shape2.png';
import Vector1 from '../../assets/Vector1.png';
import Img1 from '../../assets/Img1.png'
function Sons() {
    return (
        <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
        <div className="row p-4 w-100">
            <div className={`${styles.header}`}> 
                Sons
            </div>
            <div className={`${styles.card} d-flex justify-content-around align-items-center row mt-5  `}>
            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-9 col-9' >
            <div className="card " style={{ width: '18rem' }} >
                <div className="card-body p-0 m-0 ">
<div className=' position-relative'>
                <img className=' w-100' src={Shape2} alt="icon" />
                <div className={`${styles.image} position-absolute `} >
               <img   src={Img1} alt="icon" />
          </div>
          </div>
                <div className={`${styles.title}  ms-5 mt-5`} >Essam Mahmoud</div>
                <div className='row d-flex flex-column  justify-content-start align-items-start mt-3 ms-3'>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>ID :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Course :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Adm Date :</span> 24/9/2023</div>
        <div className={`${styles.p} `}><span className={`${styles.span} `}>Programme :</span> General</div>
       </div>
       <img className='w-100' src={Vector1} alt="icon" />
                  
                </div>
            </div>

            </div>
            <div className='col-9 col-lg-6 col-xl-3 col-md-6 col-sm-9' >
            <div className="card " style={{ width: '18rem' }} >
                <div className="card-body p-0 m-0 ">
<div className=' position-relative'>
                <img className=' w-100' src={Shape2} alt="icon" />
                <div className={`${styles.image} position-absolute `} >
               <img   src={Img1} alt="icon" />
          </div>
          </div>
                <div className={`${styles.title}  ms-5 mt-5`} >Essam Mahmoud</div>
                <div className='row d-flex flex-column  justify-content-start align-items-start mt-3 ms-3'>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>ID :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Course :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Adm Date :</span> 24/9/2023</div>
        <div className={`${styles.p} `}><span className={`${styles.span} `}>Programme :</span> General</div>
       </div>
       <img className='w-100' src={Vector1} alt="icon" />
                  
                </div>
            </div>
            </div>
            <div className='col-9 col-lg-6 col-xl-3 col-md-6 col-sm-9 ' >
            <div className="card " style={{ width: '18rem' }} >
                <div className="card-body p-0 m-0 ">
<div className=' position-relative'>
                <img className=' w-100' src={Shape2} alt="icon" />
                <div className={`${styles.image} position-absolute `} >
               <img   src={Img1} alt="icon" />
          </div>
          </div>
                <div className={`${styles.title}  ms-5 mt-5`} >Essam Mahmoud</div>
                <div className='row d-flex flex-column  justify-content-start align-items-start mt-3 ms-3'>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>ID :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Course :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Adm Date :</span> 24/9/2023</div>
        <div className={`${styles.p} `}><span className={`${styles.span} `}>Programme :</span> General</div>
       </div>
       <img className='w-100' src={Vector1} alt="icon" />
                  
                </div>
            </div>
            </div>
            <div className='col-9 col-lg-6 col-xl-3 col-md-6 col-sm-9 ' >
            <div className="card " style={{ width: '18rem' }} >
                <div className="card-body p-0 m-0 ">
<div className=' position-relative'>
                <img className=' w-100' src={Shape2} alt="icon" />
                <div className={`${styles.image} position-absolute `} >
               <img   src={Img1} alt="icon" />
          </div>
          </div>
                <div className={`${styles.title}  ms-5 mt-5`} >Essam Mahmoud</div>
                <div className='row d-flex flex-column  justify-content-start align-items-start mt-3 ms-3'>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>ID :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Course :</span> S153170</div>
        <div className={`${styles.p} `} ><span className={`${styles.span} `}>Adm Date :</span> 24/9/2023</div>
        <div className={`${styles.p} `}><span className={`${styles.span} `}>Programme :</span> General</div>
       </div>
       <img className='w-100' src={Vector1} alt="icon" />
                  
                </div>
            </div>
            </div>
          
            </div>
        </div>
        </div>
    );
}

export default Sons;
