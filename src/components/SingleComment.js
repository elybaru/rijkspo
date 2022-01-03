import React from "react";

function SingleComment({ comment }) {
    console.log(comment);
    return (
        <div>
            <p>{comment.comment}</p>
            <p>{comment.name}</p>
            <button>Update Comment</button>
            <button>Delete Comment</button>
        </div>
    )
}

export default SingleComment;