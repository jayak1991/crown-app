import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { setCurrentUser } from './redux/user/user.actions'

 class App extends React.Component {

   unsubscriberFromAuth = null


   componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

          console.log(this.state);
        });
      }

      this.props.setCurrentUser( userAuth );
    });
  }

   componentWillUnmount() {
     this.unsubscriberFromAuth()
   }


   render(){
     return(
       <div >
          <Header  />
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route  path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />  
          </Switch>       
      </div>
     )
   }
 }

 const mapStateToProps = ({user}) => ({
   currentUser: user.currentUser
 })

 const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);