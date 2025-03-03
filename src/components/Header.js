import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVirtualAssistant, setShowVirtualAssistant] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
   
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Link to="/" className="logo">
            CarRental<span className="logo-dot">.</span>
          </Link>

          <nav className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/reservation" className={location.pathname === '/reservation' ? 'active' : ''}>
              Reservation
            </Link>
            <Link to="/agencies" className={location.pathname === '/agencies' ? 'active' : ''}>
              Nos Agences
            </Link>
            <Link to="/cars" className={location.pathname === '/cars' ? 'active' : ''}>
              Nos Voitures
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About Us
            </Link>
          </nav>

          <div className="header-actions">
            <button 
              className="virtual-assistant-btn"
              onClick={() => setShowVirtualAssistant(true)}
            >
              <i className="fas fa-robot"></i>
            </button>
            
            {user ? (
              <div className="user-menu">
                <span className="user-points">{user.loyaltyPoints} pts</span>
                <div className="user-avatar">
                  <img src={user.avatar || '/default-avatar.png'} alt="User" />
                </div>
              </div>
            ) : (
              <Link to="/login" className="auth-button">Login</Link>
            )}
          </div>
        </div>

        {/* Availability bar that hides on scroll */}
        <div className={`availability-bar ${isScrolled ? 'hidden' : ''}`}>
          <div className="availability-item">
            <span className="availability-count">12</span>
            <span className="availability-label">Available Now</span>
          </div>
          <div className="availability-item">
            <span className="availability-count">5</span>
            <span className="availability-label">Reserved Today</span>
          </div>
          <div className="availability-item">
            <span className="availability-count">3</span>
            <span className="availability-label">Last Minute Deals</span>
          </div>
        </div>
      </header>

      {/* Virtual Assistant Modal */}
      {showVirtualAssistant && (
        <VirtualAssistant onClose={() => setShowVirtualAssistant(false)} />
      )}
    </>
  );
}

// Virtual Assistant Component
function VirtualAssistant({ onClose }) {
  return (
    <div className="virtual-assistant-modal">
      <div className="assistant-header">
        <h3>AI Car Advisor</h3>
        <button onClick={onClose}>&times;</button>
      </div>
      {/* Add AI assistant content here */}
    </div>
  );
}

export default Header; 