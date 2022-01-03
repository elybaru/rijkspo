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
            {comments.map(comment => {
                <Comment comment={comment} />
            })}
        </div>
    )
}

export default CommentContainer;