
import styles from './Sms.module.css';


function Sms() {

    return (
        <>
          <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
        <div className="row p-4 w-100">
<div  className={`${styles.header} `}> 
Sms
</div>
<div className={`${styles.boxboreder} mt-4`}>
<table class="table table-bordered mt-3  text-center">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">ID</th>
      <th className={`${styles.th} `} scope="col">Name</th>
      <th className={`${styles.th} `} scope="col">Send To</th>
      <th className={`${styles.th} `} scope="col">Send By</th>
      <th className={`${styles.th} `} scope="col">Status</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      <th className={`${styles.th} `} scope="col">Time</th>
      <th className={`${styles.th} `} scope="col">View</th>
    </tr>
  </thead>
  <tbody>
  <tr className={`${styles.tr}  `} >
    <th  data-label="Sl No." className={`${styles.td} `}  scope="row">1</th>
     <td data-label="ID" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Name" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send To" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send By" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Status" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Data" className={`${styles.td} `}  >  20-5-2023</td>
     <td data-label="Time" className={`${styles.td} `}  >  5:56 AM</td>
     <td data-label="View" className={`${styles.td} `}  >  Show</td>
    </tr>
    <tr className={`${styles.tr}  `} >
    <th  data-label="Sl No." className={`${styles.td} `}  scope="row">2</th>
     <td data-label="ID" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Name" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send To" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send By" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Status" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Data" className={`${styles.td} `}  >  20-5-2023</td>
     <td data-label="Time" className={`${styles.td} `}  >  5:56 AM</td>
     <td data-label="View" className={`${styles.td} `}  >  Show</td>
    </tr>
    <tr className={`${styles.tr}  `} >
    <th  data-label="Sl No." className={`${styles.td} `}  scope="row">3</th>
     <td data-label="ID" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Name" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send To" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Send By" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Status" className={`${styles.td} `}  >  Primary Text</td>
     <td data-label="Data" className={`${styles.td} `}  >  20-5-2023</td>
     <td data-label="Time" className={`${styles.td} `}  >  5:56 AM</td>
     <td data-label="View" className={`${styles.td} `}  >  Show</td>
    </tr>
    
    
  </tbody>
</table>
</div>
        </div>
        </div>
         </>
    );
}

export default Sms;