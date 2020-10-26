import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: '', password: ''})
  }

  handleChange = e => {
    const  {value, name } = e.target
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className='sign-in'>
        <h2>I already an account</h2>
        <span>Please sign in with username and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email'
           type="email" 
           handleChange={this.handleChange}
           value={this.state.email} 
           label='email'
           required />
         <FormInput name='password'
          type="password"
           handleChange={this.handleChange} 
           value={this.state.email} 
           label='password'
           required />
         <CustomButton type='submit'> Sign In </CustomButton>
        </form>
        
      </div>
    );
  }
}

export default SignIn;