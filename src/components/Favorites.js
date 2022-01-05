import React, { useEffect, useState } from "react";
import FavoriteArtworkItem from "./FavoriteArtworkItem"

function Favorites() {
    const [faves, setFaves] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/favorites`)
            .then(resp => resp.json())
            .then(data => setFaves(data))
    }, [])
    console.log(faves)

    return (
        <div>
            {faves.map(fave => {
                return <FavoriteArtworkItem key={fave.id} fave={fave} />
            })}
        </div>
    )
}

export default Favorites;



// show page 
// useParams for routing to that 
// push/ useHistory

//