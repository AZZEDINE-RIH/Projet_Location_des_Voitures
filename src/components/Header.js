import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          CarRental
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <span>Welcome, {user.email}</span>
              <button onClick={logout} className="auth-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-button">Login</Link>
              <Link to="/register" className="auth-button">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header; 