import {Link, NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const accessToken = useSelector(state => state.auth.token);
    const isAuthenticated = accessToken !== null;
    const authLinks = (
        <>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/dashboard'>
                    Dashboard
                </NavLink>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='/logout'>
                    Logout
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/login'>
                    Login
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className='navbar-brand' to='/'>
                SaferSSO
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/">
                            Home
                       </NavLink>
                    </li>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;