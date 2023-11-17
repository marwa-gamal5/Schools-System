import { useState } from 'react';
import styles from './Navbar.module.css';
import user from '../../assets/Administrator.svg';
import logo from '../../assets/Component 1.png';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="p-3" style={{ position: "fixed", top: '0px', backgroundColor: '#fff', zIndex: '9999', width: '100%', height: '80px' }}>

        <div className={`${styles.logo}`}>

          <img className="mt-1" src={logo} alt='Logo' />

        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Section 1: Language selection and search */}
          <div className="d-flex align-items-center w-100">
            <i className="fa-solid fa-globe m-0 mt-1" style={{ color: '#0951FE' }}></i>
            <p className={`${styles.toggleDropdown} ms-2 m-0 mt-1`} onClick={toggleDropdown}>{selectedLanguage}</p>
            <i className="fa-solid fa-caret-down ms-2" onClick={toggleDropdown}></i>
            {dropdownOpen && (
              <div className={`${styles.dropdown} dropdown-menu p-1 ms-4`} style={{ display: 'block', position: 'absolute' }}>
                <p onClick={() => selectLanguage('EN')}>EN</p>
                <p onClick={() => selectLanguage('AR')}>AR</p>
              </div>
            )}
            <div className={`${styles.searchlayout}`}>
              <i className={`${styles.searchIcon} fa-solid fa-magnifying-glass`} style={{ color: '#858585' }}></i>
              <i className={`${styles.filter} fa-solid fa-filter`} style={{ color: '#858585' }}></i>
              <input className={`${styles.search}`} placeholder="Search..." />
            </div>
          </div>

          {/* Section 2: Notifications and user profile */}
          <div className='d-flex align-items-center justify-content-end w-100'>
            <div className='d-flex'>
              <i className="fa-regular fa-envelope me-4" style={{ color: '#0951FE' }}></i>
              <i className="fa-solid fa-bell me-5" style={{ color: '#0951FE' }}></i>
            </div>
            <div class="d-flex justify-content-end align-items-end">
              <img className={`${styles.userImg} me-3`} src={user} alt="USER" />
              <div className='row'>
                <div className={`${styles.name1}`}>Hazem Abdalla</div>
                <div className={`${styles.name2}`}>Guardian</div>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarr;
