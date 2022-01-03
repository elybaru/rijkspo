import React, { useState } from "react";
import CommentContainer from "./CommentContainer";

function VisitorLog() {
    const defaultFormData = {
        name: '',
        comment: ''
    }

    const [formData, setFormData] = useState(defaultFormData)
    const [comments, setComments] = useState([])

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
                addComment(data)
                setFormData(defaultFormData)
            })
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
                <CommentContainer comments={comments} setComments={setComments} />
            </div>
        </div>
    )
}

export default VisitorLog;