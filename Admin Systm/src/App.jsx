import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbar/Navbarr";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Academics from './pages/Academics/Academics';
import Quicks_Links from "./pages/Quicks_Links/Quicks_Links";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Social from "./pages/Social/Social";
import Students from "./pages/Students/Students";
import Data_and__Reportsfrom from './pages/Data_and__Reports/Data_and__Reports';
import Administration from './pages/Administration/Administration';
import Parent from './pages/Parent/Parent';
// start Administration Routes
import Activity from './pages/Administration/Activity/Activity';
import AdmissionRegistration from './pages/Administration/AdmissionRegistration/AdmissionRegistration';
import Agreement from './pages/Administration/Agreement/Agreement';
import Archiving from './pages/Administration/Archiving/Archiving';
import Behaviour from './pages/Administration/Behaviour/Behaviour';

import BooksUniform from './pages/Administration/BooksUniform/BooksUniform';
import Clinic from './pages/Administration/Clinic/Clinic';
import Finance from './pages/Administration/Finance/Finance';
import HelpDesk from './pages/Administration/HelpDesk/HelpDesk';
import Hostel from './pages/Administration/Hostel/Hostel';

import HumanResource from './pages/Administration/HumanResource/HumanResource';
import Inventory from './pages/Administration/Inventory/Inventory';
import Procurement from './pages/Administration/Procurement/Procurement';
import RoomBooking from './pages/Administration/RoomBooking/RoomBooking';
import User from './pages/Administration/User/User';

import SMS from './pages/Administration/SMS/SMS';
import StaffTransport from './pages/Administration/StaffTransport/StaffTransport';
import StudentAffairs from './pages/Administration/StudentAffairs/StudentAffairs';
import Surveys from './pages/Administration/Surveys/Surveys';
import Transport from './pages/Administration/Transport/Transport';

import Settings from './pages/Administration/Settings/Settings';
// end  Administration Routes

// start Admission & Registration Routes
import ApplicantRegistration from './pages/Administration/AdmissionRegistration/ApplicantRegistration/ApplicantRegistration';
import DirectAdmit from './pages/Administration/AdmissionRegistration/DirectAdmit/DirectAdmit';
import ApplicantRegistrationReport from './pages/Administration/AdmissionRegistration/ApplicantRegistrationReport/ApplicantRegistrationReport';
import ManageApplicantDetails from './pages/Administration/AdmissionRegistration/ManageApplicantDetails/ManageApplicantDetails';
import ApplicantRegistrationSetting from './pages/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ApplicantRegistrationSetting';

import ApplicantDocumentVerification from './pages/Administration/AdmissionRegistration/ApplicantDocumentVerification/ApplicantDocumentVerification';
import UpgradeDowngrade from './pages/Administration/AdmissionRegistration/UpgradeDowngrade/UpgradeDowngrade';
import MergeGuardianAccounts from './pages/Administration/AdmissionRegistration/MergeGuardianAccounts/MergeGuardianAccounts';
import AdmissionReportDetails from './pages/Administration/AdmissionRegistration/AdmissionLogDetails/AdmissionLogDetails';
import ChangeApplicantStatus from './pages/Administration/AdmissionRegistration/ChangeApplicantStatus/ChangeApplicantStatus';

import AdmissionLogDetails from './pages/Administration/AdmissionRegistration/AdmissionLogDetails/AdmissionLogDetails';
import ChangeApplicant from './pages/Administration/AdmissionRegistration/ChangeApplicant/ChangeApplicant';
import AdmissionParentWiseReport from './pages/Administration/AdmissionRegistration/AdmissionParentWiseReport/AdmissionParentWiseReport';
import ManageClassrooms from './pages/Administration/AdmissionRegistration/ManageClassrooms/ManageClassrooms';
import StudentsDocumentsreport from './pages/Administration/AdmissionRegistration/StudentsDocumentsreport/StudentsDocumentsreport';

