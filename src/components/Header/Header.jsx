import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderTweet from "./HeaderTweet/HeaderTweet";

function Header(){
  return (
    <div>
      <HeaderNav/>
      <HeaderSearch/>
      <HeaderTweet/>
    </div>
  );
}

export default Header;
