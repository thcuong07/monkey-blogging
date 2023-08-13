import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {auth, db} from "../../firebase/firebaseConfig";
import {setDoc, collection, doc} from "firebase/firestore"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

import InputPassword from "../../components/input/InputPassword";
import {pathRouter} from "../../routers/pathRouter";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import {isEmail} from "../../components/validator/isEmail";
import {toast} from "react-toastify";


// check điều kiện nhập dữ liệu
const schema = yup.object().shape({
    fullName: yup.string()
        .required("Please enter your name"),
    email: yup.string()
        .test("email", "Please enter invalid email", (value) => {
            return isEmail(value)
        })
        .required("Please enter your email"),
    password: yup.string()
        .required("Please enter your password")
        .min(8, "Password must be than 8 characters or greater")
})
const SignUpPage = () => {
    document.title = "Register Page"
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
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0].message)
        }
    }, [JSON.stringify(errors)]);
    // function đăng ký tài khoản
    const handleSignUp = async (data) => {
        if (!isValid) return;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(userCredential.user, {
                displayName: data.fullName
            })
            await setDoc(doc(collection(db, "user"), userCredential.user.uid), {
                email: data.email,
                fullName: data.fullName,
            })
            await toast.success("Account created successfully")
        } catch (errors) {
            console.log(errors)
        }
    }
    return (
        <div className="absolute w-[100%] min-h-[100vh] inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
            <div className="w-[500px] bg-white rounded-2xl">
                <img src="/logo.png" alt="Monkey Blogging" className="w-[120px] mx-auto my-6"/>
                <h1 className="text-center text-primary text-3xl font-bold tracking-[1px] mb-6">Monkey Blogging</h1>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="w-full text-black px-8">
                    <div className="space-y-8">
                        <Input
                            id="fullName"
                            name="fullName"
                            label="FullName"
                            type='text'
                            height='48px'
                            placeholder="Please enter your fullName"
                            control={control}>
                        </Input>
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
                        <h1 className="font-semibold text-black">Do you have an account?</h1>
                        <Link to={pathRouter.signIn}
                              className="ml-1 font-semibold underline underline-offset-2 hover:text-primary"
                        >Sign In</Link>
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

export default SignUpPage;