import ApplicantForm from './pages/Administration/AdmissionRegistration/ApplicantForm/ApplicantForm';
import StudentRenewalLetters from './pages/Administration/AdmissionRegistration/StudentRenewalLetters/StudentRenewalLetters';
import RegistrationList from './pages/Administration/AdmissionRegistration/RegistrationList/RegistrationList';
import IfNoGuardian from './pages/Administration/AdmissionRegistration/IfNoGuardian/IfNoGuardian';
import NewStudentReport from './pages/Administration/AdmissionRegistration/NewStudentReport/NewStudentReport';


// end  Admission & Registration Routes

// start  Administration in Admission & Registration Routes in Applicant Registration 
import ViewApplicants from './pages/Administration/AdmissionRegistration/ApplicantRegistration/View Applicants/ViewApplicants';
import ViewAllApplicants  from './pages/Administration/AdmissionRegistration/ApplicantRegistration/ViewAllApplicants/ViewAllApplicants';
import AllotApplicants from './pages/Administration/AdmissionRegistration/ApplicantRegistration/AllotApplicants/AllotApplicants';
import RejectApplicants from './pages/Administration/AdmissionRegistration/ApplicantRegistration/RejectApplicants/RejectApplicants';
// End   Administration in Admission & Registration Routes in Applicant Registration 
 
