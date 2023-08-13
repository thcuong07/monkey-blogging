import React, {useState} from 'react';
import Button from "../../components/button/Button";
import {Link, NavLink} from "react-router-dom";
import {pathRouter} from "../../routers/pathRouter";
import Input from "../../components/input/Input";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {useAuth} from "../../context/AuthContext";


const Header = () => {
    const {userInfo} = useAuth();
    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({})
    return (
        <div className="h-header fixed inset-0 bg-grayLight z-30">
            <div className="w-[1400px] mx-auto flex items-center">
                <div className=" flex items-center flex-1">
                    <NavLink to={pathRouter.home}>
                        <img src="/logo.png" alt="" className="h-header p-1 cursor-pointer"/>
                    </NavLink>
                    <div className=" px-6 h-header flex items-center space-x-6 font-semibold">
                        <Button name={NavLink} to={pathRouter.home}>Home</Button>
                        <Button name={NavLink} to={pathRouter.blog}>Blog</Button>
                        <Button name={NavLink} to={pathRouter.contact}>Contact</Button>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-between ">
                    <form action="" className="h-full flex items-center w-[400px] border border-primary rounded-lg">
                        <Input name="search" control={control} height="40px" placeholder="Search" color="white"
                               type="text"></Input>
                    </form>
                    {userInfo ?
                        <div className="flex items-center">
                            <div className="text-black text-xl font-semibold p-2 cursor-pointer">VI</div>
                            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 cursor-pointer py-2 mx-6"/>
                            <div className="w-10 h-10 rounded-[50%] bg-white ml-2 cursor-pointer">
                                <img src="/logo.png" alt="" className="w-full h-full rounded-[50%]"/>
                            </div>
                        </div>
                        :
                        <div className="flex items-center text-white text-[16px]">
                            <div className="flex items-center h-[40px] w-[100px] mr-4 ">
                                <Button name={Link} to={pathRouter.signIn} color="primary" color1="secondary">Sign
                                    In</Button>
                            </div>
                            <div className="flex items-center h-[40px] w-[100px]">
                                <Button name={Link} to={pathRouter.signUp} color="primary" color1="secondary">Sign
                                    Up</Button>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;