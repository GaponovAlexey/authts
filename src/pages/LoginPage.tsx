import { Login } from 'Components/Login'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const location = useLocation()
  // const navigate = useNavigate()

  const fromPage = location.state?.from?.pathname || '/'
  return (
    <div>
      <h1>Login</h1>
      <Login />
      {fromPage}
      <p>
        Alredy have an account?: <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}
