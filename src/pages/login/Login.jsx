import React from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {
  return (
    <div className="login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form action="" className="login-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder='user name' className="form-input" required />
            <input type="email" placeholder='Email Address' className="form-input" required/>
            <input type="password" placeholder='password' className="form-input" required/>
            <button type='submit'>Sign up</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>Agree to the terms of a use & privacy policy.</p>
            </div>
            <div className="login-forgot">
                <p className="login-toggle">Already have a account <span>click here</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login