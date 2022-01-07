import React, { useState, useEffect } from "react";
import CommentContainer from "./CommentContainer";

function VisitorLog() {
    const defaultFormData = {
        name: '',
        comment: ''
    }

    const [formData, setFormData] = useState(defaultFormData)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/comments')
            .then(resp => resp.json())
            .then(data => setComments(data))
    }, [])

    function handleFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)

    function addComment(newComment) {
        const updatedComments = [...comments, newComment]
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
                setComments([...comments, data])
                setFormData(defaultFormData)
            })
    }

    function handleDeleteComment(deletedComment) {
        const updatedComments = comments.filter((comment) => comment.id !== deletedComment.id);
        setComments(updatedComments)
    }

    return (
        <div>
            <h2>Visitor Log</h2>
            <h4>Thank you for visiting, I hope that you've found some inspiration from the Rijksmuseum. Please leave a comment below</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Your name:
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Comment:
                        <input
                            type='text'
                            name='comment'
                            value={formData.comment}
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
                <input type='submit' />
            </form>
            <div>
                <CommentContainer comments={comments} setComments={setComments} handleDeleteComment={handleDeleteComment} />
            </div>
        </div>
    )
}

export default VisitorLog;