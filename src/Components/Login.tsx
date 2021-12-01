import React from 'react'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { useNavigate } from 'react-router'
import { setUser } from '../store/userSlice'

export const Login = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handelLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }))
          navigate('/')
      })
      .catch(() => alert('Invalid user'))
  }
  return (
    <div>
      <Form title='sign in' handleClick={handelLogin} />
    </div>
  )
}
