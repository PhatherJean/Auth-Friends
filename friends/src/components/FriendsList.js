import React from "react";
import { authAxios } from "../utilities/authAxios";
import Friend from "../components/Friend";
import FriendForm from "../components/FriendForm";
import Loader from "react-loader-spinner";

class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: true,
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
    console.log(this.props);
    return (
      <div>
        <FriendForm />
        {this.props.isLoading && (
          <div>
            <Loader type="Hearts" color="#2f4f4f" height="80" width="80" />
            <p>Loading Your Buddies</p>
          </div>
        )}
        ,
        {this.state.friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
export default FriendsList;
