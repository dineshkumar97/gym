const config = {
    api: 'http://localhost:3000',
    options: {
        headers: { 'content-type': 'application/json' },
    },
};

const getEmployeeDetail= `${config.api}${'/profile'}`;
// const getEmployeeDetails = (endpoint) => {
//     return fetch(`${config.api}${endpoint}`, null)
//         .then((response) => handleResponse(response))
//         .then((response) => response)
//         .catch((error) => {
//             console.error(error);
//             throw Error(error);
//         });
// };


// const updateEmployeeDetails = (endpoint, data) => {
//     return fetch(`${config.api}${endpoint}`, {
//       method: 'post',
//       body: data ? JSON.stringify(data) : null,
//       ...config.options,
//     })
//       .then((response) => handleResponse(response))
//       .then((response) => response)
//       .catch((error) => {
//         console.error(error);
//         throw Error(error);
//       });
//   };

// const handleResponse = (response) => {
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw Error(response.json() | 'error');
//     }
// };

const exportedObject = {
    // getEmployeeDetails,
    // updateEmployeeDetails,
    getEmployeeDetail
};

export default exportedObject;