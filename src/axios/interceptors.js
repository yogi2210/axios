import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://course-api.com'
    
})

authFetch.interceptors.request.use((req)=>{
    req.headers.common['Accept'] = 'application/json'
    console.log("req sent")
    return req
}, (error)=>{
    return Promise.reject(error)
})

authFetch.interceptors.response.use((res)=>{
    console.log('got res')
    return res
}, (error)=>{
    console.log(error.response)
})

export default authFetch