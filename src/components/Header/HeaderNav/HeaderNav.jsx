import React from "react";

function HeaderNav(){

  var headerNavStyles = {
    overflow: 'auto',
  }
  var headerNavListStyles = {
    listStyle: 'none',
  }
  var headerNavListItemStyles = {
    display: 'inline-block',
    padding: '0 10px',
  }
  return (
    <div style={headerNavStyles}>
      <ul style={headerNavListStyles}>
        <li style={headerNavListItemStyles}>Home</li>
        <li style={headerNavListItemStyles}>Notifications</li>
        <li style={headerNavListItemStyles}>Messages</li>
      </ul>
    </div>
  );
}

export default HeaderNav;
