import styles from './Administration.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Administration() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  //set button Routes
  const buttonRoutes = [
    "/Administration/Activity",
    "/Administration/AdmissionRegistration",
    "/Administration/Agreement",
    "/Administration/Archiving",
    "/Administration/Behaviour",
    "/Administration/BooksUniform",
    "/Administration/Clinic",
    "/Administration/Finance",
    "/Administration/HelpDesk",
    "/Administration/Hostel",
    "/Administration/HumanResource",
    "/Administration/Inventory",
    "/Administration/Procurement",
    "/Administration/RoomBooking",
    "/Administration/User",
    "/Administration/SMS",
    "/Administration/StaffTransport",
    "/Administration/StudentAffairs",
    "/Administration/Surveys",
    "/Administration/Transport",
    "/Administration/Settings",
  ];
 //set button Names
  const buttonNames = [
    "Activity",
    "Admission & Registration",
    "Agreement",
    "Archiving (Inbox,Outbox)",
    "Behaviour",
    "Books & Uniform",
    "Clinic",
    "Finance",
    "Help Desk",
    "Hostel",
    "Human Resource",
    "Inventory",
    "Procurement",
    "Room Booking",
    "User",
    "SMS",
    "Staff Transport",
    "Student Affairs",
    "Surveys",
    "Transport",
    "Settings ",
   
  ];
//function to handle event when Button Click
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
    navigate(buttonRoutes[buttonNumber - 1]); 
  };

  return (
    <>
      <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: '250px' }}>
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

export default Administration;
