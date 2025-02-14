import { useState } from 'react';

function SearchFilters({ onFilter }) {
  const [filters, setFilters] = useState({
    search: '',
    minPrice: '',
    maxPrice: '',
    year: '',
    available: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    onFilter({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="search-filters">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search cars..."
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      
      <div className="filters-container">
        <div className="filter-group">
          <label>Price Range</label>
          <div className="price-inputs">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Year</label>
          <select name="year" value={filters.year} onChange={handleChange}>
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="filter-group checkbox">
          <label>
            <input
              type="checkbox"
              name="available"
              checked={filters.available}
              onChange={handleChange}
            />
            Available Only
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchFilters; 