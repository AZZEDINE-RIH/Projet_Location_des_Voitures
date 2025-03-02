function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Your trusted partner in car rental services</p>
      </div>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, CarRental has grown from a small local business to 
            one of the leading car rental services in the region. Our commitment 
            to quality service and customer satisfaction has been the cornerstone 
            of our success.
          </p>
        </div>
        <div className="about-image">
          <img src="/path/to/about-image.jpg" alt="Our Story" />
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h3>Customer First</h3>
            <p>We prioritize our customers' needs and satisfaction above all</p>
          </div>
          <div className="value-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Reliability</h3>
            <p>Consistent quality service you can count on</p>
          </div>
          <div className="value-card">
            <i className="fas fa-leaf"></i>
            <h3>Sustainability</h3>
            <p>Committed to reducing our environmental impact</p>
          </div>
          <div className="value-card">
            <i className="fas fa-handshake"></i>
            <h3>Integrity</h3>
            <p>Honest and transparent in all our dealings</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {/* Add team members here */}
          <div className="team-member">
            <img src="/path/to/team-member1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Vehicles</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Locations</p>
        </div>
      </section>
    </div>
  );
}

export default About; 