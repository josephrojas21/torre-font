import axios from "axios";
import { loadStorage } from './storage'

// axios.defaults.timeout = 1000;
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:5000';
const token = loadStorage('totk')
if (token) {
  axios.defaults.headers.common['authToken'] = `${token}`
}
export default axios
