import React from 'react';
import Button from "../../components/button/Button";
import {Link} from "react-router-dom";
import {pathRouter} from "../../routers/pathRouter";

const NotFoundPage = () => {
    return (
        <div className="min-h-[100vh] w-[100vw] flex items-center justify-center flex-col">
            <img src="/logo.png" alt="" className="w-[150px] logo-notfound mb-10"/>
            <h1 className=" text-4xl text-primary font-bold tracking-wider">Page Not Found</h1>
            <div className="w-[200px] h-16 mt-6">
                <Button name={Link} to={pathRouter.home} color="primary" color1="secondary">Back Home</Button>
            </div>
        </div>
    );
};

export default NotFoundPage;