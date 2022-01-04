import React from "react";
import ArtWorkCard from "./ArtworkCard"

function ArtworksContainer({ searchTerm }) {

    return (
        <div>
            I'm the ArtworksContainer
            <h4>{searchTerm}</h4>
            <ArtWorkCard />
        </div>
    )

}

export default ArtworksContainer;