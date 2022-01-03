import React, { useEffect } from "react";
import Comment from "./Comment"

function CommentContainer({ comments, setComments }) {

    useEffect(() => {
        fetch('http://localhost:3000/comments')
            .then(resp => resp.json())
            .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h4>Visitor comments</h4>
            {comments.map(comment => {
                <Comment comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;