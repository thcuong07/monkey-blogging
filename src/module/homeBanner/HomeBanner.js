import React from 'react';
import Button from "../../components/button/Button";

const HomeBanner = () => {
    return (
        <div className="w-full h-[600px] bg-gradient-to-tr from-primary to-secondary flex items-center rounded-2xl">
            <div className="flex-1 px-8  text-white">
                <h1 className="text-5xl tracking-wider font-bold w-full">Monkey Blogging</h1>
                <p className="text-xl  w-full my-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto assumenda autem beatae,
                    commodi dignissimos eligendi error eveniet illum impedit laborum maiores nisi nostrum praesentium
                    quaerat quas ratione unde vitae.</p>
                <div className="w-[250px] h-[60px] text-primary mt-10 text-xl font-bold">
                    <Button color="grayf1">Get Started</Button>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <img src="/img-banner.png" alt="" className="w-[500px]"/>
            </div>
        </div>
    );
};

export default HomeBanner;