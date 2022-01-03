import React from "react";
import SingleComment from "./SingleComment"

function CommentContainer({ comments, setComments }) {
    console.log(comments)

    return (
        <div>
            <h4>Visitor comments</h4>
            {comments.map(comment => {
                return <SingleComment comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;