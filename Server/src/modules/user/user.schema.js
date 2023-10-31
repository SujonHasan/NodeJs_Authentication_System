const {object, string, ref} = require('yup');

const createrUserSchema = object().shape({

    firstName: string()
        .min(2, "This field must be at least 2 character")
        .max(20, "This field must be at must 20 character")
        .required("This field must be not empty"),
    lastName: string()
        .min(2, "this field must be at least 2 character")
        .max(20, "This field must be at most 20 character")
        .required('This field must be not empty'),
    email: string()
        .email("This field should be a valid email address")
        .required("This field must not be empty"),
    password: string()
        .min(8, "This password must be at least 8 character")
        .max(50, "This password must at least 50 character")
        .required("Password is required"),
    confirmPassword: string()
        .required("Confirm password must be required")
        .oneOf([ref('password'), null], 'password and confirm password must be match')
})

module.exports = {createrUserSchema};