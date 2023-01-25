import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Shipping from './containers/Shipping';
import Signin from './containers/Signin';
import SignUp from './containers/Signup';
import ThankYou from './containers/ThankYou';
import { signIn, signUp } from './reducks/users/operations';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element ={<Home />}/>
                <Route path='/signup'  element= {<SignUp />}/>
                <Route path='/signin' element = {<Signin />}/>
                <Route path='/cart' element = {<Cart />}/>
                <Route path='/shipping' element = {<Shipping />}/>
                <Route path='/thankyou' element = {<ThankYou />}/>
            </Routes>
        </>
    );
};
export default Router;
