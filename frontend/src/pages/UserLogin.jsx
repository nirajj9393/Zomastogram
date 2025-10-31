
import "./UserLogin.css";

function UserLogin() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>User Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="forgot-text">
            Forgot your password?{" "}
            <a href="#" className="forgot-link">
              Reset here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
