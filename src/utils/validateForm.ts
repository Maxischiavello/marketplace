import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username es requerido"),
    password: yup
        .string()
        .trim()
        .required("Password es requerido")
        .min(4, "El minimo debe ser 4 caraceteres")
        .max(20, "El maximmo debe ser 20 caracteres")
})