import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon, onClick }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={onClick}>
      {Icon && <Icon />}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
