import React, { useState } from 'react'

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <div>
        <button onClick={() =>handleClick(email, password)}>{title}</button>
      </div>
    </div>
  )
}
