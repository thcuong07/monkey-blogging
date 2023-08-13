import React from 'react';
import Header from "../header/Header";

const PageHeader = ({children}) => {
    return (
        <div className="">
            <Header></Header>
            <div className="mt-[60px] h-[1000px] w-[1400px] mx-auto">{children}</div>
        </div>
    );
};

export default PageHeader;