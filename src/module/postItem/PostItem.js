import React from 'react';
import Button from "../../components/button/Button";
import PostAuthor from "../postAuthor/PostAuthor";

const PostItem = () => {
    return (
        <div className="w-full h-[300px] rounded-2xl relative">
            <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""/>
            <div className="absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.2)] rounded-2xl">
                <div className="w-full px-5 py-8 flex items-center justify-between">
                    <div className="h-10 w-[100px] font-semibold flex items-center">
                        <Button color="grayf1" type="button">Kiến thức</Button>
                    </div>
                    <PostAuthor author="Hùng Cường" day="Aug 18"></PostAuthor>
                </div>
                <h1 className="text-2xl font-bold tracking-wider w-full p-5 mt-2 text-white ">Hướng dẫn setup phòng cực chill dành cho người
                    mới toàn tập</h1>
            </div>
        </div>
    );
};

export default PostItem;