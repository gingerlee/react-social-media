import React from "react";
import Profile from "./Profile/Profile";
import Newsfeed from "./Newsfeed";
import Friends from "./Friends";

function Body(){
  var bodyStyles = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div style={bodyStyles}>
      <Profile/>
      <Newsfeed/>
      <Friends/>
    </div>
  );
}

export default Body;
