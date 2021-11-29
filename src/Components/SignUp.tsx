import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/userSlice'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Form } from './Form'
import { useLocation, useNavigate } from 'react-router'
// import { us } from 'react-router-dom'



export const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
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
