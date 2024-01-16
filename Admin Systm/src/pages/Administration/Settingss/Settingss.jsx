import styles from '../AdmissionRegistration/AdmissionRegistration.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Settingss() {


    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    //set button Routes
    const buttonRoutes = [
        "/Administration/Settings/GradeTypeSystem",
        "/Administration/Settings/Programmes"



    ];
    //set button Names
    const buttonNames = [
        "Grade Type System",
        "Programmes"



    ];
//function to handle event when Button Click
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
        navigate(buttonRoutes[buttonNumber - 1]);
    };

    return (

        <div >


            <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px"}}>
                <div className='p-4'>
                    <div className={`${styles.title}`}>Setting</div>
                    <div className='d-flex row'>
                        {[...Array(buttonNames.length).keys()].map((index) => (
                            <div key={index} className={`col-12 col-xl-3  col-lg-4  col-md-4 col-sm-6 mt-3`}>
                                <button
                                    onClick={() => handleButtonClick(index + 1)}
                                    className={`${activeButton === index + 1 ? styles.rectangular2 : styles.rectangular} w-100 d-flex justify-content-between align-items-center`}
                                >
                                    <p className={`${activeButton === index + 1 ? styles.p3 : styles.p1} mt-3`}>{buttonNames[index]}</p>
                                    <i className={`${activeButton === index + 1 ? styles.icon2 : styles.icon} fa-solid fa-bell`}></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settingss