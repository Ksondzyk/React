import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    console.log(this.state.value);
  }

  getInputValue = (value) => {
    this.setState({
      filterText: value,
    });
    console.log(this.state.filterText);
  };

  render() {
    let result;
    if (this.state.filterText === undefined) {
      result = this.props.users;
    } else {
      result = this.props.users.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filterText.toLowerCase());
      });
    }
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
