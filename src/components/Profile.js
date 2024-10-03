import React from "react";
import "../styles/Profile.css";

function Profile({ savedRestaurants }) {
  return (
    <div className="profile">
      <h2>Saved Restaurants</h2>
      <ul>
        {savedRestaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
      <div className="settings">
        <h3>Settings</h3>
        {/* 설정 관련 컴포넌트 추가 */}
      </div>
    </div>
  );
}

export default Profile;
