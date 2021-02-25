import React, { Component } from "react";

import { axiosAuth } from "../util/axiosAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

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
    }, 2500);
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

  addFriend = (newFriend) => {
    axiosAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        this.setState({ ...this.state, friends: res.data });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  render() {
    console.log(this.props);
    return this.state.loading ? (
      <h1>Loading your buddies....</h1>
    ) : (
      <div>
        <h2>Friends List is Live</h2>
        <FriendForm addFriend={this.addFriend} />
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
