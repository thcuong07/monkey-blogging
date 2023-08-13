import React from 'react';
import HomeBanner from "../../module/homeBanner/HomeBanner";
import PostList from "../../module/postList/PostList";

const HomePage = () => {
    return (
        <div className="pt-4">
            <HomeBanner></HomeBanner>
            <PostList></PostList>
        </div>
    );
};

export default HomePage;