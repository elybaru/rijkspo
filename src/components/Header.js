import React, { useState, useEffect } from "react";

function Header() {
    const [randomElement, setRandomElement] = useState({})

    useEffect(() => {
        fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&search?q=painting&v=&s=&ondisplay=True&ii=0&p=1&ps=100`)
            .then(resp => resp.json())
            .then(data => randomDisplayPicture(data.artObjects))
    }, [])

    // random picture- grab a random element

    function randomDisplayPicture(pictures) {
        const getRandomElement = pictures[Math.floor(Math.random() * pictures.length)]
        setRandomElement(getRandomElement)
    }
    console.log(randomElement)

    return (
        <div>
            I'm the Header component
            <div>
                {/* <img src={randomElement.webImage.url} alt={randomElement.longTitle} width="100%" /> */}
            </div>
        </div>
    )

}

export default Header;