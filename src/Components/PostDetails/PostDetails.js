import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { PostContext } from '../../App';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id}= useParams();

    const posts= useContext(PostContext);
    const postDetails= posts.find(p => parseInt(p.id)===parseInt(id));
     
    debugger;
    
    console.log(postDetails);
    const {userId,title,body}=postDetails;
   
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <Comments id={id}></Comments>
        </div>
        
    );
};

export default PostDetails;