function App() {
  return (
    <>
     {/* Start SideBar Routes */}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Academics />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/Data_and__Reportsfrom"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Data_and__Reportsfrom />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/Students"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Students />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="Parent"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Parent/>
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="Social"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Social />
                <Footer />
              </>
            }
          />
         
          <Route
            exact
            path="Quicks_Links"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Quicks_Links />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Administration"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Administration />
                <Footer />
              </>
            }
          />
           {/* End SideBar Routes */}
          {/* start Administration Routes */}
           <Route
            exact
            path="/Administration/Activity"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Activity />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/Administration/AdmissionRegistration"
            element={
              <>
                <Navbarr />
                <SideBar />
                <AdmissionRegistration />
                <Footer />
              </>
            }
          />

           <Route
            exact
            path="/Administration/Agreement"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Agreement />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/Administration/Archiving"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Archiving />
                <Footer />
              </>
            }
          />

        <Route
            exact
            path="/Administration/Behaviour"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Behaviour />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/BooksUniform"
            element={
              <>
                <Navbarr />
                <SideBar />
                <BooksUniform />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Administration/Clinic"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Clinic />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/Finance"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Finance />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/HelpDesk"
            element={
              <>
                <Navbarr />
                <SideBar />
                <HelpDesk />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/Hostel"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Hostel />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/HumanResource"
            element={
              <>
                <Navbarr />
                <SideBar />
                <HumanResource />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/Inventory"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Inventory />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/Procurement"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Procurement />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Administration/RoomBooking"
            element={
              <>
                <Navbarr />
                <SideBar />
                <RoomBooking />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/User"
            element={
              <>
                <Navbarr />
                <SideBar />
                <User />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/SMS"
            element={
              <>
                <Navbarr />
                <SideBar />
                <SMS />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/StaffTransport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <StaffTransport />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/StudentAffairs"
            element={
              <>
                <Navbarr />
                <SideBar />
                <StudentAffairs />
                <Footer />
              </>
            }
          />
              <Route
            exact
            path="/Administration/Surveys"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Surveys />
                <Footer />
              </>
            }
          />
               <Route
            exact
            path="/Administration/Transport"
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
            path="/Administration/Settings"
            element={
              <>
                <Navbarr />
                <SideBar />
                <Settings />
                <Footer />
              </>
            }
          />
           {/* End Administration Routes */}

            {/* start  Admission & Registration Routes */}
            <Route
            exact
            path="/Administration/AdmissionRegistration/ApplicantRegistration"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ApplicantRegistration />
                <Footer />
              </>
            }
          />
                 <Route
            exact
            path="/Administration/AdmissionRegistration/DirectAdmit"
            element={
              <>
                <Navbarr />
                <SideBar />
                <DirectAdmit />
                <Footer />
              </>
            }
          />
               <Route
            exact
            path="/Administration/AdmissionRegistration/ApplicantRegistrationReport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ApplicantRegistrationReport />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/ManageApplicantDetails"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ManageApplicantDetails />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/ApplicantRegistrationSetting"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ApplicantRegistrationSetting />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/ApplicantDocumentVerification"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ApplicantDocumentVerification />
                <Footer />
              </>
            }
          />
              <Route
            exact
            path="/Administration/AdmissionRegistration/UpgradeDowngrade"
            element={
              <>
                <Navbarr />
                <SideBar />
                <UpgradeDowngrade />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/Administration/AdmissionRegistration/MergeGuardianAccounts"
            element={
              <>
                <Navbarr />
                <SideBar />
                <MergeGuardianAccounts />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/AdmissionRegistration/AdmissionReportDetails"
            element={
              <>
                <Navbarr />
                <SideBar />
                <AdmissionReportDetails />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/AdmissionRegistration/ChangeApplicantStatus"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ChangeApplicantStatus />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/AdmissionRegistration/AdmissionLogDetails"
            element={
              <>
                <Navbarr />
                <SideBar />
                <AdmissionLogDetails />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/AdmissionRegistration/ChangeApplicant"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ChangeApplicant />
                <Footer />
              </>
            }
          />
               <Route
            exact
            path="/Administration/AdmissionRegistration/AdmissionParentWiseReport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <AdmissionParentWiseReport />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/ManageClassrooms"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ManageClassrooms />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/StudentsDocumentsreport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <StudentsDocumentsreport />
                <Footer />
              </>
            }
          />
              <Route
            exact
            path="/Administration/AdmissionRegistration/ApplicantForm"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ApplicantForm />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/StudentRenewalLetters"
            element={
              <>
                <Navbarr />
                <SideBar />
                <StudentRenewalLetters />
                <Footer />
              </>
            }
          />
           <Route
            exact
            path="/Administration/AdmissionRegistration/RegistrationList"
            element={
              <>
                <Navbarr />
                <SideBar />
                <RegistrationList />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="/Administration/AdmissionRegistration/IfNoGuardian"
            element={
              <>
                <Navbarr />
                <SideBar />
                <IfNoGuardian />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="/Administration/AdmissionRegistration/NewStudentReport"
            element={
              <>
                <Navbarr />
                <SideBar />
                <NewStudentReport />
                <Footer />
              </>
            }
          />
            {/* End Admission & Registration Routes */}
            {/* start  Administration in Admission & Registration Routes in Applicant Registration  Routes  */}

            <Route
            exact
            path="Administration/AdmissionRegistration/ApplicantRegistration/ViewApplicants"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ViewApplicants />
                <Footer />
              </>
            }
          />
            <Route
            exact
            path="Administration/AdmissionRegistration/ApplicantRegistration/ViewAllApplicants/ViewAllApplicants"
            element={
              <>
                <Navbarr />
                <SideBar />
                <ViewAllApplicants />
                <Footer />
              </>
            }
          />
             <Route
            exact
            path="Administration/AdmissionRegistration/ApplicantRegistration/AllotApplicants/AllotApplicants"
            element={
              <>
                <Navbarr />
                <SideBar />
                <AllotApplicants />
                <Footer />
              </>
            }
          />
            
             <Route
            exact
            path="Administration/AdmissionRegistration/ApplicantRegistration/RejectApplicants/RejectApplicants"
            element={
              <>
                <Navbarr />
                <SideBar />
                <RejectApplicants />
                <Footer />
              </>
            }
          />

 {/* end  Administration in Admission & Registration Routes in Applicant Registration   */}
          
                          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
