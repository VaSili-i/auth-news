import axios from 'axios';
import { ERROR_AUTH, FETCH_USER, IS_AUTH } from './index'

export const AuthCreators = {
    setUser: (user) => ({ type: FETCH_USER, payload: user }),
    setIsAuth: (auth) => ({ type: IS_AUTH, payload: auth }),
    setError: (error) => ({ type: ERROR_AUTH, payload: error }),
    login: (auth) => async (dispatch) => {
        try {
            const { data } = await axios.get('./server/users.json');
            let user = data.find(user => user.name === auth.name && user.password === auth.password);
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', user.name);
            dispatch(AuthCreators.setUser(user));
            dispatch(AuthCreators.setIsAuth(true));
        } catch (e) {
            dispatch(AuthCreators.setError('неправельный логин или пароль'));
        }
    },
    logout: () => async (dispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        dispatch(AuthCreators.setUser({}));
        dispatch(AuthCreators.setIsAuth(false));
    }

}