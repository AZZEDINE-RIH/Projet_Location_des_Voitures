import CarList from '../components/CarList';
import carsData from '../data.json';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Rental Car</h1>
          <p>Choose from our wide selection of quality vehicles</p>
          {!user && (
            <p className="hero-cta">
              Please <a href="/login">login</a> or <a href="/register">register</a> to make a reservation
            </p>
          )}
        </div>
      </section>

      <section className="featured-cars">
        <h2>Available Cars</h2>
        <CarList cars={carsData.cars} />
      </section>

      <section className="benefits">
        <h2>Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="fas fa-car"></i>
            <h3>Wide Selection</h3>
            <p>Choose from our diverse fleet of vehicles</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Best Prices</h3>
            <p>Competitive rates and special offers</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Support</h3>
            <p>Customer service available anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
