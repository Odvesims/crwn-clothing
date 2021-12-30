import React from 'react';

import SignIn from '../../components/sign_in/sign_in.components';
import SignUp from '../../components/sign_up_component/sign_up.components';

import './sign_in_and_sign_up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
