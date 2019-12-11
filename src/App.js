import React from "react";
import { Switch, Route } from "react-router-dom";

import "./sass/global.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/Shop";
import SignInUp from "./pages/signInUp/SignInUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unSubcribeAuth = null;

  componentDidMount() {
    this.unSubcribeAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      }
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
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={HomePage} />
          <Route path="/sign" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
