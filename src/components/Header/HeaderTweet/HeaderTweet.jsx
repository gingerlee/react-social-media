import React from "react";

function HeaderTweet(){
  var HeaderTweetStyles = {
    justifyContent: 'flex-end',
    padding: '0 10px',
  }
  return (
    <div style={HeaderTweetStyles}>
      <p>Tweet</p>
    </div>
  );
}

export default HeaderTweet;
