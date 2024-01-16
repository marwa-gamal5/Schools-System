import axiosInstance from "../../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import styles from '../../AdmissionRegistration/ManageStage/ManageStage.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import  { useEffect, useState } from "react";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";

function Programmes() {

    const [Programmes,setProgrammes]= useState([]);
    const [programme_name_lng1, setprogramme_name_lng1] = useState('');
    const [programme_name_lng2, setprogramme_name_lng2] = useState('');
    const [Idd,setIdd] =useState(0);
    const [GradeName, setGradeName] = useState('');
    const [AddGradeName, setAddGradeName] = useState('');

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseEdit = () => setShowEditModal(false);
    const handleShowEdit = () => setShowEditModal(true);

    // function to view All Programmes
    const view_all_Programmes = async () => {
        await AxiosInstance.post('/general_settings/view-all-programmes/').then((res) => {
            if (res.data.success) {
console.log("view All Programmes",res.data.success)
                setProgrammes(res.data.success);

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

    // function to view one Programmes
    const view_one_Programmes = async (id) => {
        setIdd(id)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const response = await axiosInstance.post('/general_settings/view-one-programme/', { id: id }, config);

            if (response.data.success) {
                console.log("view_one_Programmes",response.data.success)
                setprogramme_name_lng1(response.data.success.programme_name_lng1);
                setprogramme_name_lng2(response.data.success.programme_name_lng2);
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
                text: 'An error occurred while fetching the Programmes data.',
                icon: 'error',
            });
        }
    };
// to call view all Programmes
    useEffect(() => {
        view_all_Programmes();

    }, []);




    // function to add Programmes
    const add_Programmes = async () => {
        await AxiosInstance.post('/general_settings/add-programme/', {

            programme_name_lng1: programme_name_lng1,
            programme_name_lng2:programme_name_lng2




        }).then((res) => {

            if (res.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_Programmes();
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


    // functio to update Programmes
    const update_one_Programmes = async () => {
        try {


            const response = await AxiosInstance.post('/general_settings/update-programme/', {
                id: Idd,
                programme_name_lng1: programme_name_lng1,
                programme_name_lng2:programme_name_lng2

            });

            if (response.data.success) {
                console.log("update",response.data.success)
                Swal.fire({
                    title: 'Success!',
                    text: response.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_Programmes();
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
                text: 'An error occurred while updating the Programmes data.',
                icon: 'error',
            });
        }
    }
    return (
        <div className='containt ' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "250px" }}>

            <div className='p-4'>
                <h1> Programmes </h1>

                {/*this Modal to show view one Programmes System and update */}
                <Modal show={showEditModal} onHide={handleCloseEdit} className='pt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Programmes  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label>Programme Name lng1</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Programme Name lng1"
                                    value={programme_name_lng1}
                                    onChange={(e) => setprogramme_name_lng1(e.target.value)}

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label>Programme Name lng2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Programme Name lng2"
                                    value={programme_name_lng2}
                                    onChange={(e) => setprogramme_name_lng2(e.target.value)}

                                />
                            </Form.Group>



                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => update_one_Programmes()}
                            >
                                Update Programmes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* view all Programmes  Table */}
                <div>
                    <div className={`${styles.box} mt-md-5 mt-4`}>
                        {/*Modal to add new Programmes */}
                        <div>
                            <button onClick={handleShowAdd} className={`${styles.button}`}>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </button>
                            <Modal show={showAddModal} onHide={handleCloseAdd} className='pt-5'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Programmes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="ProgrammeNamelng1">
                                            <Form.Label> Programme Name lng1</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Programme Name lng1 "
                                                onChange={(e) => {
                                                    setprogramme_name_lng1(e.target.value)
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="ProgrammeNamelng2">
                                            <Form.Label> Programme Name lng2</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Programme Name lng2 "
                                                onChange={(e) => {
                                                    setprogramme_name_lng2(e.target.value)
                                                }}
                                            />
                                        </Form.Group>

                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={(e) => {
                                                add_Programmes();
                                            }}
                                        >
                                            Add Programmes
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="d-flex justify-content-center align-content-center  w-100">

                            <table className="table table-bordered mt-3   text-center">
                                <thead>
                                <tr>
                                    <th className={`${styles.th} `} scope="col"> Programme Name lng1</th>
                                    <th className={`${styles.th} `} scope="col"> Programme Name lng2</th>
                                    <th className={`${styles.th} `} scope="col">Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Programmes.map((item, index) => (
                                    <tr key={index} className={`${styles.tr}  `}>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.programme_name_lng1}</td>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.programme_name_lng2}</td>
                                        <td data-label="Edit" className={`${styles.td}`}>
                                            <i className="fa-solid fa-pen-to-square"
                                               onClick={() => view_one_Programmes(item.id)}></i>
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

export default Programmes;
