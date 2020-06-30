import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      usersArr: props.users,
    };
    console.log(this.state.value);
  }

  getInputValue = (value) => {
    console.log(value);
    this.setState({
      filterText: value,
    });
    console.log(this.state.filterText);
  };

  // getInputValue = (value) => {
  //   const result = this.props.users.filter(({ name }) => {
  //     return name.includes(value);
  //   });
  //   console.log(result);
  //   return this.result;
  // };

  render() {
    const result = this.props.users.filter(({ name }) => {
      return name.includes(this.state.filterText);
    });
    console.log(result.length);
    // let res;
    // if (this.getInputValue === "undefined") {
    //   res = this.props.users;
    // } else {
    //   res = this.getInputValue();
    // }
    return (
      <div>
        <Filter
          onChange={this.getInputValue}
          filterText={this.state.filterText}
          count={result.length}
        />
        <ul className="users">
          {result.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
