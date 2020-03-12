import React, { Component, useEffect } from "react";
import Router, { useRouter } from "next/router";

import PostPage from "pages-sections/PostPage.js";

import { posts } from "assets/data/posts.js";

const Post = (props) => {

  useEffect(() => {
    if(!props.post){
      Router.push("/");
    }
  });

  return <PostPage post={props.post} />

}

Post.getInitialProps = ({ query }) => {
  const post = posts.filter(post => post.id === query.pid)[0];

  return {
    post
  };
};

export default Post
