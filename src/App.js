import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign_in_and_sign_up/sign_in_and_sign_up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
