import { useState } from 'react';
import CarCard from './CarCard';
import SearchFilters from './SearchFilters';

function CarList({ category = 'all' }) {
  // Sample car data - you can move this to a separate data file
  const allCars = [
    {
      id: 1,
      model: "Toyota Camry",
      year: 2022,
      price: 50,
      category: "economy",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
      available: true
    },
    {
      id: 2,
      model: "BMW 3 Series",
      year: 2023,
      price: 85,
      category: "luxury",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      available: true
    },
    {
      id: 3,
      model: "Tesla Model 3",
      year: 2023,
      price: 90,
      category: "electric",
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
      available: true
    },
    {
      id: 4,
      model: "Honda CR-V",
      year: 2022,
      price: 65,
      category: "suv",
      image: "https://images.unsplash.com/photo-1568844293986-ca411c4d8094",
      available: true
    }
  ];

  // Filter cars based on category
  const [filteredCars, setFilteredCars] = useState(
    category === 'all' ? allCars : allCars.filter(car => car.category === category)
  );

  // Update filtered cars when category changes
  useState(() => {
    setFilteredCars(
      category === 'all' ? allCars : allCars.filter(car => car.category === category)
    );
  }, [category]);

  const handleFilter = (filters) => {
    let results = filteredCars.filter(car => {
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