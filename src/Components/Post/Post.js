import { Button } from '@material-ui/core';
import React from 'react';
import {Link} from "react-router-dom";

const Post = (props) => {
    const {title,id}=props.post;
    return (
        <div>
            <h1>{title}</h1>
           <Link  to={`/PostDetails/${id}`} ><Button>see more</Button></Link>
            
        </div>
    );
};

export default Post;