import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectorCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import Checkout from "./pages/checkout/Checkout";
import SignInUp from "./pages/signInUp/SignInUp";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import "./sass/global.scss";

class App extends React.Component {
  unSubcribeAuth = null;

  componentDidMount() {
    const { onsetCurrentUser } = this.props;
    this.unSubcribeAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          onsetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else onsetCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubcribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectorCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onsetCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
