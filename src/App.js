import React from 'react';
import './App.css';
import { auth } from './firebase/firebase.utils'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

 class App extends React.Component {
   constructor(){
     super()
     this.state = {
       currentUser: null

     }
   }

   unsubscriberFromAuth = null

   componentDidMount() {
    this.unsubscriberFromAuth =  auth.onAuthStateChanged(user => {
       this.setState({ currentUser: user })
       console.log(user);
     })
   }

   componentWillUnmount() {
     this.unsubscriberFromAuth()
   }


   render(){
     return(
       <div >
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />  
          </Switch>       
      </div>
     )
   }
 }

export default App;
