import React, { useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }
    console.log(searchTerm)
    return (
        <div>
            <h3>Find your Rijkspo</h3>
            <p>Dig through our storied archives and find works from great masters and modern artists all within our museum’s collection.</p>
            <form>
                <label>
                    Search:
                  <input type="text" name="search" onChange={handleSearch} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Search;


// search 
// search results
// favorites