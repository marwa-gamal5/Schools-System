import Swal from "sweetalert2";
import styles from '../ManageStage/ManageStage.module.css';
import  { useEffect, useState } from "react";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../../Utils/AxiosInstance.jsx";
function Grades() {

    const [academic_year_id, setacademic_year_id] = useState('');
    const [grade_id, setgrade_id] = useState('');
    const [Grades, setGrades] = useState([]);
    const [programme_id, setprogramme_id] = useState('');
    const [name, setname] = useState('');


    const [InitialClass, setInitialClass] = useState([]);
    const [AcademicYears, setAcademicYears] = useState([]);
    const [programmes, setprogrammes] = useState([]);

    const [Idd,setIdd] =useState(0);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEdit = () => setShowEditModal(false);
    const handleShowEdit = () => setShowEditModal(true);



    // function to view ALL Grades
    // function to View All intial classes
    const view_all_intial_classes = async () => {
        await AxiosInstance.post('/general_settings/view-all-intial-classes/').then((res) => {
            if (res.data.success) {

                setInitialClass(res.data.success);
                console.log("view-all-intial-classes", res.data.success);
            }
            if (res.data.error) {
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                });
            }
        });
    }




    useEffect(() => {
        view_all_intial_classes()


    }, []);






    //function to View one  Intial Class
    const view_one_intial_class = async (id) => {
        setIdd(id);
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const response = await axiosInstance.post('/general_settings/view-one-intial-class/', { id: id }, config);

            if (response.data.success) {
                const intial_class = response.data.success;
                console.log("view-one-intial-class", response.data.success)
                setacademic_year_id(intial_class.academic_year_id);
                setgrade_id(intial_class.grade_id);
                setprogramme_id(intial_class.programme_id);
                setname(intial_class.name);

                handleShowEdit();
            } else if (response.data.error) {
                Swal.fire({
                    title: 'Error!',
                    text: response.data.error,
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while fetching the grade data.',
                icon: 'error',
            });
        }
    };

    useEffect(() => {
        // Fetch View All Grade
        AxiosInstance.post('general_settings/view-all-grades/')
            .then((res) => {


                if (res.data.success) {
                    setGrades(res.data.success);
                } else if (res.data.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.error,
                        icon: 'error',
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching grading types:', error);
            });


        // Fetch acadmic years

        AxiosInstance.post('academic/view-acdmic-years-acceptedopen/')
            .then((res) => {


                if (res.data.success) {
                    setAcademicYears(res.data.success);
                } else if (res.data.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.error,
                        icon: 'error',
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching grading types:', error);
            });


        // Fetch programmes

        AxiosInstance.post('general_settings/view-all-programmes/')
            .then((res) => {


                if (res.data.success) {
                    setprogrammes(res.data.success);
                } else if (res.data.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.error,
                        icon: 'error',
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching grading types:', error);
            });








    }, []);

    // Function to update grade
    const update_one_Grade = async () => {
        try {
            const response = await AxiosInstance.post('/general_settings/update-intial-class/', {
                id: Idd,
                acadmic_year_id:academic_year_id,
                grade_id: grade_id,
                name: name,
                programme_id: programme_id,


            });

            if (response.data.success) {
                console.log("response.data.success", response.data.success)
                Swal.fire({
                    title: 'Success!',
                    text: response.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_intial_classes();
                    handleCloseEdit();
                });
            } else if (response.data.error) {
                console.log("response.data.error", response.data.error)
                Swal.fire({
                    title: 'Error!',
                    text: response.data.error,
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while updating the grade data.',
                icon: 'error',
            });
        }
    };


    return (
        <div className='containt ' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "250px" }}>

            <div className='p-4'>
                <h1>Intial Class</h1>

                {/* Modal to show view one Grade and update */}
                <Modal show={showEditModal} onHide={handleCloseEdit} className='pt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Intial Class</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label> Name </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Grade Name in language one"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="academic_year_id">
                                <Form.Label>Academic Year</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={academic_year_id}
                                    onChange={(e) => setacademic_year_id(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Grading Type</option>
                                    {AcademicYears.map((type) => (
                                        <option key={type.id} value={type.id}>{type.year_name_g}</option>
                                    ))}
                                </select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="grading_type_id">
                                <Form.Label>Grade</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={grade_id}
                                    onChange={(e) => setgrade_id(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Grade</option>
                                    {Grades.map((type) => (
                                        <option key={type.id} value={type.id}>{type.grade_name_lng1}</option>
                                    ))}
                                </select>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="grading_type_id">
                                <Form.Label>Programme</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={programme_id}
                                    onChange={(e) => setprogramme_id(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Grade</option>
                                    {programmes.map((type) => (
                                        <option key={type.id} value={type.id}>{type.programme_name_lng1}</option>
                                    ))}
                                </select>
                            </Form.Group>



                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => update_one_Grade()}
                            >
                                Update Stage
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>


                {/* view all Grades Table */}

                <div>
                    <div className={`${styles.box} mt-md-5 mt-4`}>



                        <div className="d-flex justify-content-center align-content-center  w-100">
                            <table className="table table-bordered mt-3   text-center">
                                <thead>
                                <tr>
                                    <th className={`${styles.th} `} scope="col"> Grade Name</th>
                                    <th className={`${styles.th} `} scope="col"> Name</th>
                                    <th className={`${styles.th} `} scope="col">Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {InitialClass.map((item, index) => (
                                    <tr key={index} className={`${styles.tr}  `}>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.grade_name}</td>
                                        <td data-label="ENname" className={`${styles.td} `}>{item.name}</td>
                                        <td data-label="Edit" className={`${styles.td}`}>
                                            <i className="fa-solid fa-pen-to-square"
                                               onClick={() => view_one_intial_class(item.id)}></i>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grades;
