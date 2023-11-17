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
    { path: "/", name: "Overview", icon: Vector1 },
    { path: "/Profile", name: "Profile", icon: Vector2 },
    { path: "/notifications", name: "Notifications", icon: Vector2 },
    { path: "/Fees", name: "Fees", icon: Vector5 },
    { path: "/News_Events", name: "News & Events", icon: Vector6 },
    { path: "/Memos", name: "Memos", icon: Vector8 },
    { path: "/Messaging", name: "Messaging", icon: Vector8 },
    { path: "/Transport", name: "Transport", icon: Vector6 },
    { path: "/Timetable", name: "Timetable", icon: Vector6 },
    { path: "/Teachers", name: "Teachers", icon: Vector6 },
    { path: "/Attendance", name: "Attendance", icon: Vector6 },
    { path: "/Weekly_Plan", name: "Weekly Plan", icon: Vector6 },
    { path: "/Assignment", name: "Assignment", icon: Vector6 },
    { path: "/Tasks", name: "Tasks", icon: Vector6 },
    { path: "/Material_Covered", name: "Material Covered", icon: Vector6 },
    { path: "/Grade_Reports", name: "Grade Reports", icon: Vector6 },
  ];

  return (
    <div className={`${styles.sidbar} d-flex flex-column`}> {/* Changed to flex-column */}
      <hr />
      <div className={`${styles.sidbar2} flex-grow-1`}> {/* Added flex-grow-1 */}
        {links.map((link, index) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.select} ${styles.linkNoUnderline} mt-3` : `${styles.linkNoUnderline} mt-3 ms-xl-2 ms-lg-2 ms-md-2 ms-sm-2 ms-0`
            }
            onClick={() => setActiveIndex(index + 1)}
          >
            <img
              src={link.icon}
              alt={link.name}
              className={`${styles.icon} ${activeIndex === index + 1 ? styles.activeIcon : ""} me-2 ms-xl-3 ms-lg-3 ms-md-3 ms-sm-3 ms-0  `}
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
