import { Login } from '../Components/Login'
import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {

  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Alredy have an account?: <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}
