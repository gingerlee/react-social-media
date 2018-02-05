import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Newsfeed from "./Newsfeed";
import Friends from "./Friends";

function App(){
  return (
    <div>
      <Header/>
      <Profile/>
      <Newsfeed/>
      <Friends/>
    </div>
  );
}

export default App;
