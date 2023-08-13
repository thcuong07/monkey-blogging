import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import * as yup from "yup";
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"

import Input from "../../components/input/Input";
import InputPassword from "../../components/input/InputPassword";
import {pathRouter} from "../../routers/pathRouter";
import Button from "../../components/button/Button";
import {isEmail} from "../../components/validator/isEmail";
import {auth} from "../../firebase/firebaseConfig";


const schema = yup.object().shape({
    email: yup.string()
        .test("email", "Please enter invalid email", (value) => {
            return isEmail(value)
        })
        .required("Please enter your email"),
    password: yup.string()
        .required("Please enter your password")
        .min(8, "Password must be than 8 characters or greater")
})
const SignInPage = () => {
    document.title = "Login Page"
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: {errors, isValid, isSubmitting}
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    useEffect(() => {
        const arrErrors = Object.values(errors);
        console.log(arrErrors)
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0].message)
        }
    }, [JSON.stringify(errors)]);
    // đăng nhập
    const handleSignIn = async (data) => {
        if (!isValid) return;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            const name = userCredential.user.displayName;
            await toast.success(`Welcome back, ${name}`)
            await navigate(pathRouter.home)
        } catch (error) {
            if (error.message.includes("password")) {
                toast.error("Password is wrong")
            }
            if (error.message.includes("user"))
                toast.error("User does not exist")
        }
    }

    return (
        <div className="absolute w-[100%] min-h-[100vh] inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
            <div className="w-[500px] bg-white rounded-2xl">
                <img src="/logo.png" alt="Monkey Blogging" className="w-[120px] mx-auto my-6"/>
                <h1 className="text-center text-primary text-3xl font-bold tracking-[1px] mb-6">Monkey Blogging</h1>
                <form
                    onSubmit={handleSubmit(handleSignIn)}
                    className="w-full text-black px-8">
                    <div className="space-y-8">
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            height='48px'
                            placeholder="Please enter your email"
                            control={control}>
                        </Input>
                        <InputPassword
                            id="password"
                            name="password"
                            label="Password"
                            height="48px"
                            placeholder="Please enter your password"
                            control={control}>
                        </InputPassword>
                    </div>
                    <div className="flex items-center justify-center my-10">
                        <h1 className="font-semibold text-black">Do you not have an account?</h1>
                        <Link to={pathRouter.signUp}
                              className="ml-1 font-semibold underline underline-offset-2 hover:text-primary"
                        >Sign Up</Link>
                    </div>
                    <div className="h-12 w-[250px] mx-auto mb-10">
                        <Button type="submit" color="primary" color1="secondary" disabled={isSubmitting}>Sign
                            Up</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;