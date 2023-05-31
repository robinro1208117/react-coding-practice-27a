// Write your JS code he
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [inputVal, setInputVal] = useState({
    name: '',
    password: '',
  })
  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const {name, password} = inputVal

    if (name.trim().length === 0 || password.trim().length === 0) {
      setErrorMsg('*Username and Password are required')
      return
    }

    const userName = {
      username: name,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userName),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    if (response.ok) {
      const result = await response.json()
      console.log(result)
      history.replace('/')
    } else {
      setErrorMsg("*Username and Password didn't match")
    }
  }

  return (
    <div className="login">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        alt="website login"
        className="img-1"
      />
      <form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo"
          alt="website logo"
        />
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={e => setInputVal(prev => ({...prev, name: e.target.value}))}
          value={inputVal.name}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={e =>
            setInputVal(prev => ({...prev, password: e.target.value}))
          }
          value={inputVal.password}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
