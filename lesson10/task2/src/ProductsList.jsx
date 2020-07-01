import React, { Component } from "react";

class ProductsList extends Component {
  state = {
    cartItems: [
      {
        id: "1",
        name: "iPhone 11",
        price: 999,
      },
      {
        id: "2",
        name: "iPad Pro",
        price: 799,
      },
    ],
  };

  render() {
    const total = this.state.cartItems.reduce((acc, item) => acc + item.price);
  }
}
