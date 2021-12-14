import React from "react";

export const AccountInfo = React.createContext();

export const AccountUser = AccountInfo.User;

class UserProvider extends React.Component {
  state = {
    email: "YouGotMail@mail.com",
    firstName: "Rickie",
    lastName: "Bobby",
    avatar: "",
  };

  updateUser = (user) => {
    console.log("updateUser Called");
    this.setState({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };

  render() {
    return (
      <AccountInfo.Provider value={this.state}>
        {this.props.children}
      </AccountInfo.Provider>
    );
  }
}

export default UserProvider;