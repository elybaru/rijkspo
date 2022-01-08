import React from 'react'
import { NavLink } from "react-router-dom";
import ArtworkDetail from "./ArtworkDetail"
import useFavorites from "../hooks/useFavorites"
import "../styles.css"

function FavoriteArtworkItem({ fave, handleDeleteFave }) {

    const [handleFavorite, deleteFavorite, favorite] = useFavorites(fave);

    return (
        <div>
            <div className="artCard">
                <img src={fave.image} alt={fave.title} />
                <p className="title">{fave.title}</p>
                <p className="artist">{fave.maker}</p>
                <NavLink to={`/favorites/${fave.objectNumber}`}>Details</NavLink>
                <button onClick={() => deleteFavorite(fave.id).then(() => handleDeleteFave(fave.id))} size="small" color="primary">Remove from favorites</button>
            </div >
        </div >
    )
}

export default FavoriteArtworkItem


{/* <Card sx={{ maxWidth: 345 }}>
<CardActionArea>
    <img src={fave.image} alt={fave.title} />
    <CardMedia
        component="img"
        height="140"
        image={fave.image}
        alt={fave.title}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {fave.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Artist: {fave.maker}
        </Typography>
    </CardContent>
</CardActionArea>
<CardActions>
    <Button size="small" color="primary">
        <NavLink to={`/favorites/${fave.objectNumber}`}>Details</NavLink>
    </Button>
    <Button onClick={() => deleteFavorite(fave.id).then(() => handleDeleteFave(fave.id))} size="small" color="primary">
        Remove from favorites
    </Button>
</CardActions>
</Card> */}