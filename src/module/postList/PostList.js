import React, {Fragment} from 'react';
import PostItem from "../postItem/PostItem";

const PostList = () => {
    return (
        <div className="w-full relative">
            <h1 className="text-2xl font-bold tracking-[1px] mt-16 mb-8">Bài viết nổi bật</h1>
            <span className="w-16 h-[3px] bg-primary rounded-[10px] absolute top-[-10px] left-0"></span>
            <div className="grid grid-cols-3 gap-12">
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
            </div>
        </div>
    );
};

export default PostList;