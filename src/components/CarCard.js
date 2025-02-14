import { useState } from 'react';
import BookingModal from './BookingModal';
import "react-datepicker/dist/react-datepicker.css";

function CarCard({ car }) {
  const [showModal, setShowModal] = useState(false);

  const handleBooking = (bookingData) => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    // You could also show a success message to the user
    alert('Booking successful!');
  };

  return (
    <>
      <div className="car-card">
        <img src={car.image} alt={car.model} />
        <div className="car-info">
          <h3>{car.model}</h3>
          <p>Year: {car.year}</p>
          <p className="car-price">${car.price}/day</p>
          <button 
            className={car.available ? 'auth-button' : 'auth-button disabled'}
            onClick={() => car.available && setShowModal(true)}
            disabled={!car.available}
          >
            {car.available ? 'Rent Now' : 'Not Available'}
          </button>
        </div>
      </div>

      {showModal && (
        <BookingModal 
          car={car}
          onClose={() => setShowModal(false)}
          onBook={handleBooking}
        />
      )}
    </>
  );
}

export default CarCard; 