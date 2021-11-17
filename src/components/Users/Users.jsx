import React from "react";
import UserItem from "./UserItem/UserItem";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatar:
          "http://www.animacity.ru/sites/default/files/imagecache/photo-big/users/5292/photo/2013/304/110.gif",
        name: "Max",
        status: "Max descr",
        location: { country: "Belarus", city: "Gomel" },
        followed: false,
      },
      {
        id: 2,
        avatar:
          "http://www.animacity.ru/sites/default/files/imagecache/photo-big/users/5292/photo/2013/304/110.gif",
        name: "Masha",
        status: "Masha descr",
        location: { country: "Belarus", city: "Minsk" },
        followed: false,
      },
      {
        id: 3,
        avatar:
          "http://www.animacity.ru/sites/default/files/imagecache/photo-big/users/5292/photo/2013/304/110.gif",
        name: "Igor",
        status: "Igor status",
        location: { country: "Belarus", city: "Brest" },
        followed: true,
      },
    ]);
  }

  let userItems = props.users.map((u) => {
    return (
      <UserItem
        id={u.id}
        avatar={u.avatar}
        name={u.name}
        status={u.status}
        location={u.location}
        followed={u.followed}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
        key={u.id}
      />
    );
  });

  return <div>{userItems}</div>;
};

export default Users;
