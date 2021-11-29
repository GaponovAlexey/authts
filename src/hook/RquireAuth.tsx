import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './use-auth'

export const RquireAuth = ({children}) => {

  const {isAuth} = useAuth()
  
  if (!isAuth) {
    return <Navigate to='/login'/>
  }
  return children
}
                  
