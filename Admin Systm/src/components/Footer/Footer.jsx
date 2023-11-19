import { colors } from '@mui/material';
import styles from './Footer.module.css'

function Footer() {


    return <>
       <div className={`${styles.footer}`} style={{zIndex:'9999'}} > 
<div >
<p className={`${styles.p1} m-0  `}> AlRowad (AITSP) 2022 All right reserved.</p>
</div>

<div className='d-flex justify-containt-between align item-between'>
{/* <i class="fa-brands fa-facebook" style={{color:"#ffffff"}}  ></i> */}
<i class="fa-brands fa-facebook-f ms-3" style={{color:"#ffffff"}}></i>
<i class="fa-brands fa-linkedin-in ms-3" style={{color:"#ffffff"}}></i>
<i class="fa-brands fa-instagram ms-3"style={{color:"#ffffff"}}  ></i>

<i class="fa-brands fa-whatsapp ms-3" style={{color:"#ffffff"}}></i>

</div>
       </div>
    
    </>
}
export default Footer;