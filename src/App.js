import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectorCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./components/header/Header";
import "./sass/global.scss";
import Spinner from "./components/spinner/Spinner";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInUp = lazy(() => import("./pages/signInUp/SignInUp"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const Shop = lazy(() => import("./pages/shop/Shop"));

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
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/orders" component={Orders} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/sign"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
              }
            />
            <Route exact path="/contact" component={Contact} />
          </Suspense>
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
