import './ErrorPage.css';
import MainNavBar from '../components/MainNavBar';
import { Link } from 'react-router-dom';
function ErrorPage() {
    return (
        <>

            <MainNavBar />
            <div className="error-container">
                <div className="error-box">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
                    <Link to="/" className="home-btn">Go Back Home</Link>
                </div>
            </div>

        </>

    );
}

export default ErrorPage;
