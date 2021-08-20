import React from 'react';
import SideNavigation from './SideNavigation';
import Header from './Header';

const Dashboard = () => {
    return(
        <div className="d-flex">
            <SideNavigation />
            <div className="d-flex flex-column width-100">
                <Header />
            </div>
        </div>
    );
};

export default Dashboard;