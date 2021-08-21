import React from 'react';
import { FaBars, FaRegChartBar, FaDatabase } from 'react-icons/fa';
import { MdNotificationsNone, MdExplore } from 'react-icons/md'
import { FiHome } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';

const SideNavigation = () => (
    <div className="sideNav bg-black page">
        <div className="d-flex flex-column align-items-center mt-1 mb-1">
            <FaBars className="icon gradient-bg" />
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-muted" style={{marginTop: '50px'}}>
            <FiHome className="icon" />
            <p className="text-center">Home</p>
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-primary">
            <AiOutlineDashboard className="icon gradient-color" />
            <p className="gradient-color text-center">Dashboard</p>
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-muted">
            <MdExplore className="icon" />
            <p className="text-center">KPI Explorer</p>
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-muted">
            <FaRegChartBar className="icon" />
            <p className="text-center">Anomolies</p>
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-muted">
            <FaDatabase className="icon" />
            <p className="text-center">Data Source</p>
        </div>
        <div className="d-flex flex-column align-items-center sideNav-menu-option text-muted">
            <MdNotificationsNone className="icon" />
            <p className="text-center">Alerts</p>
        </div>
    </div>
);

export default SideNavigation;