import React from 'react'
import styles from './AdmissionRegistration.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdmissionRegistration() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  //set button Routes
  const buttonRoutes = [
    "/Administration/AdmissionRegistration/ApplicantRegistration",
    "/Administration/AdmissionRegistration/DirectAdmit",
    "/Administration/AdmissionRegistration/ApplicantRegistrationReport",
    "/Administration/AdmissionRegistration/ManageApplicantDetails",
    "/Administration/AdmissionRegistration/ApplicantRegistrationSetting",

    "/Administration/AdmissionRegistration/ApplicantDocumentVerification",
    "/Administration/AdmissionRegistration/UpgradeDowngrade",
    "/Administration/AdmissionRegistration/MergeGuardianAccounts",
    "/Administration/AdmissionRegistration/AdmissionReportDetails",
    "/Administration/AdmissionRegistration/ChangeApplicantStatus",

    "/Administration/AdmissionRegistration/AdmissionLogDetails",
    "/Administration/AdmissionRegistration/ChangeApplicant",
    "/Administration/AdmissionRegistration/AdmissionParentWiseReport",
    "/Administration/AdmissionRegistration/ManageClassrooms",
    "/Administration/AdmissionRegistration/StudentsDocumentsreport",

    "/Administration/AdmissionRegistration/ApplicantForm",
    "/Administration/AdmissionRegistration/StudentRenewalLetters",
    "/Administration/AdmissionRegistration/RegistrationList",
    "/Administration/AdmissionRegistration/IfNoGuardian",
    "/Administration/AdmissionRegistration/NewStudentReport",
    
  ];
 //set button Names
  const buttonNames = [
    "Applicant Registration",
    "Direct Admit",
    "Applicant Registration Report",
    "Manage Applicant Details",
    "Applicant Registration Setting ",

    "Applicant Document Verification",
    "Upgrade & Downgrade",
    "Merge Guardian Accounts",
    "Admission Report Details",
    "Change Applicant Status",

    "Admission Log Details",
    "Change Applicant Year /Semester",
    "Admission Parent Wise Report",
    "Manage Classrooms",
    "Students Documents report",

    "Applicant Form",
    "Student Renewal Letters",
    "Registration List",
    "If No Guardian",
    "New Student Report",
   
   
  ];
//function to handle event when Button Click
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
    navigate(buttonRoutes[buttonNumber - 1]); 
  };
  return (
    <div className='containt' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "247px" }}>
        <div className='p-4'>
          <div className={`${styles.title}`}>Admission & Registration</div>
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
  )
}

export default AdmissionRegistration