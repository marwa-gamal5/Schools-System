import styles from "./Fees.module.css";
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
function Fees() {
  
  const [isFilterTableVisible, setFilterTableVisible] = useState(false);

  const toggleFilterTable = () => {
    setFilterTableVisible(!isFilterTableVisible);
  };
  return (
    <>
       <div className='containt  ' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
      <div className="  row py-3   px-xl-4 px-lg-4 px-md-3 px-sm-2 px-2 w-100">
        <div className={`${styles.header}`}>E-Services</div>

{/* section one */}
        
        <div className=" p-xl-0 p-lg-0 p-md-0 p-sm-4 p-4  ms-2 row d-flex align-items-center mt-2 justify-content-xl-around justify-content-lg-around   justify-content-md-center justify-content-sm-center justify-content-center  ">

        <div className={`${styles.Square1}  mt-3 col-md-3  col-lg-2 ms-3`}>
                <div className="p-3  mt-3">
                <div className="d-flex">
                  <p className={`${styles.p1} `}>11500</p>
                <p className={`${styles.p2} `} >SAR</p>
                </div>
                <div>
                <p className={`${styles.p3} `}  >Current Balance</p>
                   </div>
                   </div>
                

            </div>
             <div className={`${styles.Square2} mt-3  col-md-3  col-lg-2 ms-3`}>
                <div className="p-1 mt-3">
                <div className="d-flex">
                  <p className={`${styles.pp1} `}  > 17000</p>
                <p className={`${styles.p2} `} >SAR</p>
                </div>
                <div>
                <p className={`${styles.p3} `}  >Total Payment Required</p>
                   </div>
                   </div>
                

            </div>
             <div className={`${styles.Square2} mt-3   col-md-3  col-lg-2 ms-3`}>
                <div className="p-1 mt-3">
                <div className="d-flex">
                  <p className={`${styles.pp1} `}  > 10500</p>
                <p className={`${styles.p2} `} >SAR</p>
                </div>
                <div>
                <p className={`${styles.p3} `}  >Payment Required</p>
                   </div>
                   </div>
                

            </div>
            <div className={`${styles.Square3} mt-3   col-md-3  col-lg-2 ms-3`}>
                <div className="p-3 mt-3">
                <div className="d-flex">
                  <p className={`${styles.ppp1} `}  > 7000</p>
                <p className={`${styles.p2} `} >SAR</p>
                </div>
                <div>
                <p className={`${styles.p3} `}  >Paid</p>
                   </div>
                   </div>
                

            </div>
            <div className={`${styles.Square4} mt-3   col-md-3  col-lg-2 ms-3`}>
                <div className="p-3 mt-3">
                <div className="d-flex">
                  <p className={`${styles.pppp1} `}  >3500</p>
                <p className={`${styles.p2} `} >SAR</p>
                </div>
                <div>
                <p className={`${styles.p3} `}  >Un Paid</p>
                   </div>
                   </div>
                

            </div>
          </div>
{/* section 2 */}          
          <div className="row d-flex align-items-center ">
          <div className="d-flex flex-column   justify-content-between mt-5 flex-sm-row">
          <div className={`${styles.header} `}>E-Services</div>
          <div><button type="button"  className={`${styles.button} p-2 px-4 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0 mt-3 `}>Pay Online</button> </div>
          
          </div>

          <div className="row  mt-5  ms-3 p-0">
          <div className={`${styles.box}  `} >
          <div className="row d-flex justify-content-between align-items-between">
<div className="col-md-4 mt-3 ">
    <div className={`${styles.title} mb-3 `}>Year</div>
<Form.Select aria-label="Default select example " >
      <option>Select Complaint Type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
</div>
<div className="col-md-4 mt-3">
<div className={`${styles.title} mb-3 `}>Semester</div>
<Form.Select aria-label="Default select example">
      <option>Select Complaint Type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
</div>
<div className="col-md-4">
<div className={`${styles.title} mb-3 mt-3 `}>Type</div>
<Form.Select aria-label="Default select example">
      <option>Select Complaint Type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
</div>
            </div>
            <div className=" d-flex justify-content-center ">
                <button  onClick={toggleFilterTable}  type="button"  className={`${styles.button} p-2 px-4 mt-5`}>Filter</button> 
                </div>
                {isFilterTableVisible && (
                <div className="FilterTable mt-lg-0 mt-xl-0 mt-md-3 mt-3 mt-ms-3 ">
       <div className={`${styles.header} `}>Receipts</div>
<table class="table table-bordered mt-3  text-center">
  <thead>
    <tr   >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Amount</th>
      <th className={`${styles.th} `} scope="col">Reference Type</th>
      <th className={`${styles.th} `} scope="col">Reference Date</th>
      <th className={`${styles.th} `} scope="col">Reference ID</th>
      <th className={`${styles.th} `} scope="col">Details</th>
      <th className={`${styles.th} `} scope="col">Receipt Reference</th>
      <th className={`${styles.th} `} scope="col">Created Date</th>
      <th className={`${styles.th} `} scope="col">Downlead</th>
    </tr>
  </thead>
  <tbody>
    <tr className={`${styles.tr}  `} >
      
      <th  data-label="Sl No." className={`${styles.td }`} scope="row">1</th>
      <td data-label="Amount" className={`${styles.td} `}  >6500</td>
       <td data-label="Reference Type" className={`${styles.td} `}  >cash</td>
       <td  data-label="Reference Date" className={`${styles.td} `}  >17/10/2023</td>
       <td data-label="Reference ID" className={`${styles.td} `}  >0000</td>
       <td data-label="Details" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Receipt Reference" className={`${styles.td} `}  >R102247488</td>
       <td  data-label="Created Date" className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Downlead" className={`${styles.td} `}  ><i class="fa-solid fa-download"></i></td>
       
    </tr>
    
    <tr className={`${styles.tr}  `}>
      <th  data-label="Sl No." className={`${styles.td} `} scope="row">1</th>
      <td data-label="Amount" className={`${styles.td} `}  >6500</td>
       <td data-label="Reference Type" className={`${styles.td} `}  >cash</td>
       <td  data-label="Reference Date" className={`${styles.td} `}  >17/10/2023</td>
       <td data-label="Reference ID" className={`${styles.td} `}  >0000</td>
       <td data-label="Details" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Receipt Reference" className={`${styles.td} `}  >R102247488</td>
       <td  data-label="Created Date" className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Downlead" className={`${styles.td} `}  ><i class="fa-solid fa-download"></i></td>
    </tr>
    <tr className={`${styles.tr}  `}  >
      <th  data-label="Sl No." className={`${styles.td} `} scope="row">1</th>
      <td data-label="Amount" className={`${styles.td} `}  >6500</td>
       <td data-label="Reference Type" className={`${styles.td} `}  >cash</td>
       <td  data-label="Reference Date" className={`${styles.td} `}  >17/10/2023</td>
       <td data-label="Reference ID" className={`${styles.td} `}  >0000</td>
       <td data-label="Details" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Receipt Reference" className={`${styles.td} `}  >R102247488</td>
       <td  data-label="Created Date" className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Downlead" className={`${styles.td} `}  ><i class="fa-solid fa-download"></i></td>
    </tr>
    
    
  </tbody>
</table>

          </div>
          )}


          </div>
          </div>
          </div>
        </div>
        </div>
    
    </>
  );
}

export default Fees;
