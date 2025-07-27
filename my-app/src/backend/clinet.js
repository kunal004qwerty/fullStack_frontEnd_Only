import api from 'axios'
import { BASE_URL } from './endpoints'


const createParamsStr = function (params = {}) {

}


// const setHeader = function (contentType = 'application/json') {

//     console.log("running");


//     if (typeof window !== 'undefined') { authToken = localStorage.getItem("authToken") }
//     let authToken = localStorage.getItem("authToken")
//     api.defaults.headers.common['Authorization'] = `Token ${authToken}`
//     console.log("authToken", authToken);

//     // if (authToken) {
//     //     console.log("authToken", authToken);

//     //     api.defaults.headers.common['Authorization'] = `Token ${authToken}`
//     // }
//     if (contentType) {
//         api.defaults.headers.common['Content-Type'] = contentType
//     }
// }

const setHeader = async function () {
    let authToken;

    // console.log("inside setHeader function");

    // console.log(typeof window !== 'undefined');


    if (typeof window !== 'undefined') {
        authToken = localStorage.getItem("authToken");
        console.log("authToken", authToken);

    }

    if (authToken) {
        console.log("Setting Authorization header");
        api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    } else {
        console.warn("No authToken found in localStorage");
    }
};



export const GetData = async function (url, tokenReqd = false, params = {}) {
    try {
        if (tokenReqd) setHeader()

        const paramsStr = createParamsStr()
        // const api = BASE_URL + url + paramsStr
        const api_endpoint = BASE_URL + url
        // console.log(api_endpoint);
        

        const data = await api.get(api_endpoint)

        return data


    } catch (error) {
        console.log(error);

    }
}

export const PostData = async function (url, tokenReqd = false, bodyObj) {
    try {
        // console.log("tokenReqd", tokenReqd);

        if (tokenReqd) { setHeader() }


        const paramsStr = createParamsStr()
        // const api = BASE_URL + url + paramsStr
        const api_endpoint = BASE_URL + url
        // console.log(api_endpoint, bodyObj);


        const data = await api.post(api_endpoint, bodyObj)

        // console.log("data", data);


        return data


    } catch (error) {
        console.log(error);

    }
}

export const PutData = async function (url, tokenReqd = false, bodyObj) {
    try {
        if (tokenReqd) setHeader()

        const paramsStr = createParamsStr()
        // const api = BASE_URL + url + paramsStr
        const api_endpoint = BASE_URL + url

        const data = await api.put(api_endpoint, bodyObj)

        return data


    } catch (error) {
        console.log(error);

    }
}

export const DeleteData = async function (url, tokenReqd = false, bodyObj) {
    try {
        if (tokenReqd) setHeader()

        const paramsStr = createParamsStr()
        // const api = BASE_URL + url + paramsStr
        const api_endpoint = BASE_URL + url

        const data = await api.delete(api_endpoint)

        return data


    } catch (error) {
        console.log(error);

    }
}

