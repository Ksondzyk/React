import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 3,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 3,
    });
  };

  render() {
    const usersArr = this.props.users.slice(
      this.state.currentPage,
      this.state.currentPage + this.state.itemsPerPage
    );
    console.log(usersArr);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {usersArr.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
