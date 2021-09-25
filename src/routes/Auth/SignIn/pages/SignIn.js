import React, { useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { signInLocalAction } from '../../../../redux/auth/signIn/actions'

const SignIn = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signInLocalAction
            (
                loginForm.email, loginForm.password,
                () => {
                    history.push('/dashboard')
                },
                (error) => {
                    alert(error)
                },
            ))
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setLoginForm({ ...loginForm, [name]: value })
    }

    return (

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name="email" value={loginForm.email} onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="Password" name="password" value={loginForm.password} onChange={(e) => handleChange(e)} />

            <button type="submit">Login</button>

            <div>
                <Link to="/signup"> Don't have an account? </Link>
            </div>
        </form>
    )
}



export default SignIn