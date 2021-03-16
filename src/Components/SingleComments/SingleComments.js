import React from 'react';

const SingleComments = (props) => {
    return (
        <div>
            <h5>{props.email}</h5>
            
            <p>{props.body}</p>
        </div>
    );
};

export default SingleComments;