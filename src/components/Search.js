import React, { useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import ArtworksContainer from "./ArtworksContainer"

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [checked, setChecked] = useState(false)
    const [searchResults, setSearchResults] = useState([])



    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${process.env.REACT_APP_API_KEY}search?${searchTerm}p=1&ps=50${checked ? "&ondisplay=True" : ""}&st=Objects&ii=0`)
            .then(resp => resp.json())
            .then(data => console.log(data))

    }

    // 
    return (
        <div>
            <h3>Find your Rijkspo</h3>
            <p>Dig through our storied archives and find works from great masters and modern artists all within our museum’s collection.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Search:
                    <TextField id="outlined-basic" label="Search" variant="outlined" type="text" name="search" onChange={handleSearch} />
                </label>
                <input type="submit" value="Submit" />
                <FormControlLabel
                    control={
                        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    }
                    label="In the Museum"
                />
            </form>
            <div>
                <ArtworksContainer searchTerm={searchTerm} />
            </div>
        </div>
    )
}

export default Search;


        // search 
        // search results
// favorites