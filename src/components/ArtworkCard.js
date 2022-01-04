import React from "react";

function ArtworkCard({ artWork }) {
    console.log(artWork)
    return (
        <div>
            <img src={artWork.webImage.url} alt={artWork.longTitle} width="50%" />
            <h4>{artWork.longTitle}</h4>
        </div>
    )
}

export default ArtworkCard;