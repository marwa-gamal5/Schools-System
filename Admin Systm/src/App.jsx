import Root from "./components/myRoot/Root.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "../src/pages/Home/Home.jsx";
import Academics from './pages/Academics/Academics';
import Quicks_Links from "./pages/Quicks_Links/Quicks_Links";
import Social from "./pages/Social/Social";
import Students from "./pages/Students/Students";
import Data_and__Reportsfrom from './pages/Data_and__Reports/Data_and__Reports';
import Administration from './pages/Administration/Administration';
import Parent from './pages/Parent/Parent';
import AddGrade from  "./pages/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/AddGRade/AddGrade.jsx";
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


import Settings from "./pages/Administration/Settingss/Settingss.jsx";
// end  Administration Routes

// start Settings Routes
import GradeTypeSystem from "./pages/Administration/Settingss/GradeTypeSystem/GradeTypeSystem.jsx";
import Programmes from "./pages/Administration/Settingss/Programmes/Programmes.jsx";
// end  Settings Routes

// start Admission & Registration Routes
import ApplicantRegistration from './pages/Administration/AdmissionRegistration/ApplicantRegistration/ApplicantRegistration';
import ManageStage from './pages/Administration/AdmissionRegistration/ManageStage/ManageStage';
import InitialClasss from "./pages/Administration/AdmissionRegistration/InitialClasss/InitialClasss";
import Grades from "./pages/Administration/AdmissionRegistration/Grades/Grades.jsx";
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
import ManageGrades
    from "./pages/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/ManageGrades.jsx";
// End   Administration in Admission & Registration Routes in Applicant Registration

