import React, { Component } from 'react';

import FormInput from '../form_input/form_input.component';
import CustomButton from '../custom_button/custom_button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign_in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your username and password</span>
        <form>
          <FormInput
            name="email"
            value={email}
            required
            type="email"
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            value={password}
            required
            type="password"
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" onClick={this.handleSubmit}>
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
