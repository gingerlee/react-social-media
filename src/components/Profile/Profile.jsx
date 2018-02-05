import React from "react";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileUserCard from "./ProfileUserCard/ProfileUserCard";

function Profile(){
  return (
    <div>
      <ProfileUserCard/>
      <ProfileBio/>
    </div>
  );
}

export default Profile;
