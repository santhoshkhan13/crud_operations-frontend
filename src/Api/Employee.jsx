import API from "./Api";
import { addEmployeeEndpoint, deleteEmployeeEndpoint, updateEmployeeEndpoint, viewIndiEmployeeEndpoint, viewMyEmployeeEndpoint } from "./Endpoints";

export const addEmployeeApi = (data) => {
    return API.post(`${addEmployeeEndpoint}`, data)
}

export const viewMyEmployeeApi = (adminId) => {
    return API.get(`${viewMyEmployeeEndpoint}/${adminId}`)
}

export const viewIndiEmployeeApi = (userId) => {
    return API.get(`${viewIndiEmployeeEndpoint}/${userId}`)
}

export const updateEmployeeApi = (userId, data) => {
    return API.post(`${updateEmployeeEndpoint}/${userId}`, data)
}

export const deleteEmployeeApi = (userId) => {
    return API.delete(`${deleteEmployeeEndpoint}/${userId}`)
}

