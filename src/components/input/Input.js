import React from 'react';
import {useController} from "react-hook-form";

const Input = ({id, name, label, control, placeholder, height, type, children, ...props}) => {
    const {field, fieldState} = useController({
        name,
        control,
        defaultValue: ""
    })
    const list = {};
    if (props.color) {
        list.style = {
            height: height,
            backgroundColor: props.color
        }
    } else {
        list.style = {
            height: height,
        }
    }
    return (
        <div className="w-full h-full relative ">
            {label && <label htmlFor={id} className="block text-grayDark pb-1">{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...list}
                {...field}
                {...props}
                className="w-full h-full flex items-center px-4 caret-red-700 outline-none border border-transparent rounded-lg bg-grayLight focus:border-primary"
            />
            {children}
        </div>
    );
};

export default Input;