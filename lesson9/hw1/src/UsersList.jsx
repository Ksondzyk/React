import React, { Component } from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    console.log(this.props);
  }

  handleChange = (event) => {
    this.setState({
      filterText: event.target.value.toLowerCase(),
    });
  };

  render() {
    let result;
    if (this.state.filterText === undefined) {
      result = this.props.users;
    } else {
      result = this.props.users.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filterText);
      });
    }

    console.log(result.length);
    return (
      <div>
        <Filter
          handleChange={this.handleChange}
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
