const UserItem = (props) => {
  return (
    <div>
      <div>
        <img src={props.avatar} alt="ava" />
      </div>
      <div>Name: {props.name}</div>
      <div>Status: {props.status}</div>
      <div>
        Location: {"props.location.country"}, {"props.location.city"}
      </div>
      <div>
        {props.followed ? (
          <button
            onClick={() => {
              props.unfollowUser(props.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.followUser(props.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default UserItem;
