import styles from "./SideBar.module.css";
import React, { useState } from "react";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.svg";
import Vector3 from "../../assets/Vector3.svg";
import Vector4 from "../../assets/Vector4.svg";
import Vector5 from "../../assets/Vector5.svg";
import Vector6 from "../../assets/Vector6.svg";
import Vector7 from "../../assets/Vector7.svg";
import Vector8 from "../../assets/Vector8.svg";
import Vector9 from "../../assets/Vector9.svg";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(1);

  const links = [
      { path: "/", name: "Home", icon: Vector1 },
    { path: "/Administration", name: "Administration", icon: Vector2 },
    { path: "/academics", name: "Academics", icon: Vector1 },

    { path: "/Data_and__Reportsfrom", name: "Data and Reports", icon: Vector5 },
    { path: "/Students", name: "Students", icon: Vector6 },
    { path: "/Parent", name: "Parent", icon: Vector8 },
    { path: "/Social", name: "Social", icon: Vector8 },
    { path: "/Quicks_Links", name: "Quicks Links", icon: Vector6 },

  ];

  return (
    <div className={`${styles.sidbar} d-flex flex-column`}> {/* Changed to flex-column */}
      <hr />
      <div className={`${styles.sidbar2}  flex-grow-1`}> {/* Added flex-grow-1 */}
        {links.map((link, index) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.select} ${styles.linkNoUnderline} mt-4` : `${styles.linkNoUnderline} mt-4 ms-xl-2 ms-lg-2 ms-md-2 ms-sm-2 ms-0`
            }
            onClick={() => setActiveIndex(index + 1)}
          >
            <img
              src={link.icon}
              alt={link.name}
              className={`${styles.icon} ${activeIndex === index + 1 ? styles.activeIcon : " "} me-2 ms-xl-3 ms-lg-3 ms-md-3 ms-sm-3 ms-0  `}
            />
            <span className={`${styles.linkText} ${activeIndex === index + 1 ? styles.p1 : styles.p2} d-none d-lg-inline`}>
              {link.name}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="mt-auto d-flex justify-content-start align-items-end pb-3 mb-5 ms-3"> {/* Removed the logout class */}
      <div className="d-flex ">

        <i className="fa-solid fa-right-from-bracket mt-1 me-2" style={{ color: "#858585" }}></i>
        <p className={`${styles.logout} d-none d-lg-inline`}>Logout</p>
        </div>

      </div>
    </div>
  );
}

export default SideBar;
