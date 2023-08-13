import React from 'react';
import Spinner from "../spinner/Spinner";

const Button = ({type, color, color1, children, disabled,  ...props}) => {
    let Comp = props.name || "button"
    const list = {};
    if (type) {
        list.type = type;
    }
    if (props.href) {
        list.href = props.href;
    }
    if (props.to) {
        list.to = props.to
    }
    if (color && !color1) {
        list.style = {
            backgroundColor: `var(--${color})`
        }
    } else if (color && color1) {
        list.style = {
            backgroundImage: `linear-gradient(to right , var(--${color}) , var(--${color1}))`
        }
    }
    if (!!props.outline && color){
        list.style = {
            border: `2px solid var(--${color})`,
        }
    }

    return (
        <Comp
            className="button flex items-center justify-center rounded-lg w-full h-full tracking-wider outline-none border-none  hover:opacity-80 border-2 border-transparent disabled:opacity-70"
            {...props}
            {...list}>
            {disabled? <Spinner></Spinner> : children}
        </Comp>
    );
};

export default Button;