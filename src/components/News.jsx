import React from "react";
import PropTypes from "prop-types";

function News(props) {
  return (
    <div>
      <img src={props.img}></img>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
    </div>
  );
}

News.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default News;
