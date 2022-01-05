import React from "react";
import ArtworkCard from "./ArtworkCard"

function ArtworksContainer({ searchResults }) {
    console.log(searchResults.artObjects)

    return (
        <div>
            <h4>{searchResults.artObjects ? ` Found: ${searchResults.artObjects.length} works ` : ""}</h4>
            {searchResults.artObjects ? searchResults.artObjects.map(artWork => {
                return <ArtworkCard key={artWork.id} artWork={artWork} />
            }) : ""}
        </div>
    )

}

export default ArtworksContainer;