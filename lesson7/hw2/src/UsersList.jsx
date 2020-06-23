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
    console.log(this.props.users);
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      itemsPerPage: this.state.itemsPerPage,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      itemsPerPage: this.state.itemsPerPage,
    });
  };

  render() {
    const el = this.props.users;
    console.log(el);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
        <ul className="users">
          {this.props.users
            .slice(this.state.currentPage, this.state.itemsPerPage)
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
