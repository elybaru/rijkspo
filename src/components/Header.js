import React, { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import '../styles.css';

function Header() {
    const [randomElement, setRandomElement] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const link = `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.REACT_APP_API_KEY}&search?q=painting&v=&s=&ondisplay=True&ii=0&p=1&ps=100`
        console.log(link)
        fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${process.env.REACT_APP_API_KEY}&search?q=painting&v=&s=&ondisplay=True&ii=0&p=1&ps=100`)
            .then(resp => resp.json())
            .then(data => randomDisplayPicture(data.artObjects))
    }, [])

    // random picture- grab a random element

    function randomDisplayPicture(pictures) {
        const getRandomElement = pictures[Math.floor(Math.random() * pictures.length)]
        setRandomElement(getRandomElement)
        setLoaded(true)
    }
    console.log(randomElement)


    return (
        <div className="header">
            <div>
                {loaded ?
                    <div>
                        <img src={randomElement.headerImage.url} alt={randomElement.longTitle} width="100%" />
                        <p className="headerText">{randomElement.longTitle}</p>
                    </div>
                    : <CircleLoader />}
            </div>
        </div>
    )

}

export default Header;