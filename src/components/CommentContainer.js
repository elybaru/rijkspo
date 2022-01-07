import React from "react";
import SingleComment from "./SingleComment"

function CommentContainer({ handleDeleteComment, comments, setComments }) {

    return (
        <div>
            <h4>Visitor comments</h4>
            {comments.map(comment => {
                return <SingleComment handleDeleteComment={handleDeleteComment} key={comment.id} comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;