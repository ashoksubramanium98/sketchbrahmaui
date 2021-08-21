import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import SideNavigation from './SideNavigation';
import Header from './Header';
import Menu from './Content/menu';
import Data from './Content/data';

const Dashboard = () => {
    return(
        <div className="d-flex">
            <SideNavigation />
            <div className="d-flex flex-column width-100">
                <Header />
                <div className="pt-1 pl-1 pr-1 pb-0">
                    <div className="mt-1" style={{marginBottom: '5px'}}>
                        <span className="c-pointer text-info">Dashboard</span>
                        <span> / </span>
                        <span className="c-pointer text-info">Test Dashboard 1</span>
                        <span> / </span>
                        <span>AutoRCA</span>
                    </div>
                    <h2 className="d-flex align-items-center"><FiArrowLeft />Test Dashboard 1</h2>
                </div>
                <div className="d-flex p-1 subMenuContainer">
                    <Menu />
                    <Data />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;