import React from "react";
function SearchBar({city, setCity, handleSearch,}) {
    return (
        <div className="search-section">
            <h1>How's the Sky looking today?</h1>
            <div className="search-bar">
                <input
                    type="text"
                    value={city}
                    onChange={(e) =>setCity(e.target.value)}
                    placeholder="Enter city..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>     
    );
}
export default SearchBar;