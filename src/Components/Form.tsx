import { FC, useState } from 'react'

interface FormProps {
  title: string
  handleClick: (email: string, password: string) => void
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
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
        <button onClick={() => handleClick(email, password)}>{title}</button>
      </div>
    </div>
  )
}
