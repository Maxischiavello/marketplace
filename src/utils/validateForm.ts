import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("Username required") ,
    password: yup.string().trim().required("Password required") 
})