
import styles from './News_Events.module.css';


function News_Events() {

    return (
        <>
        <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}> 
        <div className="row p-4 w-100"   >
<div  className={`${styles.header} `}> 
News & Events
</div>
<div className={`${styles.boxboreder} mt-4`}>
<table class="table table-bordered mt-3  text-center">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Title</th>
      <th className={`${styles.th} `} scope="col">Author</th>
      <th className={`${styles.th} `} scope="col">Comments</th>
      <th className={`${styles.th} `} scope="col">Posted</th>
     
    </tr>
  </thead>
  <tbody>
  <tr className={`${styles.tr}  `} >
    <th data-label="Sl No."  className={`${styles.td} `}  scope="row">1</th>
      <td data-label="Title" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Author" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Comments" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Posted" className={`${styles.td} `} >Primary Text</td>
   
  
    </tr>
    <tr className={`${styles.tr}  `} >
    <th data-label="Sl No."  className={`${styles.td} `}  scope="row">2</th>
      <td data-label="Title" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Author" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Comments" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Posted" className={`${styles.td} `} >Primary Text</td>
   
  
    </tr>
    <tr className={`${styles.tr}  `} >
    <th data-label="Sl No."  className={`${styles.td} `}  scope="row">3</th>
      <td data-label="Title" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Author" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Comments" className={`${styles.td} `} >Primary Text</td>
      <td data-label="Posted" className={`${styles.td} `} >Primary Text</td>
   
  
    </tr>
    
    
  </tbody>
</table>
</div>
        </div>
        </div>
         </>
    );
}

export default News_Events;