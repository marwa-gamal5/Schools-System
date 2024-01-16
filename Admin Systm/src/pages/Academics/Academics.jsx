import styles from './Academics.module.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Academics() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    //set button Routes
    const buttonRoutes = [
        "/academics/years",
        "/academics/academicyearSemester",
        "/academics/acadmicyears",
    ];
    //set button Names
    const buttonNames = [
        "Years",
        "Acadmic Year Semster",
        "Acadmic Years",
    ];
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
        navigate(buttonRoutes[buttonNumber - 1]);
    };
    return (
        <>
            <div className='containt' style={{paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px'}}>
                <div className='p-4'>
                    <div className={`${styles.title}`}>Administration</div>
                    <div className='d-flex row'>
                        {[...Array(buttonNames.length).keys()].map((index) => (
                            <div key={index} className={`col-12 col-sm-3 mt-3`}>
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
        </>
    );
}

export default Academics;
