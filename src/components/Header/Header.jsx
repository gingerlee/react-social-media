import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderTweet from "./HeaderTweet/HeaderTweet";

function Header(){
  var HeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
  return (
    <div style={HeaderStyles}>
      <HeaderNav/>
      <HeaderSearch/>
      <HeaderTweet/>
    </div>
  );
}

export default Header;
