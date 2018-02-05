import React from "react";
import ProfileUserCardKey from "./ProfileUserCardKey/ProfileUserCardKey";
import ProfileUserCardSocialStats from "./ProfileUserCardSocialStats/ProfileUserCardSocialStats";


function ProfileUserCard(){
  return (
    <div>
      <ProfileUserCardKey/>
      <ProfileUserCardSocialStats/>
    </div>
  );
}

export default ProfileUserCard;
