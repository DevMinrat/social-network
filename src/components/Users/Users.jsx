import * as axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import UserAva from "../../assets/images/avatar.gif";
class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  userItems = () => {
    return this.props.users.map((u) => {
      return (
        <UserItem
          id={u.id}
          avatar={u.photos.small ?? UserAva}
          name={u.name}
          status={u.status}
          location={u.location}
          followed={u.followed}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          key={u.id}
        />
      );
    });
  };

  render() {
    return <div>{this.userItems()}</div>;
  }
}

export default Users;
