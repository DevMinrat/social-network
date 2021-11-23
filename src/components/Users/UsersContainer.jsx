import { connect } from "react-redux";
import {
  followUserAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowUserAC,
  setTotalUsersCountAC,
} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => {
      dispatch(followUserAC(userID));
    },
    unfollowUser: (userID) => {
      dispatch(unfollowUserAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setUsersCount: (usersTotalCount) => {
      dispatch(setTotalUsersCountAC(usersTotalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
