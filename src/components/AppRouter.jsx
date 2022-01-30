import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { routers } from '../routers';

const AppRouter = function () {
    return (
        <Routes>
            {routers.map(({ path, Element }) =>
                <Route key={path} path={path} element={<Element />} />
            )}
        </Routes>
    )
}

export default AppRouter