import axiosInstance from "../../../../Utils/AxiosInstance.jsx";
import Swal from "sweetalert2";
import styles from './ManageStage.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";

function ManageStage() {

    const [Stage, setStage] = useState([]);
    const [Idd,setIdd] =useState(0);
    const [AddStageAR, setAddStageAR] = useState('');
    const [AddStageEN, setAddStageEN] = useState('');
    const [editStageData, setEditStageData] = useState({
        name_lng1: '',
        name_lng2: '',
    });
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseEdit = () => setShowEditModal(false);
    const handleShowEdit = () => setShowEditModal(true);

    // function to view ALL Stage
    const view_all_stages = async () => {
        await AxiosInstance.post('general_settings/view-all-stages/').then((res) => {
            if (res.data.success) {

                setStage(res.data.success);
                console.log("setStage", res.data.success);
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

    // function to view one Stage
    const view_one_stages = async (id) => {
        setIdd(id)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const response = await axiosInstance.post('general_settings/view-one-stage/', { id: id }, config);

            if (response.data.success) {
                setEditStageData({
                    name_lng1: response.data.success.name_lng1,
                    name_lng2: response.data.success.name_lng2,
                });
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
                text: 'An error occurred while fetching the stage data.',
                icon: 'error',
            });
        }
    };
// to call view all stage
    useEffect(() => {
        view_all_stages();

    }, []);

    // function to delete one stage
    const delete_one_stage = (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };
        axiosInstance.post('general_settings/delete-stage/', { id: id }, config)
            .then((res) => {
                if (res.data.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: res.data.success,
                        icon: 'success',
                    }).then(() => {
                        view_all_stages();
                    });
                }
                if (res.data.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: res.data.error,
                        icon: 'error',
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error!',
                    text: err,
                    icon: 'error',
                });
            });
    };

    // function to add New Stage
    const sendData = async () => {
        await AxiosInstance.post('general_settings/add-stage/', {

            name_lng1: AddStageAR,
            name_lng2: AddStageEN
        }).then((res) => {

            if (res.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_stages();
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


    // functio to update stage
    const update_one_stage = async () => {
        try {
            const {  name_lng1, name_lng2 } = editStageData;

            const response = await AxiosInstance.post('general_settings/update-stage/', {
                id: Idd,
                name_lng1: name_lng1,
                name_lng2: name_lng2
            });

            if (response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: response.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_stages();
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
            console.error("Error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while updating the stage data.',
                icon: 'error',
            });
        }
    }
    return (
        <div className='containt ' style={{ paddingTop: '80px', paddingBottom: '32px', paddingLeft: "250px" }}>

            <div className='p-4'>
                <h1>Manage Stage</h1>

                {/*this model to show view one stage and update */}
                <Modal show={showEditModal} onHide={handleCloseEdit} className='pt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Stage</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label>Stage Name (Language One)</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Stage Name in language one"
                                    value={editStageData.name_lng1}
                                    onChange={(e) => setEditStageData({ ...editStageData, name_lng1: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Englishname">
                                <Form.Label>Stage Name (Language Two)</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Stage Name in language two"
                                    value={editStageData.name_lng2}
                                    onChange={(e) => setEditStageData({ ...editStageData, name_lng2: e.target.value })}
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => update_one_stage()}
                            >
                                Update Stage
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* view all stages Table */}
                <div>
                    <div className={`${styles.box} mt-md-5 mt-4`}>
                        {/*model to add new Stage*/}
                        <div>
                            <button onClick={handleShowAdd} className={`${styles.button}`}>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </button>
                            <Modal show={showAddModal} onHide={handleCloseAdd} className='pt-5'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Stage</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="languageone">
                                            <Form.Label> Stage Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter Stage Name in  language one "
                                                onChange={(e) => {
                                                    setAddStageAR(e.target.value)
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Englishname">
                                            <Form.Label>Stage Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter Stage Name in  language two"
                                                onChange={(e) => {
                                                    setAddStageEN(e.target.value)
                                                }}
                                            />
                                        </Form.Group>
                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={(e) => {
                                                sendData();
                                            }}
                                        >
                                            Add Stage
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div className="d-flex justify-content-center align-content-center  w-100">

                            <table className="table table-bordered mt-3   text-center">
                                <thead>
                                <tr>
                                    <th className={`${styles.th} `} scope="col"> Stage Name lang1</th>
                                    <th className={`${styles.th} `} scope="col"> Stage Name lang2</th>
                                    <th className={`${styles.th} `} scope="col">Delete</th>
                                    <th className={`${styles.th} `} scope="col">Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Stage.map((item, index) => (
                                    <tr key={index} className={`${styles.tr}  `}>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.name_lng1}</td>
                                        <td data-label="ENname" className={`${styles.td} `}>{item.name_lng2}</td>
                                        <td data-label="Delet" className={`${styles.td} `}>
                                            <i className="fa-solid fa-trash" style={{ "color": "#f50000" }}
                                               onClick={() => delete_one_stage(item.id)}></i>
                                        </td>
                                        <td data-label="Edit" className={`${styles.td}`} >
                                            <i className="fa-solid fa-pen-to-square" onClick={() => view_one_stages(item.id)}></i>
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

export default ManageStage;
