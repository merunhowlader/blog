import React, { useEffect, useState } from 'react';
import SingleComments from '../SingleComments/SingleComments';

const Comments = (props) => {
    const {id} =props;
    const [comments,setComments]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data =>setComments(data))
    },[])

    const[imgData,setImgData]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data =>setImgData(data))
       
    },[])
    

  
    // let newdata=comments;
    // const imgcomment=newdata.map(nd=>{
    //     const image=imgData.find(img=> img.id === nd.userId)
        
    //      nd.img = image.url;
    //      debugger;
    // })

   

    const postComments=comments.filter(cmt=>parseInt(cmt.postId)===parseInt(id))

    


    return (
        <div>
            <h2>ALl Comments</h2>
            {
                postComments.map(pt=><SingleComments name={pt.name} email={pt.email} body={pt.body} ></SingleComments>)
            }
        </div>
    );
};

export default Comments;