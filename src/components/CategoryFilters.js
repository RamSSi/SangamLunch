import React from "react";
import "../styles/CategoryFilters.css";

function CategoryFilters({ onFilterChange }) {
  return (
    <div className="filters">
      <select onChange={(e) => onFilterChange("type", e.target.value)}>
        <option value="all">All</option>
        <option value="korean">Korean</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
      </select>
      <select onChange={(e) => onFilterChange("price", e.target.value)}>
        <option value="all">All</option>
        <option value="₩">₩</option>
        <option value="₩₩">₩₩</option>
        <option value="₩₩₩">₩₩₩</option>
      </select>
    </div>
  );
}

export default CategoryFilters;
