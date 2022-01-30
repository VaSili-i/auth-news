import React, { useEffect, useState } from 'react';
import './AuthStyle.sass';
import { AuthCreators } from '../store/auth/action-creators';
import { useSelector, useDispatch } from 'react-redux';

const AuthModal = function ({ hide, setHide }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.users.isAuth)
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        if (isAuth) {
            setHide(true)
        }
    }, [isAuth])

    function logins() {
        dispatch(AuthCreators.login({ name, password }));
        setName('')
        setPassword('')
    }

    if (hide) {
        return null
    }
    return (
        <div className="window">
            <div className="window__auth">
                <input placeholder='имя' value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                <input placeholder='пароль' value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
                {error ? <span style={{ color: 'red' }}
                >{error}</span> : null}
                <button onClick={logins} className="link-button"
                >Войти</button>
            </div>
        </div>
    )
}

export default AuthModal