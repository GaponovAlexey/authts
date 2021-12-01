import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Form } from './Form'
import { useLocation, useNavigate } from 'react-router'
import { setUser } from '../store/userSlice'
import { useAppDispatch } from '../hook/redux-hooks'
// import { us } from 'react-router-dom'



export const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }))
        navigate('/')
      })
      .catch(console.error)
  }

  return (
    <div>
      <Form title='Register' handleClick={handleRegister} />
    </div>
  )
}
