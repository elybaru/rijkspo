import React from "react";

function SingleComment({ handleDeleteComment, comment }) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => handleDeleteComment(comment))
    }


    return (
        <div className="singleComment">
            <p className="commentField">{comment.comment}</p>
            <p className="commentName">{comment.name}</p>
            <button onClick={handleDeleteClick}>Delete Comment</button>
        </div>
    )
}

export default SingleComment;