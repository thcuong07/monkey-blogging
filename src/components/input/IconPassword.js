import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconPassword = ({icon, onClick}) => {
    return (
        <FontAwesomeIcon icon={icon} className="absolute right-0 p-4 top-[20px] cursor-pointer z-10" onClick={onClick}/>
    );
};

export default IconPassword;