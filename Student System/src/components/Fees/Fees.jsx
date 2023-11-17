import styles from "./Fees.module.css";
import student_image from '../../assets/Studentimage2.png';

function Fees() {
  return (
    <>
       <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
       <div className=' p-sm-2 p-md-4 p-xl-4 p-lg-4 p-2 w-100'>
          {/* Section one */}
          <div className=' p-4 w-100'>
        <div className={`${styles.box} d-flex  row justify-content-around `}>
          

          <div className={`${styles.imagecontaner} justify-content-center align-items-center `}>
          <div className='d-flex   w-100   d-flex flex-lg-row  flex-xl-row  flex-md-row  flex-sm-column flex-column  '>
            <div className='d-flex align-items-center justify-content-center '> <img className={`${styles.image} shadow `} style={{ borderRadius: '8px' }} src={student_image}  alt='student image' /></div>
            <div className=' d-flex justify-content-center mt-lg-0 mt-xl-0 mt-md-0 mt-sm-4  mt-4  w-100' >
            <div className='d-flex row  ms-lg-4 ms-xl-4 ms-md-0 ms-sm-0  ms-0 w-100'> 
       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 m-0  mt-1 ">
                <p className={`${styles.p3} mb-1`}>Name </p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Mahmoud ALi Fahd</p>
                </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>User Name </p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>S153149</p>
                </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12   mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>Course</p>
                <div className="m-0">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Frist Grade</p>
                </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  mt-1 m-0">
                <p className={`${styles.p3} mb-1`}>Batch</p>
                <div className="">
                <div className={`${styles.contaner3} d-flex  justify-content-start  align-items-center  ps-3 `}>
                 <p className={`${styles.p8} mt-3`}>Frist Grade - Boys - A - 1445</p>
                </div>
                </div>
              </div>
          
              </div>
              </div>
              </div>
        
        </div>








        </div>
</div>
        <div className="mt-4">

        
<div  className={`${styles.header} `}> 
Fees
</div>
<div className={`${styles.boxboreder} mt-3  text-center`}>
<table class="table table-bordered">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Semester</th>
      <th className={`${styles.th} `} scope="col">Year</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      <th className={`${styles.th} `} scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th  className={`${styles.td} `} scope="row">1</th>
      <td className={`${styles.td} `}  >Frist Semester </td>
       <td className={`${styles.td} `}  >2023/2024</td>
       <td className={`${styles.td} `}  >20-5-2023</td>
       <td className={`${styles.td}  d-flex align-items-center justify-content-center `}  ><button className={`${styles.buttontable} d-flex align-items-center justify-content-center`}> <p className={`${styles.buttontp} d-flex align-items-center justify-content-center m-0`}>Paid</p></button></td>
       
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">2</th>
       <td className={`${styles.td} `}  >Second Semester </td>
       <td className={`${styles.td} `}  >2023/2024</td>
       <td className={`${styles.td} `}  >20-5-2023</td>
        <td className={`${styles.td} d-flex align-items-center justify-content-center  `}  ><button className={`${styles.buttontable2} d-flex align-items-center justify-content-center`}> <p className={`${styles.buttontp} d-flex align-items-center justify-content-center m-0`}>Unpaid</p></button></td>
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">3</th>
      <td className={`${styles.td} `}  >Third Semester </td>
       <td className={`${styles.td} `}  >2023/2024</td>
       <td className={`${styles.td} `}  >20-5-2023</td>
        <td className={`${styles.td} d-flex align-items-center justify-content-center  `}  ><button className={`${styles.buttontable2} d-flex align-items-center justify-content-center`}> <p className={`${styles.buttontp} d-flex align-items-center justify-content-center m-0`}>Unpaid</p></button></td>
    
      
    </tr>
    
    
  </tbody>
</table>
</div>
        </div>


        </div>
        </div>
    
    </>
  );
}

export default Fees;
