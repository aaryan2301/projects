import React from 'react';
import "./SidebarOpt.css";

function SidebarOpt({title, Icon}) {
    return (
        <div className='sidebarOpt'>
          {Icon && <Icon className="sidebarOpt__icon"/>}
          {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOpt;