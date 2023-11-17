import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbar/Navbarr";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Overview from "./components/Overview/Overview";
import Notifications from "./components/Notifications/Notifications";
import News_Events from "./components/News_Events/News_Events";
import Profile from "./pages/Profile/Profile";
import Fees from "./components/Fees/Fees";
import Memos from "./pages/Memos/Memos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messaging from "./pages/Messaging/Messaging";
import Transport from "./pages/Transport/Transport";
import Timetable from "./pages/Timetable/Timetable";
import Teachers from "./pages/Teachers/Teachers";
import Attendance from './pages/Attendance/Attendance';
import Weekly_Plan from './pages/Weekly_Plan/Weekly_Plan';
import Assignment from './pages/Assignment/Assignment';
import Tasks from './pages/Tasks/Tasks';
import Material_Covered from './pages/Material_Covered/Material_Covered';
import Grade_Reports from './pages/Grade_Reports/Grade_Reports';
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
                {/* <Sms/> */}
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
                {/* <Sons /> */}
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
                {/* <EServices /> */}
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Profile />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Memos"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Memos />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Messaging"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Messaging />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Transport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Transport />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Timetable"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Timetable />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Teachers"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Teachers />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Attendance"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Attendance />
                <Footer />
              </>
            }
          />
                <Route
            exact
            path="/Weekly_Plan"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Weekly_Plan />
                <Footer />
              </>
            }
          />
               <Route
            exact
            path="/Assignment"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Assignment />
                <Footer />
              </>
            }
          />
                  <Route
            exact
            path="/Tasks"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Tasks />
                <Footer />
              </>
              
            }
          />
                       <Route
            exact
            path="/Material_Covered"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Material_Covered />
                <Footer />
              </>
              
            }
          />
                          <Route
            exact
            path="/Grade_Reports"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Grade_Reports/>
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
