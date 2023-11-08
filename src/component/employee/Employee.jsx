import styles from "./employee.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import Service from '../service/service'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import Toaster from '../toaster/Toaster'

const Employee = () => {
  const [employeeslist, setemployees] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState({
    username: '',
    email: '',
    mobile: '',
  });

  // const [validation, setValidation] = useState({
  //   username: '',
  //   email: '',
  //   mobile: '',
  // });

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios.get(`${Service.config.api}${'/profile'}`)
      .then((response) => {
        setemployees(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    Service.createEmployee(state)
      .then((response) => {
        if (response.status === 201) {
          setShow(false)
          axios.get(`${Service.config.api}${'/profile'}`)
            .then((response) => {
              setemployees(response.data);
              Toaster.toastSuccess('Employee create successfully');
            })
            .catch((error) => {
              Toaster.toastError(error);
            });
        }
      })
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let errors = validation;
  //   //first Name validation
  //   if (!state.username.trim()) {
  //     errors.username = 'First name is required';
  //   } else {
  //     errors.username = '';
  //   }
  //   // email validation
  //   const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  //   if (!state.email.trim()) {
  //     errors.email = 'Email is required';
  //   } else if (!state.email.match(emailCond)) {
  //     errors.email = 'Please ingress a valid email address';
  //   } else {
  //     errors.email = '';
  //   }
  //   return setValidation(errors);
  // };


  return (
    <div className={`${styles.m_t_100}`}
      data-aos="zoom-out-down">
      <div className={`${styles.padding_20px}`} >
        <div>
          <h1>Employee  <Button variant="primary" type="button"
            className={`${styles.float_right_} ${styles.m_t_10}`} onClick={handleShow}>
            Create Employee
          </Button></h1>

        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th >S.No</th>
                <th >Name</th>
                <th >Mobile</th>
                <th >Email</th>
              </tr>
            </thead>
            <tbody>
              {employeeslist?.map((item, index) => (
                <tr key={index}>
                  <th>{parseInt(index) + 1}</th>
                  <th>{item.username}</th>
                  <th>{item.mobile}</th>
                  <th>{item.email}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body">
              <form >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleInputChange} />
                  {/* {validation.username && <p>{validation.username}</p>} */}
                </div>
                <div className="form-group">
                  <label htmlFor="description">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange} />
                  {/* {validation.email && <p>{validation.email}</p>} */}

                </div>
                <div className="form-group">
                  <label htmlFor="description">mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={state.mobile}
                    onChange={handleInputChange} />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Employee;