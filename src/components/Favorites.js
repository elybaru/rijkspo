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

    function handleDeleteFav(deletedFaveId) {
        const updatedFaves = faves.filter((fave) => fave.id !== deletedFaveId);
        setFaves(updatedFaves)
    }

    return (
        <div>
            {faves.map(fave => {
                return <FavoriteArtworkItem handleDeleteFave={handleDeleteFav} key={fave.id} fave={fave} />
            })}
        </div>
    )
}

export default Favorites;
