import { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import CarList from '../components/CarList';

function Cars() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cars' },
    { id: 'economy', name: 'Economy' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'suv', name: 'SUV' },
    { id: 'electric', name: 'Electric' }
  ];

  return (
    <div className="cars-page">
      <div className="page-header">
        <h1>Our Fleet</h1>
        <p>Discover our wide range of vehicles</p>
      </div>

      <div className="categories-nav">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <SearchFilters />
      <CarList category={activeCategory} />

      <div className="fleet-features">
        <div className="feature">
          <i className="fas fa-car"></i>
          <h3>Regular Maintenance</h3>
          <p>All our vehicles undergo regular maintenance checks</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Insurance Included</h3>
          <p>Comprehensive insurance coverage for peace of mind</p>
        </div>
        <div className="feature">
          <i className="fas fa-clock"></i>
          <h3>24/7 Support</h3>
          <p>Round-the-clock assistance for all your needs</p>
        </div>
      </div>
    </div>
  );
}

export default Cars;
