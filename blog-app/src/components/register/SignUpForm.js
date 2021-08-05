import React, { useState } from 'react';
import * as yup from 'yup'


const formSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email"),
    blogTitle: yup.string().required("What would you like to call your blog?"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Password is required")
})

const SignUpForm = () => {
    const [formState, setFormState] = useState({
        email: "",
        blogTitle: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        blogTitle: "",
        password: "",
        confirmPassword: ""
    })

    const validate = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(valid => {

            })
            .catch(err => {
                console.log(err.errors)
            })
    }

const changeHandler = e => {
        validate(e)
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setFormState({ email: "", blogTitle: "", password: "", confirmPassword: ""})
    }

    return (
        <div>
            <form className="App-header">
                <label htmlFor="email">Email: </label>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                />
                <lable htmlFor="blogTitle">Blog title: </lable>
                <input 
                    id="blogTitle"
                    type="text"
                    name="blogTitle"
                    value={formState.blogTitle}
                    onChange={changeHandler}
                />
                <label htmlFor="password">Password: </label>
                <input 
                    id="password"
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={changeHandler}
                />
                <label htmlFor="confirmPassword">Confirm password: </label>
                <input 
                    id="confirmPassword"
                    type="text"
                    name="confirmPassword"
                    value={formState.confirmPassword}
                    onChange={changeHandler}
                />
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;