import React from "react";

function Comment({ comment }) {
    return (
        <div>
            <p>{comment.comment}</p>
            <p>{comment.name}</p>
            <button>Update Comment</button>
            <button>Delete Comment</button>
        </div>
    )
}

export default Comment; 