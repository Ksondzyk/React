import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart />
          <Profile />
        </main>
      </div>
    );
  }
}
export default App;
