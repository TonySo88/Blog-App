import React, { useState } from 'react';
import * as yup from 'yup'


const formSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required("Password is required")
})

const LoginForm = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const validate = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        // ** In our schema, validate ^ this filed against ^ this data **
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
        setFormState({ email: "", password: ""})
    }

    return (
        <div>
            <form 
                className="App-header"
                onSubmit={handleSubmit}
            >
                <label htmlFor="email">Email: </label>
                <input 
                    id="email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                />
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    type="text"
                    value={formState.password}
                    onChange={changeHandler}
                />
                <button onClick={handleSubmit} type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;