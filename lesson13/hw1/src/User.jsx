import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
    console.log(this.props.match.url);
    console.log(this.state.userData);
  }

  componentDidMount() {
    fetch(`https://api.github.com${this.props.match.url}`)
      .then((responce) => {
        if (!responce.ok) {
          return new Error("Ops");
        }
        return responce.json();
      })
      .then((data) => this.setState({ userData: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    if (this.props.match.url !== prevProps) {
      fetch(`https://api.github.com${this.props.match.url}`)
        .then((responce) => {
          if (!responce.ok) {
            return new Error("Ops");
          }
          return responce.json();
        })
        .then((data) => this.setState({ userData: data }));
    }
  }

  render() {
    const { userData } = this.state;
    if (!userData) {
      return null;
    }
    const { name, avatar_url, location } = userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;
