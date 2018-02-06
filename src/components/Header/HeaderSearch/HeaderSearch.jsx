import React from "react";

function HeaderSearch(){
  var HeaderSearchStyles = {
    justifyContent: 'flex-end',
    padding: '0 10px'
  }
  return (
    <div style={HeaderSearchStyles}>
      <p>Search</p>
    </div>
  );
}

export default HeaderSearch;
