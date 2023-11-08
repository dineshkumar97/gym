import axios from 'axios'
const config = {
    api: 'http://localhost:3000',
    options: {
        headers: { 'content-type': 'application/json' },
    },
};


const createEmployee = (data) => axios.post(`${config.api}${'/profile'}`, data);

const employeeObject = {
    createEmployee,
    config
};


export default employeeObject;