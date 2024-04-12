import API from "./Api";
import { signinEndpoints, signupEndpoints } from "./Endpoints";

export const signupApi = (data) => {
    return API.post(`${signupEndpoints}`, data)
}

export const signInApi = (data) => {
    return API.post(`${signinEndpoints}`, data)
}