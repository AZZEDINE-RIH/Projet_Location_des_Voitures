import { useState } from 'react';
import BookingModal from './BookingModal';
import "react-datepicker/dist/react-datepicker.css";

function CarCard({ car }) {
  const [showModal, setShowModal] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const handleBooking = (bookingData) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    // You could also show a success message to the user
    alert('Booking successful!');
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.model} />
      </div>
      <div className="car-info">
        <h3>{car.model}</h3>
        <p className="car-year">Year: {car.year}</p>
        <p className="car-price">${car.price}/day</p>
        <button 
          className={`book-button ${!car.available ? 'disabled' : ''}`}
          disabled={!car.available}
        >
          {car.available ? 'Book Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}

export default CarCard; 