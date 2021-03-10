import axios from "axios";
export default axios.create({
    baseURL:'https://lms-project-f83bd-default-rtdb.firebaseio.com/'
})