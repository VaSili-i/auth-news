import React, { useState } from 'react';
import './style/AppStyle.sass'
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import AuthModal from './modalWindow/AuthModal';
import { AuthCreators } from './store/auth/action-creators';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [hide, setHide] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(AuthCreators.setUser({ name: localStorage.getItem('user') }))
      dispatch(AuthCreators.setIsAuth(true))
    }
  }, [])

  return (
    <BrowserRouter>
      <AuthModal setHide={setHide} hide={hide} />
      <Navbar setHide={setHide} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
