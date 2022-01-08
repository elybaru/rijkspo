import React, { useState } from 'react'


function Counter() {
    const [word, setWord] = useState("")
    const [count, setCount] = useState(0)

    function handleChange(e) {
        setWord(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCount(...count, word.length + count)
        setWord("")
    }
    console.log(word)
    console.log(count)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Counter" value={word} onChange={handleChange} />
                <button name="Count">Count</button>
            </form>
        </div>
    )
}

export default Counter;


