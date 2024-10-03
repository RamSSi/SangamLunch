import React from "react";
import { useParams } from "react-router-dom";
import RestaurantDetail from "../components/RestaurantDetail";

function Detail() {
  const { id } = useParams();
  
  // 예시 데이터 (실제 구현 시 API 호출 또는 글로벌 상태 관리 사용)
  const restaurants = [
    { id: '1', name: "Korean BBQ", image: "/img/korean-bbq.jpg", rating: 4.5, address: "123 Seoul St.", hours: "10 AM - 10 PM" },
    { id: '2', name: "Sushi Place", image: "/img/sushi.jpg", rating: 4.8, address: "456 Tokyo Rd.", hours: "11 AM - 9 PM" },
    // 더 많은 음식점 데이터
  ];

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className="detail-page">
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
}

export default Detail;
