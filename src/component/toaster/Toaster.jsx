import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastDark = (data) => toast.dark(data);
const toastInfo = (data) => toast.info(data);
const toastSuccess = (data) => toast.success(data);
const toastWarn = (data) => toast.warn(data);
const toastError = (data) => toast.error(data);

const toaster = {
    toastDark,
    toastInfo,
    toastSuccess,
    toastWarn,
    toastError,
};
export default toaster;