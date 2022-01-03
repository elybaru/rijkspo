import React, { useState } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material"

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [checked, setChecked] = useState(false)

    console.log(checked)

    function handleSearch(event) {
        setSearchTerm(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
    return (
        <div>
            <h3>Find your Rijkspo</h3>
            <p>Dig through our storied archives and find works from great masters and modern artists all within our museum’s collection.</p>
            <form>
                <label>
                    Search:
                    <TextField id="outlined-basic" label="Search" variant="outlined" type="text" name="search" onChange={handleSearch} />
                </label>

                <input type="submit" value="Submit" onSubmit={handleSubmit} />
                <FormControlLabel
                    control={
                        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    }
                    label="In the Museum"
                />

            </form>
        </div>
    )
}

export default Search;


// search 
// search results
// favorites