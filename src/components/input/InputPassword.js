import React, {Fragment, useState} from 'react';
import Input from "./Input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";
import IconPassword from "./IconPassword";

const InputPassword = ({id, name, label, control, message, placeholder, height, ...props}) => {
    const [show, setShow] = useState(false);
    const handleClickIcon = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShow(!show)
    }
    return (
        <Input
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            height={height}
            message={message}
            type={show ? "text" : "password"}
            control={control}>
            {show ? <IconPassword icon={faEye} onClick={handleClickIcon}/>
                : <IconPassword icon={faEyeSlash} onClick={handleClickIcon}/> }
        </Input>
    );
};

export default InputPassword;