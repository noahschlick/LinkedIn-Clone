import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Post.css';
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Post = forwardRef (({name, description, message, photoUrl}, ref) => {
    
    return (
        <div ref={ref} className="post">
            <div className="post__header">
               <Avatar src={photoUrl}> {description[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>

               
            </div>
            <div className="post__body">
                   <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOptions Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>



        </div>
    );
})


export default Post
