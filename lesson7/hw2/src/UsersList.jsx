import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
    console.log(props);
  }

  prevValue = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };
  nextValue = () => {
    if (this.state.currentPage <= 2) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    } else {
      return;
    }
  };
  render() {
    console.log(this.props.users);
    usersList = this.props.users;
    let usersList;

    return (
      <div>
        <Pagination
          goPrev={this.prevValue}
          goNext={this.nextValue}
          currentPage={this.state.currentPage}
          totalItems={this.state.itemsPerPage}
        />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
