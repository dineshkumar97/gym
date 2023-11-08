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
  const [employeeFormValue, setEmployeeForm] = useState({
    username: '',
    mobile: '',
    email: ''
  });
  const [errors, setErrors] = useState({});


  useEffect(() => {
    getApiData();
  }, []);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeForm((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
    
  };



  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!employeeFormValue.username) {
      newErrors.username = "UserName is required";
      isValid = false;
    } else if (employeeFormValue.username.length < 3) {
      newErrors.username = 'UserName should be greater than 3 characters!';
      isValid = false;
    }
    if (!employeeFormValue.mobile) {
      newErrors.mobile = "Mobile no. is required";
      isValid = false;
    } else if (employeeFormValue.mobile.length < 3) {
      newErrors.mobile = 'Mobile no. should be greater than 4 ';
      isValid = false;
    }
    if (!employeeFormValue.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!regex.test(employeeFormValue.email)) {
      newErrors.email = 'Please enter vaild email';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employeeFormValue);
    if (validateForm()) {
      Service.createEmployee(employeeFormValue)
        .then((response) => {
          if (response.status === 201) {
            setShow(false)
            axios.get(`${Service.config.api}${'/profile'}`)
              .then((response) => {
                setemployees(response.data);
                Toaster.toastSuccess('Employee create successfully');
                setEmployeeForm({
                  username: '',
                  mobile: '',
                  email: ''
                });
              })
              .catch((error) => {
                Toaster.toastError(error);
              });
          }
        })
    } else {
    }

  };
  const getApiData = () => {
    axios.get(`${Service.config.api}${'/profile'}`)
      .then((response) => {
        setemployees(response.data);
      })
      .catch((error) => console.log(error));
  };


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
                    value={employeeFormValue.username}
                    onChange={handleInputChange} />
                  <p className={`${styles.form_error}`}>{errors.username}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={employeeFormValue.email}
                    onChange={handleInputChange} />
                  <p className={`${styles.form_error}`}>{errors.email}</p>

                </div>
                <div className="form-group">
                  <label htmlFor="description">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={employeeFormValue.mobile}
                    onChange={handleInputChange} />
                  <p className={`${styles.form_error}`}>{errors.mobile}</p>

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