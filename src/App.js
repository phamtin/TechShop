import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import { selectorUserItems } from "./redux/user/user.selector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import SignInUp from "./pages/signInUp/SignInUp";
import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop";
import "./sass/global.scss";
import Checkout from "./pages/checkout/Checkout";

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
      }
      onsetCurrentUser(user);
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectorUserItems
});

const mapDispatchToProps = dispatch => {
  return {
    onsetCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
