import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter, Route , Routes } from 'react-router-dom';
import "./App.css";
import Navbarr from "./components/Navbar/Navbarr";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./components/Overview/Overview";
import Notifications from "./components/Notifications/Notifications";
import Sms from "./components/Sms/Sms";
import News_Events from "./components/News_Events/News_Events";
import Sons from "./components/Sons/Sons";
import Fees from "./components/Fees/Fees";
import EServices from "./components/EServices/EServices";
import Complaint from "./pages/Complaint/Complaint";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Overview />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/notifications"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Notifications />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/News_Events"
            element={
              <>
                <Navbarr />
                <SideBar />
                <News_Events />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Sms"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Sms/>
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Sons"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Sons />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Fees"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Fees />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/e-services"
            element={
              <>
                <Navbarr />
                <SideBar />
                <EServices />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/complaint"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Complaint />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
