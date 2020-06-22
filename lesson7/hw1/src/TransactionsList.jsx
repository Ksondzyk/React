import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const transition = this.props.transactions;
    console.log(transition);
    return (
      <ul className="transactions">
        {transition.map((user) => (
          <Transaction key={user.id} {...user} />
        ))}
      </ul>
    );
  }
}
export default TransactionsList;
