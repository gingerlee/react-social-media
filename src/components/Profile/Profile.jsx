import React from "react";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileUserCard from "./ProfileUserCard/ProfileUserCard";

function Profile(){
  var profileStyles = {
    width: '30%'
  }
  return (
    <div style={profileStyles}>
      <ProfileUserCard/>
      <ProfileBio/>
    </div>
  );
}

export default Profile;
