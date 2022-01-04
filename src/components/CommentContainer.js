import React from "react";
import SingleComment from "./SingleComment"

function CommentContainer({ comments, setComments }) {

    return (
        <div>
            <h4>Visitor comments</h4>
            {comments.map(comment => {
                return <SingleComment key={comment.id} comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;