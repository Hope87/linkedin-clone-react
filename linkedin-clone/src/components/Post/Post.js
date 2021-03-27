import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "../Feed/InputOption";
import { ThumbUpAlt, Chat, Share, Send } from "@material-ui/icons";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAlt} title="Like" color="gray" />
        <InputOption Icon={Chat} title="Comment" color="gray" />
        <InputOption Icon={Share} title="Share" color="gray" />
        <InputOption Icon={Send} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
