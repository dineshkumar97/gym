import styles from "./employee.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Employee = () => {
  // create employee start
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [closeModal, setCloseModal] = useState(false);


  const handleSave = () => {
    setIsSaving(true);
    axios.post('http://localhost:3000/profile', {
      name: name,
      email: email,
      mobile: mobile,
    })
      .then(function (response) {
        setIsSaving(false);
        setName('')
        setemail('')
        setmobile('')
      })
      .catch(function (error) {
        setIsSaving(false)
      });

    setCloseModal(true);
    getApiData();

  }
  // create employee end


  // get employee

  const [employeeslist, setemployees] = useState();

  useEffect(() => {
    getApiData();
  },[]);

  const getApiData =  () => {
    fetch(' http://localhost:3000/profile')
    .then(response => response.json())
    .then(json => {
      setemployees(json);
      console.log(json)
    })
    .catch(error => console.error(error));
  };

  if (!employeeslist) return (<div>No Record Found</div>)
  return (
    <div className={`${styles.m_t_100}`}
      data-aos="zoom-out-down">
      <div className={`${styles.padding_20px}`} >
        <div>
          <h1>Employee</h1>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Employee
          </button>

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
              {employeeslist.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.mobile}</td>
                  <td>{emp.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {!closeModal &&
          <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Create Employee</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={(event) => { setName(event.target.value) }}
                        value={name}
                        type="text"
                        className="form-control"
                        id="name"
                        name="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Email</label>
                      <input
                        value={email}
                        onChange={(event) => { setemail(event.target.value) }}
                        type="text"
                        className="form-control"
                        id="email"
                        name="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">mobile</label>
                      <input
                        onChange={(event) => { setmobile(event.target.value) }}
                        value={mobile}
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile" />
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button className="btn btn-primary" disabled={isSaving}
                        onClick={handleSave}
                        type="button">Create</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Employee;