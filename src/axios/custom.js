import axios from "axios";

const authFetch = axios.create({
    baseURL : 'https://course-api.com/',
    headers: {
        Accept: 'applcation/json'
    }
}
) 

export default authFetch