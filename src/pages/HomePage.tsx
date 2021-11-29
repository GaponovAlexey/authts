import { useAuth } from 'hook/use-auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from 'store/userSlice'
import { LoginPage } from './LoginPage'

export const HomePage = () => {
  const { isAuth, email, id, token } = useAuth()
  const dispatch = useDispatch()
  return (
    <div>
      {!isAuth ? (
        <div>
          <LoginPage />
        </div>
      ) : (
        <div>
          <h1>home</h1>
          <Link to='/create'>
            <button>create content</button>
          </Link>
          <div>
          {email}
            <h2>razlogin</h2>
            <button onClick={() => dispatch(removeUser())}>relog</button>
          </div>
        </div>
      )}
    </div>
  )
}
