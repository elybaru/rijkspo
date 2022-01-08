import React, { useEffect, useState } from "react";

function useFavorites(artWork) {
    const [favorite, setFavorite] = useState(null)
    console.log("I'm the favorite state variable in the useFavorite hook" + favorite)

    useEffect(() => {
        if (artWork) {
            // console.log("We have an artwork")
            fetch(`http://localhost:3000/favorites?objectNumber=${artWork.objectNumber}`)
                .then(resp => resp.json())
                .then(data => {
                    if (data.length) {
                        setFavorite(data[0])
                    }
                })
        }
    }, [artWork])

    function handleFavorite(event) {
        console.log(artWork)
        return fetch(`http://localhost:3000/favorites`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: artWork.longTitle,
                image: artWork.webImage.url,
                objectNumber: artWork.objectNumber,
                linkSelf: artWork.links.self,
                linkWeb: artWork.links.web,
                maker: artWork.principalOrFirstMaker
            })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    function deleteFavorite(id) {
        return fetch(`http://localhost:3000/favorites/${id}`, {
            method: "DELETE"
        })

    }
    return [handleFavorite, deleteFavorite, favorite, setFavorite]
}

export default useFavorites;