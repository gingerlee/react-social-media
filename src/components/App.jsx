import React from "react";
import Header from "./Header";
import Profilebox from "./Profilebox";
import Newsfeed from "./Newsfeed";
import Friends from "./Newsfeed";

function App(){
  return (
    <div>
      <Header/>
      <Profilebox/>
      <Newsfeed/>
      <Friends/>
      App will go here
    </div>
  );
}

export default App;
