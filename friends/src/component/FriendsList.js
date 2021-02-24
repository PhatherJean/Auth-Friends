import React, { Component } from "react";
import { axiosAuth } from "../util/axiosAuth";
import Friend from "./Friend";

export default class FriendsList extends Component {
  state = {
    friends: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });

    setTimeout(() => {
      this.fetchFriends();
    }, 3000);
  }
  fetchFriends = () => {
    axiosAuth()
      .get("/api/friends")
      .then((res) => {
        this.setState({
          ...this.state,
          friends: res.data,
          loading: false,
        });
        // console.log(res.data)
      })
      .catch((err) => console.log(err.response.data.error));
  };
  render() {
    return this.state.loading ? (
      <h1>Loading your buddies....</h1>
    ) : (
      <div>
        <h2>Friends List is Live</h2>
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="friendsList"
        >
          {this.state.friends.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
      </div>
    );
  }
}
