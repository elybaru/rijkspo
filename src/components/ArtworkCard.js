import React from "react";
import { NavLink } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";
import "../styles.css"


function ArtworkCard({ artWork }) {
    // console.log(artWork.webImage.url)

    const [handleFavorite, deleteFavorite, favorite] = useFavorites(artWork)

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