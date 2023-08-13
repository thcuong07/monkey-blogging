import React from 'react';

const PostAuthor = ({author, day}) => {
    return (
        <div className="flex items-center justify-between text-[18px] text-white">
            <h3>{day}</h3>
            <div className="w-2 h-2 rounded-[50%] bg-white mx-4"></div>
            <h2>{author}</h2>
        </div>
    );
};

export default PostAuthor;