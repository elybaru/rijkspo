import React, { useState } from "react";

function VisitorLog() {
    const defaultFormData = {
        name: '',
        comment: ''
    }

    const [formData, setFormData] = useState(defaultFormData)

    function handleFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)

    function handleSubmit(e) {
        e.preventDefault()
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
        </div>
    )
}

export default VisitorLog;