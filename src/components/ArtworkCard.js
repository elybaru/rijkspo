import React from "react";
import { NavLink } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";
import "../styles.css"


function ArtworkCard({ artWork }) {
    // console.log(artWork.webImage.url)

    const [handleFavorite, deleteFavorite, favorite] = useFavorites(artWork)

    // function handleFavorite(event) {
    //     console.log(artWork)
    //     fetch(`http://localhost:3000/favorites`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             // id should just be a unique integer assigned by db
    //             title: artWork.longTitle,
    //             image: artWork.webImage.url,
    //             objectNumber: artWork.objectNumber,
    //             linkSelf: artWork.links.self,
    //             linkWeb: artWork.links.web,
    //             maker: artWork.principalOrFirstMaker
    //         })
    //     })
    //         .then(resp => resp.json())
    //         .then(data => console.log(data))
    // }

    // console.log(artWork.webImage ? "Exists" : "error")
    return (
        <div>
            <div className="artCard">
                <img src={artWork.webImage ? artWork.webImage.url : "https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0"} alt={artWork.longTitle} />
                <p className="title">{artWork.longTitle}</p>
                <button onClick={handleFavorite}>Save to favorites</button>
                <NavLink to={`/artworks/${artWork.objectNumber}`}>Details</NavLink>

            </div>
        </div>

    )
}

export default ArtworkCard;