import React, { useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { signUpLocalAction } from '../../../../redux/auth/signUp/actions'

const SignUp = () => {

    const dispatch = useDispatch() 

    const history = useHistory()

    const [registerForm, setRegisterForm] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUpLocalAction
            (
                registerForm,
                () => {
                    history.push('/')
                },
                (error) => {
                    alert(error)
                },
            ))
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setRegisterForm({ ...registerForm, [name]: value })
    }

    return (

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input placeholder="First Name" name="firstName" value={registerForm.firstName} onChange={(e) => handleChange(e)} />
            <input placeholder="Last Name" name="lastName" value={registerForm.lastName} onChange={(e) => handleChange(e)} />
            <input type="email" placeholder="Email" name="email" value={registerForm.email} onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="Password" name="password" value={registerForm.password} onChange={(e) => handleChange(e)} />

            <button type="submit">Register</button>

            <div>
                <Link to="/"> Have an account? </Link>
            </div>
        </form>
    )
}

export default SignUp