import React from "react";
import ArtworkCard from "./ArtworkCard"
import '../styles.css';

function ArtworksContainer({ searchResults }) {
    console.log(searchResults.artObjects)

    return (
        <div className="container">
            <div>
                <h4>{searchResults.artObjects ? ` Found: ${searchResults.artObjects.length} works ` : ""}</h4>
                <div className="cardContainer">
                    {searchResults.artObjects ? searchResults.artObjects.map(artWork => {
                        return <ArtworkCard key={artWork.id} artWork={artWork} />
                    }) : ""}
                </div>
            </div>
        </div>
    )

}

export default ArtworksContainer;