import React from "react";
import { Link } from "react-router-dom";
import "../styles/RestaurantList.css";

function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Link to={`/detail/${restaurant.id}`} key={restaurant.id}>
          <div className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>Rating: {restaurant.rating} | {restaurant.distance} km</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RestaurantList;
