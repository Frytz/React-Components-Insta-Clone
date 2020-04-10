// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          //thumb url not working from the dummyData file
          className="post-thumb"
          src={props.thumbnailUrl}
          alt="post-header"
        />
      </div>
      <h2>{props.username}</h2>
    </div>
  );
};

export default PostHeader;
