import { useState } from 'react';
import CarCard from './CarCard';
import SearchFilters from './SearchFilters';

function CarList({ cars }) {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = (filters) => {
    let results = cars.filter(car => {
      // Search by model
      if (filters.search && !car.model.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Filter by price range
      if (filters.minPrice && car.price < parseInt(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && car.price > parseInt(filters.maxPrice)) {
        return false;
      }
      
      // Filter by year
      if (filters.year && car.year.toString() !== filters.year) {
        return false;
      }
      
      // Filter by availability
      if (filters.available && !car.available) {
        return false;
      }
      
      return true;
    });
    
    setFilteredCars(results);
  };

  return (
    <div className="cars-container">
      <SearchFilters onFilter={handleFilter} />
      <div className="car-list">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarList; 