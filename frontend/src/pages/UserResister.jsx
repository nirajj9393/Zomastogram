import { Link } from 'react-router-dom';
import './userRedg.css';

function UserResister() {
  return (
    <div className="register-container">
      <form className="user-reg-form">
        <h2>User Registration</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Create a password"
          required
        />

        <button type="submit">Register</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default UserResister;