import React, { useState } from "react";

function Profile() {
  // 예시 데이터 (실제 구현 시 API 또는 글로벌 상태 관리 사용)
  const [savedRestaurants, setSavedRestaurants] = useState([
    { id: 1, name: "Korean BBQ", image: "/img/korean-bbq.jpg" },
    { id: 2, name: "Sushi Place", image: "/img/sushi.jpg" },
    // 더 많은 저장된 음식점 데이터
  ]);

  return (
    <div className="profile-page">
      <h2>Your Saved Restaurants</h2>
      <ul className="saved-restaurants">
        {savedRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <span>{restaurant.name}</span>
          </li>
        ))}
      </ul>

      <div className="profile-settings">
        <h3>Settings</h3>
        <p>Manage your notification preferences, privacy settings, and more.</p>
        {/* 설정 옵션 추가 */}
      </div>
    </div>
  );
}

export default Profile;
