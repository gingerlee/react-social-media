import React from "react";
import Header from "./Header/Header";
import Body from "./Body";


function App(){
  var appStyles = {
    fontFamily: 'sans-serif'
  }
  return (
    <div style={appStyles}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
