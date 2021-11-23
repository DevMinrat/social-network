import * as axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import UserAva from "../../assets/images/avatar.gif";
import style from "./Users.module.css";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
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

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];
    {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && style.currentPage}
                onClick={() => this.onPageChanged(p)}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.userItems()}
      </div>
    );
  }
}

export default Users;
