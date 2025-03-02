import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [reservationData, setReservationData] = useState({
    pickupDate: new Date(),
    returnDate: new Date(),
    pickupLocation: '',
    returnLocation: '',
    carType: '',
    extras: []
  });

  const carTypes = ['Economy', 'Compact', 'Luxury', 'SUV', 'Van'];
  const extraOptions = [
    { id: 1, name: 'GPS Navigation', price: 10 },
    { id: 2, name: 'Child Seat', price: 15 },
    { id: 3, name: 'Additional Driver', price: 20 },
    { id: 4, name: 'Wi-Fi Hotspot', price: 12 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation submitted:', reservationData);
  };

  return (
    <div className="reservation-page">
      <div className="page-header">
        <h1>Make a Reservation</h1>
        <p>Choose your perfect rental car and options</p>
      </div>

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Pickup Date</label>
            <DatePicker
              selected={reservationData.pickupDate}
              onChange={date => setReservationData(prev => ({ ...prev, pickupDate: date }))}
              minDate={new Date()}
            />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <DatePicker
              selected={reservationData.returnDate}
              onChange={date => setReservationData(prev => ({ ...prev, returnDate: date }))}
              minDate={reservationData.pickupDate}
            />
          </div>

          <div className="form-group">
            <label>Pickup Location</label>
            <input
              type="text"
              value={reservationData.pickupLocation}
              onChange={e => setReservationData(prev => ({ 
                ...prev, 
                pickupLocation: e.target.value 
              }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Return Location</label>
            <input
              type="text"
              value={reservationData.returnLocation}
              onChange={e => setReservationData(prev => ({ 
                ...prev, 
                returnLocation: e.target.value 
              }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Car Type</label>
            <select
              value={reservationData.carType}
              onChange={e => setReservationData(prev => ({ 
                ...prev, 
                carType: e.target.value 
              }))}
              required
            >
              <option value="">Select a car type</option>
              {carTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="extras-section">
          <h3>Additional Options</h3>
          <div className="extras-grid">
            {extraOptions.map(option => (
              <div key={option.id} className="extra-option">
                <input
                  type="checkbox"
                  id={`extra-${option.id}`}
                  checked={reservationData.extras.includes(option.id)}
                  onChange={e => {
                    const newExtras = e.target.checked
                      ? [...reservationData.extras, option.id]
                      : reservationData.extras.filter(id => id !== option.id);
                    setReservationData(prev => ({ ...prev, extras: newExtras }));
                  }}
                />
                <label htmlFor={`extra-${option.id}`}>
                  {option.name} - ${option.price}/day
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default Reservation; 