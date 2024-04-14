import React, { useEffect } from 'react';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeAction';
import HomePage from '../../pages/Acceil/acceil';
import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import Routes from '../Routes';

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

    // Déterminez si Sidebar et TopNav doivent être affichés en fonction de l'URL actuelle
    const showSidebarAndTopNav = location.pathname !== '/';

    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                        {/* Afficher Sidebar et TopNav si showSidebarAndTopNav est vrai */}
                        {showSidebarAndTopNav && (
                            <>
                                <Sidebar {...props} />
                                <div className="layout__content">
                                    <TopNav />
                                    <div className="layout__content-main">
                                        <Routes />
                                    </div>
                                </div>
                            </>
                        )}
                        {/* Toujours afficher HomePage */}
                        <HomePage />
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
