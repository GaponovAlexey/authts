import React from 'react'
import { Route, Routes } from 'react-router'
import { CreatePost } from './pages/CreatePost'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './firebase'


function App() {
  return <div className='App'>
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/register' element={<RegisterPage />} />
  <Route path='/create' element={<CreatePost />} />
</Routes>

  </div>
}

export default App
