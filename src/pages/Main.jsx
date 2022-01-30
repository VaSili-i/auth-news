import React from 'react';
import { useSelector } from 'react-redux';

const Main = function () {
    const username = useSelector(state => state.users.user.name);
    return (
        <div className="center-column">
            {
                username ?
                    `Привет ${username}` :
                    'Привет гость!'
            }
        </div>
    )
}

export default Main