// Layout.jsx
import React, { useEffect } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction';
import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import HomePage from '../../pages/Acceil/acceil';
import RoutesApi from '../Routes';
const Layout = () => {
    const themeReducer = useSelector((state) => state.ThemeReducer);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');
        dispatch(ThemeAction.setMode(themeClass));
        dispatch(ThemeAction.setColor(colorClass));
    }, [dispatch]);

    const showSidebarAndTopNav = location.pathname !== '/' && 
                                 location.pathname !== '/login' && 
                                 location.pathname !== '/signup' && 
                                 location.pathname !== '/participer_challenge';

    return (
        <Route
            render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    {showSidebarAndTopNav && (
                        <>
                            <Sidebar {...props} />
                            <div className="layout__content">
                                <TopNav />
                                <div className="layout__content-main">
                                    <RoutesApi/>
                                </div>
                            </div>
                        </>
                    )}
                    <Route path='/' exact component={HomePage}/>
                </div>
            )}
        />
    );
};

export default Layout;
