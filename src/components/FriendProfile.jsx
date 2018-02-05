import React from "react";
import PropTypes from "prop-types";

function FriendProfile(props) {
  return (
    <div>
      <img src={props.img}></img>
      <h3>{props.name}</h3>
      <button>{props.button}</button>
    </div>
  );
}

FriendProfile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default FriendProfile;
