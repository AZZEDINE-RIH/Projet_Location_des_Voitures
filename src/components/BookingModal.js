import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function BookingModal({ car, onClose, onBook }) {
  const [bookingData, setBookingData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    pickupLocation: '',
    dropoffLocation: '',
    insurance: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ ...bookingData, car });
    onClose();
  };

  const calculateTotal = () => {
    if (!bookingData.startDate || !bookingData.endDate) return 0;
    const days = Math.ceil(
      (bookingData.endDate - bookingData.startDate) / (1000 * 60 * 60 * 24)
    );
    let total = days * car.price;
    if (bookingData.insurance) total += days * 15; // Insurance cost per day
    return total;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <h2>Book {car.model}</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Pickup Date</label>
            <DatePicker
              selected={bookingData.startDate}
              onChange={date => setBookingData(prev => ({ ...prev, startDate: date }))}
              minDate={new Date()}
              required
            />
          </div>

          <div className="form-group">
            <label>Return Date</label>
            <DatePicker
              selected={bookingData.endDate}
              onChange={date => setBookingData(prev => ({ ...prev, endDate: date }))}
              minDate={bookingData.startDate}
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Location</label>
            <input
              type="text"
              value={bookingData.pickupLocation}
              onChange={e => setBookingData(prev => ({ 
                ...prev, 
                pickupLocation: e.target.value 
              }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Drop-off Location</label>
            <input
              type="text"
              value={bookingData.dropoffLocation}
              onChange={e => setBookingData(prev => ({ 
                ...prev, 
                dropoffLocation: e.target.value 
              }))}
              required
            />
          </div>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={bookingData.insurance}
                onChange={e => setBookingData(prev => ({ 
                  ...prev, 
                  insurance: e.target.checked 
                }))}
              />
              Add Insurance ($15/day)
            </label>
          </div>

          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <p>Daily Rate: ${car.price}</p>
            {bookingData.insurance && <p>Insurance: $15/day</p>}
            <p className="total">Total: ${calculateTotal()}</p>
          </div>

          <button type="submit" className="book-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal; 