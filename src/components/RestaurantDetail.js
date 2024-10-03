import React from "react";
import { useParams } from "react-router-dom";
import "../styles/RestaurantDetail.css";

function RestaurantDetail({ restaurants }) {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  return (
    <div className="restaurant-detail">
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <p>Open: {restaurant.hours}</p>
      <p>Rating: {restaurant.rating}</p>
      <div id="map">[Map component here]</div>
      <button>Reserve a Table</button>
    </div>
  );
}

export default RestaurantDetail;
