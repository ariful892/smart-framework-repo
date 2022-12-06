import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <div className="navbar bg-base-100 mr-5 py-3">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">smart <span className='text-accent'>FRAMEWORK</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>

                    {!user && <>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/signup'}>Signup</Link></li>
                    </>}
                    {user && <>
                        <button onClick={handleSignOut} className="btn btn-ghost text-red-500">Signout</button>
                    </>}

                </ul>
            </div>
        </div>
    );
};

export default Navbar;