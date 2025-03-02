import { useState } from 'react';

function Agencies() {
  const [selectedCity, setSelectedCity] = useState('all');
  
  const agencies = [
    {
      id: 1,
      name: "Downtown Branch",
      city: "Paris",
      address: "123 Main Street",
      phone: "+33 1 23 45 67 89",
      email: "downtown@carrental.com",
      hours: "Mon-Sat: 8:00-20:00",
      image: "path/to/agency1.jpg"
    },
    {
      id: 2,
      name: "Airport Terminal",
      city: "Lyon",
      address: "Terminal 2B",
      phone: "+33 1 98 76 54 32",
      email: "airport@carrental.com",
      hours: "24/7",
      image: "path/to/agency2.jpg"
    },
    // Add more agencies
  ];

  const cities = ['all', ...new Set(agencies.map(agency => agency.city))];

  const filteredAgencies = selectedCity === 'all'
    ? agencies
    : agencies.filter(agency => agency.city === selectedCity);

  return (
    <div className="agencies-page">
      <div className="page-header">
        <h1>Our Agencies</h1>
        <p>Find the nearest agency to you</p>
      </div>

      <div className="city-filter">
        <select 
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map(city => (
            <option key={city} value={city}>
              {city === 'all' ? 'All Cities' : city}
            </option>
          ))}
        </select>
      </div>

      <div className="agencies-grid">
        {filteredAgencies.map(agency => (
          <div key={agency.id} className="agency-card">
            <div className="agency-image">
              <img src={agency.image} alt={agency.name} />
            </div>
            <div className="agency-info">
              <h3>{agency.name}</h3>
              <p className="agency-city">{agency.city}</p>
              <p className="agency-address">{agency.address}</p>
              <p className="agency-phone">{agency.phone}</p>
              <p className="agency-email">{agency.email}</p>
              <p className="agency-hours">{agency.hours}</p>
              <button className="direction-button">
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agencies; 