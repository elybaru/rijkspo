import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from "react-router-dom";
import ArtworkDetail from "./ArtworkDetail"
import useFavorites from "../hooks/useFavorites"

function FavoriteArtworkItem({ fave, handleDeleteFave }) {

    const [handleFavorite, deleteFavorite, favorite] = useFavorites(fave);

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
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
            </Card>

        </div>
    )
}

export default FavoriteArtworkItem
