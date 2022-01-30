import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN, NEWS } from '../utils/consts';
import '../style/NavbarStyle.sass'
import { useSelector, useDispatch } from 'react-redux';
import { AuthCreators } from '../store/auth/action-creators';

const Navbar = function ({ setHide }) {
    const isAuth = useSelector(state => state.users.isAuth);
    const dispatch = useDispatch();

    function authUser() {
        if (isAuth) {
            dispatch(AuthCreators.logout())
        } else {
            setHide(false)
        }
    }

    return (
        <div className="navbar">
            <Link className='navbar__link' to={MAIN}>
                <img src={require('../img/line.svg')}>
                </img>
            </Link>
            <Link className='navbar__link' to={NEWS}>Новости</Link>
            <div className="navbar__div-link-button">
                <button onClick={authUser}
                    className="link-button">{isAuth ? 'Выйти' : 'Войти'}</button>
            </div>
        </div >
    )
}

export default Navbar