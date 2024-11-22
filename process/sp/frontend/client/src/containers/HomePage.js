/* import Layout from '../components/Layout'

const HomePage = () => {
    return (
        <Layout title='SaferSSO | Home' content='Home page'>
            <h1>Home</h1>
        </Layout>
    );
};

export default HomePage; */

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Layout title='SaferSSO | Home' content='Home page'>
            <div className="container py-5">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <img 
                        src="/logo192.png" 
                        alt="SaferSSO Logo" 
                        className="img-fluid mb-4" 
                        style={{ maxWidth: '120px' }} 
                    />
                    <h1 className="display-4">Welcome to SaferSSO</h1>
                    <p className="lead text-muted">
                        Service Provider
                    </p>
                    <Link to="/login" className="btn btn-primary btn-lg mt-3">
                        Get Started By Logging In
                    </Link>
                </div>

                
                {/* Footer */}
                <footer className="text-center mt-5">
                    <p className="text-muted"> 2024 Fall Field Session SaferSSO Project. Created by Hilmir Arnarsson, Landon Dixon, Avery Overberg, and Carter Strate</p>
                </footer>
            </div>
        </Layout>
    );
};

export default HomePage;