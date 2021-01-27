import React from "react";
import { authAxios } from "../utilities/authAxios";
import Friend from "../components/Friend";

class FriendsList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    authAxios()
      .get("/friends")
      .then((res) => {
        this.setState({
          ...this.state.friends,
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
export default FriendsList;