import AcadmicYears from "./pages/Academics/AcadmicYears/AcadmicYears.jsx";
import AcadmicYearSemster from "./pages/Academics/AcadmicYearSemster/AcadmicYearSemster.jsx";
import Years from "./pages/Academics/Years/Years.jsx";
import NewAcademicYear from "./pages/Academics/AcadmicYears/NewAcademicYear/NewAcademicYear.jsx";
import ViewAcademicYear from "./pages/Academics/AcadmicYears/ViewAcademicYear/ViewAcademicYear.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/" element={<Root />}>


            <Route  index element={<Home />} />
            <Route path="/academics" element={  <Academics />} />
            <Route path="Quicks_Links" element={  <Quicks_Links />} />
            <Route path="Social" element={  <Social />} />
            <Route path="/Students" element={  <Students />} />
            <Route path="/Data_and__Reportsfrom" element={  <Data_and__Reportsfrom />} />
            <Route path="/Administration" element={  <Administration />} />
            <Route path="Parent" element={  <Parent />} />
            <Route path="/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades/AddGRade" element={  <AddGrade />} />
            {/*start Administration Routes*/}
            <Route path="/Administration/Activity" element={  <Activity />} />
            <Route path="/Administration/AdmissionRegistration" element={  <AdmissionRegistration />} />
            <Route path="/Administration/Agreement" element={  <Agreement />} />
            <Route path="/Administration/Archiving" element={  <Archiving />} />
            <Route path="/Administration/Behaviour" element={  <Behaviour />} />
            <Route path="/Administration/BooksUniform" element={  <BooksUniform />} />
            <Route path="/Administration/Clinic" element={  <Clinic />} />
            <Route path="/Administration/Finance" element={  <Finance />} />
            <Route path="/Administration/HelpDesk" element={  <HelpDesk />} />
            <Route path="/Administration/Hostel" element={  <Hostel />} />
            <Route path="/Administration/HumanResource" element={  <HumanResource />} />
            <Route path="/Administration/Inventory" element={  <Inventory />} />
            <Route path="/Administration/Procurement" element={  <Procurement />} />
            <Route path="/Administration/RoomBooking" element={  <RoomBooking />} />
            <Route path="/Administration/User" element={  <User />} />
            <Route path="/Administration/SMS" element={  <SMS />} />
            <Route path="/Administration/StaffTransport" element={  <StaffTransport />} />
            <Route path="/Administration/StudentAffairs" element={  <StudentAffairs />} />
            <Route path="/Administration/Surveys" element={  <Surveys />} />
            <Route path="/Administration/Transport" element={  <Transport />} />
            <Route path="/Administration/Settings" element={  <Settings />} />
            {/*end  Administration Routes*/}
            {/*start Admission & Registration Routes*/}
            <Route path="/Administration/AdmissionRegistration/ApplicantRegistration" element={  <ApplicantRegistration />} />
            <Route path="/Administration/AdmissionRegistration/ManageStage" element={  <ManageStage />} />
            <Route path="/Administration/AdmissionRegistration/InitialClasss" element={  <InitialClasss/>} />
            <Route path="/Administration/AdmissionRegistration/Grades" element={  <Grades />} />
            <Route path="/Administration/AdmissionRegistration/ManageApplicantDetails" element={  <ManageApplicantDetails />} />
            <Route path="/Administration/AdmissionRegistration/ApplicantRegistrationSetting" element={  <ApplicantRegistrationSetting />} />

            <Route path="/Administration/AdmissionRegistration/ApplicantDocumentVerification" element={  <ApplicantDocumentVerification />} />
            <Route path="/Administration/AdmissionRegistration/UpgradeDowngrade" element={  <UpgradeDowngrade />} />
            <Route path="/Administration/AdmissionRegistration/MergeGuardianAccounts" element={  <MergeGuardianAccounts />} />
            <Route path="/Administration/AdmissionRegistration/AdmissionReportDetails" element={  <AdmissionReportDetails />} />
            <Route path="/Administration/AdmissionRegistration/ChangeApplicantStatus" element={  <ChangeApplicantStatus />} />
            <Route path="/Administration/AdmissionRegistration/AdmissionLogDetails" element={  <AdmissionLogDetails />} />
            <Route path="/Administration/AdmissionRegistration/ChangeApplicant" element={  <ChangeApplicant />} />
            <Route path="/Administration/AdmissionRegistration/AdmissionParentWiseReport" element={  <AdmissionParentWiseReport />} />
            <Route path="/Administration/AdmissionRegistration/ManageClassrooms" element={  <ManageClassrooms />} />
            <Route path="/Administration/AdmissionRegistration/StudentsDocumentsreport" element={  <StudentsDocumentsreport />} />
            <Route path="/Administration/AdmissionRegistration/ApplicantForm" element={  <ApplicantForm />} />
            <Route path="/Administration/AdmissionRegistration/StudentRenewalLetters" element={  <StudentRenewalLetters />} />
            <Route path="/Administration/AdmissionRegistration/RegistrationList" element={  <RegistrationList />} />
            <Route path="/Administration/AdmissionRegistration/IfNoGuardian" element={  <IfNoGuardian />} />
            <Route path="/Administration/AdmissionRegistration/NewStudentReport" element={  <NewStudentReport />} />
            {/*start Settings Routes*/}
            <Route path="/Administration/Settings/GradeTypeSystem" element={  <GradeTypeSystem />} />
            <Route path="/Administration/Settings/Programmes" element={  <Programmes />} />

            {/*end  Settings Routes*/}
            {/*end  Admission & Registration Routes*/}
            {/* start  Administration in Admission & Registration Routes in Applicant Registration  Routes  */}
            <Route path="Administration/AdmissionRegistration/ApplicantRegistration/ViewApplicants" element={  <ViewApplicants />} />
            <Route path="Administration/AdmissionRegistration/ApplicantRegistration/ViewAllApplicants/ViewAllApplicants" element={  <ViewAllApplicants />} />
            <Route path="Administration/AdmissionRegistration/ApplicantRegistration/AllotApplicants/AllotApplicants" element={  <AllotApplicants />} />
            <Route path="Administration/AdmissionRegistration/ApplicantRegistration/RejectApplicants/RejectApplicants" element={  <RejectApplicants />} />
            <Route path="/Administration/AdmissionRegistration/ApplicantRegistrationSetting/ManageGrades" element={  <ManageGrades />} />

            {/* end  Administration in Admission & Registration Routes in Applicant Registration   */}
            <Route path="/academics/acadmicyears" element={  <AcadmicYears />} />
            <Route path="/academics/academicyearSemester" element={  <AcadmicYearSemster />} />
            <Route path="/academics/years" element={  <Years />} />
            <Route path="/academics/newacadmicyears/" element={  <NewAcademicYear />} />
            <Route path="/academics/viewacadmicyear/:idd" element={  <ViewAcademicYear />} />




        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;