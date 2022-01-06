import React from "react";
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function ArtworkCard({ artWork }) {
    // console.log(artWork.webImage.url)

    function handleFavorite(event) {
        console.log(artWork)
        fetch(`http://localhost:3000/favorites`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                // id should just be a unique integer assigned by db
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

    // console.log(artWork.webImage ? "Exists" : "error")
    return (
        <Grid
            container spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item container spacing={1} xs={12}>
                <Card sx={{ maxWidth: 700 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={artWork.webImage ? artWork.webImage.url : "https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0"}
                        alt={artWork.longTitle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {artWork.longTitle}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleFavorite}>Save to collection</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>



        // <div>
        //     <img src={artWork.webImage.url} alt={artWork.longTitle} width="50%" />
        //     <h4>{artWork.longTitle}</h4>
        // </div>
    )
}

export default ArtworkCard;