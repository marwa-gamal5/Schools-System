import styles from './Complaint.module.css';

function Complaint() {
    return (
      <>
       <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px"  }}> 
       <div className='row p-3'>
        <div className='row'>
        <div className='col-4 '>
          <p className={`${styles.p1}`}>Complaint No</p>
          
          <div className={`${styles.filedstyle}`}>

          </div>

        </div>
        </div>

       </div>
      
      </div>
      </>
    );
}

export default Complaint;
