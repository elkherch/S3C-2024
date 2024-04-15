import React from 'react';
import TopNav from '../topnav/TopNav';

const AcceuilLayout = ({ children }) => {
    return (

            <div className="content">
                {children}
            </div>

    );
};

export default AcceuilLayout;
