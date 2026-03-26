import { useState } from "react";
import { getweather } from "../services/weatherApi";
function SearchBar() {
    const [city, setCity] = useState("");

    const handleSearch = async () => {
        const data = await getweather(city);
        console.log(data);
    };
    return (
        <div>
        < input
            value={city}
            onChange={(e) =>setCity(e.target.value)}
            placeholder="Enter city..."
        />
         <button on onClick={handleSearch}>Search</button>
        </div>
    );
}
export default SearchBar;