import styles from './Memos.module.css';

function Profile() {
    return (
      <>
       <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}>
       <div className="row  py-4 px-sm-3 px-3  px-md-5 px-lg-5 px-xl-5   w-100">
<div  className={`${styles.header} `}> 
Memos
</div>
<div className={`${styles.boxboreder} mt-xl-4 mt-lg-4 mt-md-4 mt-3 mt-sm-3`}>
<table class="table table-bordered ms-xl-0 ms-lg-0 ms-md-0 ms-3 ms-sm-3">
  <thead>
    <tr >
      <th className={`${styles.th} `} scope="col">Sl No.</th>
      <th className={`${styles.th} `} scope="col">Subject</th>
      <th className={`${styles.th} `} scope="col">Data</th>
      <th className={`${styles.th} `} scope="col">Dispatcher</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th  className={`${styles.td} `} scope="row">1</th>
      <td className={`${styles.td} `}  >Primary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">2</th>
       <td className={`${styles.td} `}  >Primary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
      
    </tr>
    <tr>
      <th className={`${styles.td} `}  scope="row">3</th>
      <td className={`${styles.td} `}  >LPrimary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
       <td className={`${styles.td} `}  >Primary Text</td>
      
    </tr>
    
    
  </tbody>
</table>
</div>
        </div>
       </div>
      </>
    );
}

export default Profile;
