import axiosInstance from "../../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import styles from '../../AdmissionRegistration/ManageStage/ManageStage.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import  { useEffect, useState } from "react";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";

function GradeTypeSystem() {

    const [gradetypes,setgradetypes]= useState([]);
    const [Idd,setIdd] =useState(0);
    const [GradeName, setGradeName] = useState('');
    const [AddGradeName, setAddGradeName] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseEdit = () => setShowEditModal(false);
    const handleShowEdit = () => setShowEditModal(true);

    // function to view All Grade Types
    const view_all_grade_types = async () => {
        await AxiosInstance.post('/general_settings/view-all-grade-types/').then((res) => {
            if (res.data.success) {

                setgradetypes(res.data.success);

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

    // function to view one Grade Types
    const view_one_grade_types = async (id) => {
        setIdd(id)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const response = await axiosInstance.post('/general_settings/view-one-gradetype/', { id: id }, config);

            if (response.data.success) {

                setGradeName(response.data.success.grade_name);
                handleShowEdit();
            } else if (response.data.error) {
                Swal.fire({
                    title: 'Error!',
                    text: response.data.error,
                    icon: 'error',
                });
            }
        } catch (error) {

            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while fetching the Grade Type System data.',
                icon: 'error',
            });
        }
    };
// to call view all Grade Type System
    useEffect(() => {
        view_all_grade_types();

    }, []);




    // function to add New Grade Type System
    const add_grade_type = async () => {
        await AxiosInstance.post('/general_settings/add-gradetype/', {

            grade_name: AddGradeName

        }).then((res) => {

            if (res.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_grade_types();
                });
            }
            if (res.data.error) {
                Swal.fire({
                    title: 'Error!',
                    text: res.data.error,
                    icon: 'error',
                });
            }
        });
        handleCloseAdd();
    }


    // functio to update Grade Type System
    const update_one_grade_types = async () => {
        try {


            const response = await AxiosInstance.post('/general_settings/update-gradetype/', {
                id: Idd,
                grade_name: GradeName,

            });

            if (response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: response.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_grade_types();
                    handleCloseEdit();
                });
            } else if (response.data.error) {
                Swal.fire({
                    title: 'Error!',
                    text: response.data.error,
                    icon: 'error',
                });
            }
        } catch (error) {

            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while updating the Grade Type System data.',
                icon: 'error',
            });
        }
    }
    return (
        <div className='containt ' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "250px" }}>

            <div className='p-4'>
                <h1> Grade Type System </h1>

                {/*this Modal to show view one Grade Type System and update */}
                <Modal show={showEditModal} onHide={handleCloseEdit} className='pt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Grade Type System </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label>Grade Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Grade Namee"
                                    value={GradeName}
                                    onChange={(e) => setGradeName(e.target.value)}

                                />
                            </Form.Group>



                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => update_one_grade_types()}
                            >
                                Update Grade Type System
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* view all Grade Type System  Table */}
                <div>
                    <div className={`${styles.box} mt-md-5 mt-4`}>
                        {/*Modal to add new Grade Type System*/}
                        <div>
                            <button onClick={handleShowAdd} className={`${styles.button}`}>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </button>
                            <Modal show={showAddModal} onHide={handleCloseAdd} className='pt-5'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Grade Type System</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="languageone">
                                            <Form.Label> Grade Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Grade Name "
                                                onChange={(e) => {
                                                    setAddGradeName(e.target.value)
                                                }}
                                            />
                                        </Form.Group>

                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={(e) => {
                                                add_grade_type();
                                            }}
                                        >
                                            Add Grade Type System
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="d-flex justify-content-center align-content-center  w-100">

                            <table className="table table-bordered mt-3   text-center">
                                <thead>
                                <tr>
                                    <th className={`${styles.th} `} scope="col"> Grade Name</th>


                                    <th className={`${styles.th} `} scope="col">Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {gradetypes.map((item, index) => (
                                    <tr key={index} className={`${styles.tr}  `}>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.grade_name}</td>

                                        <td data-label="Edit" className={`${styles.td}`} >
                                            <i className="fa-solid fa-pen-to-square" onClick={() => view_one_grade_types(item.id)}></i>
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

export default GradeTypeSystem;
