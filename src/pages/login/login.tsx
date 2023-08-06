import { FormEvent, useState } from 'react'

interface FormData {
  username: string
  password: string
}
export const Login = () => {
  // const useAuth = useAuth()
  const [data, setData] = useState<FormData>({
    username: '',
    password: '',
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button type='submit'>Login</button>
    </form>
  )
}
