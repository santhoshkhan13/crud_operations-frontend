export const saveLoginInfo = (data) => {
    localStorage.setItem("adminId",data)
}

export const getAdminId = () => {
   return localStorage.getItem("adminId")
}