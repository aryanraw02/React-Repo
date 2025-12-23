import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockdata";
import { use, useState } from "react";

const Body = () => {
  //local state variable - powerful variable
  const [listofRestaurants, setListofRestaurants] = useState(reslist);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-inputs"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // Filter the restaurant cards and update the UI
            const filteredRestaurant = reslist.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListofRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id} // using unique id as key
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
