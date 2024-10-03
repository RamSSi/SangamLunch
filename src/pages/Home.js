import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilters from "../components/CategoryFilters";
import RestaurantList from "../components/RestaurantList";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Korean BBQ", image: "/img/korean-bbq.jpg", rating: 4.5, distance: 1.2 },
    // more sample data here
  ]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilterChange = (filterType, value) => setFilters({ ...filters, [filterType]: value });

  // 필터링 로직을 추가하여 검색 조건에 맞는 음식점 리스트를 업데이트
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CategoryFilters onFilterChange={handleFilterChange} />
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}

export default Home;
