import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post';
import InputOptions from './InputOptions';
import { db } from "./firebase";
import firebase from 'firebase';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import { InputLabel } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Flip } from '@material-ui/icons';
import FlipMove from "react-flip-move";


function Feed() {
    // Intialize a hook
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [post, setPost] = useState([]);

    // uploads post to data base 
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPost(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    // Calls when send post is pressed
    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName ,
            description: user.email || "",
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value = {input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit" >Send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
                </div>
            </div>

            <FlipMove>
                {post.map(({ id, data: {name , description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
            


        </div>

        
    )
}

export default Feed
