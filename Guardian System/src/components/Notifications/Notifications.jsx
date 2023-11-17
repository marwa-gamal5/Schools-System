
import styles from './Notifications.module.css';


function Notifications() {

    return (
        <>
           <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
        <div className="row p-4 w-100">
<div  className={`${styles.header} `}> 
Notifications
</div>
<div className={`${styles.boxboreder} mt-4`}>
<table class="table table-bordered mt-3  text-center">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Title</th>
      <th className={`${styles.th} `} scope="col">Content</th>
      <th className={`${styles.th} `} scope="col">Posted</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      <th className={`${styles.th} `} scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
  <tr className={`${styles.tr}  `} >
      <th  data-label="Sl No." className={`${styles.td} `} scope="row">1</th>
      <td data-label="Title" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Content"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Posted"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Data"  className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Time"  className={`${styles.td} `}  >5:56 AM</td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Sl No." className={`${styles.td} `} scope="row">2</th>
      <td data-label="Title" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Content"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Posted"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Data"  className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Time"  className={`${styles.td} `}  >5:56 AM</td>
    </tr>
    <tr className={`${styles.tr}  `} >
      <th  data-label="Sl No." className={`${styles.td} `} scope="row">3</th>
      <td data-label="Title" className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Content"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Posted"  className={`${styles.td} `}  >Primary Text</td>
       <td data-label="Data"  className={`${styles.td} `}  >20-5-2023</td>
       <td data-label="Time"  className={`${styles.td} `}  >5:56 AM</td>
    </tr>
    
    
  </tbody>
</table>
</div>
        </div>
        </div>
         </>
    );
}

export default Notifications;