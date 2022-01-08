import React, { useState, useEffect } from "react";
import CommentContainer from "./CommentContainer";
import '../styles.css'

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
        <div className="container">
            <div className="visitorLogWelcome">
                <h2>Visitor Log</h2>
                <p>Thank you for visiting, I hope that you've found some inspiration from the Rijksmuseum. Please leave a comment below.</p>
            </div>
            <form onSubmit={handleSubmit} className="visitorForm">
                <div className="visitorInput">
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
                <div className="visitorInput">
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