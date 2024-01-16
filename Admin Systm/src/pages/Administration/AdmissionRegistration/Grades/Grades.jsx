import Swal from "sweetalert2";
import styles from '../ManageStage/ManageStage.module.css';
import  { useEffect, useState } from "react";
import AxiosInstance from "../../../../Utils/AxiosInstance.jsx";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axiosInstance from "../../../../Utils/AxiosInstance.jsx";
function Grades() {

    const GradeOrder = Array.from({ length: 20 }, (_, index) => index + 1)
    const [Stage, setStage] = useState([]);
    const [grade_name_lng1, setgrade_name_lng1] = useState('');
    const [grade_name_lng2, setgrade_name_lng2] = useState('');
    const [code, setcode] = useState('');
    const [gradingTypes, setGradingTypes] = useState([]);
    const [grading_type_id, setgrading_type_id] = useState('');
    const [acadmicyears, setacadmicyears] = useState([]);
    const [programme_id, setprogramme_id] = useState('');
    const [programmes, setprogrammes] = useState([]);
    const [acadmic_year_id, setacadmic_year_id] = useState('');
    const [grade_order, setgrade_order] = useState('');
    const [stage_id, setstage_id] = useState('');
    const [stages, setstages] = useState([]);
    const [name, setname] = useState('');
    const [Idd,setIdd] =useState(0);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAdd = () => setShowAddModal(false);
    const handleShowAdd = () => setShowAddModal(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEdit = () => setShowEditModal(false);
    const handleShowEdit = () => setShowEditModal(true);



    // function to view ALL Grades
    const view_all_Grades = async () => {
        await AxiosInstance.post('general_settings/view-all-grades/').then((res) => {
            if (res.data.success) {
                setStage(res.data.success);


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
        view_all_Grades()

    }, []);

    // function to add New Stage
    const add_New_Stage = async () => {


        await AxiosInstance.post('/general_settings/add-grade/', {

            grade_name_lng1: grade_name_lng1,
            grade_name_lng2: grade_name_lng2,
            code:code,
            grading_type_id:grading_type_id,
            grade_order:grade_order,
            stage_id: stage_id,
            name:name,
            acadmic_year_id:acadmic_year_id,
            programme_id:programme_id,
        }).then((res) => {

            if (res.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: res.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_Grades();
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

    useEffect(() => {
        // Fetch grading types
        AxiosInstance.post('/general_settings/view-all-grade-types/')
            .then((res) => {


                if (res.data.success) {
                    setGradingTypes(res.data.success);
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

        // Fetch stages id
        AxiosInstance.post('general_settings/view-all-stages/')
            .then((res) => {


                if (res.data.success) {
                    setstages(res.data.success);
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
                    setacadmicyears(res.data.success);
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


    //function to View one  Grade

    const view_one_Grade = async (id) => {
        setIdd(id);
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            };
            const response = await axiosInstance.post('general_settings/view-one-grade/', { id: id }, config);

            if (response.data.success) {
                const grade = response.data.success;
                console.log("view_one_Grade", response.data.success)
                setgrade_name_lng1(grade.grade_name_lng1);
                setgrade_name_lng2(grade.grade_name_lng2);
                setcode(grade.code);
                setgrading_type_id(grade.grading_type_id);
                setgrade_order(grade.grade_order);
                setstage_id(grade.stage_id);
                setname(grade.name);

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


    // Function to update grade
    const update_one_Grade = async () => {
        try {
            const response = await AxiosInstance.post('general_settings/update-grade/', {
                id: Idd,
                grade_name_lng1: grade_name_lng1,
                grade_name_lng2: grade_name_lng2,
                code: code,
                grading_type_id: grading_type_id,
                grade_order: grade_order,
                stage_id: stage_id,

            });

            if (response.data.success) {
                console.log("response.data.success", response.data.success)
                Swal.fire({
                    title: 'Success!',
                    text: response.data.success,
                    icon: 'success',
                }).then(() => {
                    view_all_Grades();
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
                <h1>Grades</h1>

                {/* Modal to show view one Grade and update */}
                <Modal show={showEditModal} onHide={handleCloseEdit} className='pt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Grade</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="languageone">
                                <Form.Label>Grade Name (Language One)</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Grade Name in language one"
                                    value={grade_name_lng1}
                                    onChange={(e) => setgrade_name_lng1(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="languagetwo">
                                <Form.Label>Grade Name (Language Two)</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Grade Name in language Two"
                                    value={grade_name_lng2}
                                    onChange={(e) => setgrade_name_lng2(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="code">
                                <Form.Label>Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Code"
                                    value={code}
                                    onChange={(e) => setcode(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="grading_type_id">
                                <Form.Label>Grading Type</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={grading_type_id}
                                    onChange={(e) => setgrading_type_id(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Grading Type</option>
                                    {gradingTypes.map((type) => (
                                        <option key={type.id} value={type.id}>{type.grade_name}</option>
                                    ))}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="grade_order">
                                <Form.Label>Grade Order</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={grade_order}
                                    onChange={(e) => setgrade_order(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Grade Order</option>
                                    {GradeOrder.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="stage_id">
                                <Form.Label>Stage</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={stage_id}
                                    onChange={(e) => setstage_id(e.target.value)}
                                >
                                    <option value={0} disabled selected>Choose Stage</option>
                                    {stages.map((type) => (
                                        <option key={type.id} value={type.id}>{type.name_lng1}</option>
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


                        {/*model to add new Grade */}
                        <div>
                            <button onClick={handleShowAdd} className={`${styles.button}`}>
                                <i className="fa-solid fa-circle-plus fa-2xl"></i>
                            </button>
                            <Modal show={showAddModal} onHide={handleCloseAdd} className='pt-5'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Grades</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="languageone">
                                            <Form.Label> Grades Name lang1</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter Grade Name in  language one "
                                                onChange={(e) => {
                                                    setgrade_name_lng1(e.target.value)
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Englishname">
                                            <Form.Label>Grades Name lang2</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter Grade Name in  language two"
                                                onChange={(e) => {
                                                    setgrade_name_lng2(e.target.value)
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Englishname">
                                            <Form.Label>Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter Code "
                                                onChange={(e) => {
                                                    setcode(e.target.value)
                                                }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="grading_type_id">
                                            <Form.Label>Grade Order</Form.Label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setgrade_order(e.target.value);
                                                }}
                                            >
                                                <option value={0} selected disabled>Choose Grade Order</option>

                                                {GradeOrder.map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>

                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="grading_type_id">
                                            <Form.Label>Grading Type</Form.Label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setgrading_type_id(e.target.value);
                                                }}
                                            >
                                                <option value={0} selected disabled>Choose Grading Type</option>
                                                {gradingTypes.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.grade_name}</option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="grading_type_id">
                                            <Form.Label>Stage </Form.Label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setstage_id(e.target.value);
                                                }}
                                            >
                                                <option value={0} selected disabled>Choose Stage </option>
                                                {stages.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name_lng1}</option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                            <h4>Initial Batch</h4>
                                        <hr/>

                                        <Form.Group className="mb-3" controlId="Englishname">
                                            <Form.Label>name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=" Enter name "
                                                onChange={(e) => {
                                                    setname(e.target.value)
                                                }}
                                            />
                                        </Form.Group>







                                        <Form.Group className="mb-3" controlId="acadmic_year_id">
                                            <Form.Label>Academic Years</Form.Label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setacadmic_year_id(e.target.value);
                                                }}
                                            >
                                                <option value={0} disabled selected>Choose</option>
                                                {acadmicyears.map((year) => (
                                                    <option key={year.acadmic_year_id} value={year.acadmic_year_id}>
                                                        {year.year_name_g} - {year.semester_name} semester
                                                    </option>
                                                ))}
                                            </select>
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="acadmic_year_id">
                                            <Form.Label>Programmes</Form.Label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={(e) => {
                                                    setprogramme_id(e.target.value);
                                                }}
                                            >
                                                <option value={0} disabled selected>Choose Programmes</option>
                                                {programmes.map((year) => (
                                                    <option key={year.id} value={year.id}>
                                                        {year.programme_name_lng1}
                                                    </option>
                                                ))}
                                            </select>
                                        </Form.Group>






                                        <Button
                                            variant="primary"
                                            type="button"
                                            onClick={(e) => {
                                                add_New_Stage();
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
                                    <th className={`${styles.th} `} scope="col"> Grade Name lang1</th>
                                    <th className={`${styles.th} `} scope="col"> Grade Name lang2</th>
                                    <th className={`${styles.th} `} scope="col">Code</th>
                                    <th className={`${styles.th} `} scope="col">Edit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Stage.map((item, index) => (
                                    <tr key={index} className={`${styles.tr}  `}>
                                        <td data-label="ARname" className={`${styles.td} `}>{item.grade_name_lng1}</td>
                                        <td data-label="ENname" className={`${styles.td} `}>{item.grade_name_lng2}</td>
                                        <td data-label="ENname" className={`${styles.td} `}>{item.code}</td>
                                        <td data-label="Edit" className={`${styles.td}`}>
                                            <i className="fa-solid fa-pen-to-square" onClick={()=>view_one_Grade(item.id)}></i>
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
