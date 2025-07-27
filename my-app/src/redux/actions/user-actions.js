import { GetData, PostData } from "@/backend/clinet"
import { API_VERSION, ENDPOINT } from "@/backend/endpoints"
import { userLogIn, userSignUp, userProfile } from "@/redux/slices/userSlice"

export const SetAuthToken = async function (token) {
    // console.log("token form setAuthToken function", token);

    if (typeof window !== 'undefined') {
        if (token) localStorage.setItem("authToken", token)
        else localStorage.clear()
    }
}

export const OnSignUp = (formData) => async (dispatch) => {
    try {
        const response = await PostData(`/api/${API_VERSION}${ENDPOINT.SIGNUP}`, false, formData)

        let res = response.data.data

        const { token } = res.user

        await SetAuthToken(token)
        // return dispatch(userSignUp(response.data))
        return dispatch(userSignUp(res.user))

    } catch (error) {
        console.error('SignUp failed', error)
    }
}

export const OnLogIn = ({ email, password }) => async (dispatch) => {
    try {
        const response = await PostData(`/api/${API_VERSION}/${ENDPOINT.LOGIN}`, { email, password })
        const { token } = response.data

        await SetAuthToken(token)
        return dispatch(userLogIn(response.data))

    } catch (error) {
        console.error('LogIn Failed', error)
    }
}

export const OnViewProfile = () => async (dispatch) => {
    try {
        const response = await GetData(`/api/${API_VERSION}${ENDPOINT.USERPROFILE}`, true)

        console.log("response.data", response.data);
        

        dispatch(userProfile(response.data))
    } catch (error) {
        console.log('Fetching Profile Failed: ', error);

    }
}