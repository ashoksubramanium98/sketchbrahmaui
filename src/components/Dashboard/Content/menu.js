import React from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';

const Menu = () => (
    <div className="d-flex flex-column align-items-center bg-white page sub-menu pt-1">
        <div className="pt-1" style={{width: '80%'}}>
            <h4>List of KPI's (08)</h4>
            <div className="d-flex align-items-center input p-0">
                <FiSearch />
                <input className="borderless-input" placeholder={'Search KPI'} />
            </div>
        </div>
        <div style={{paddingTop: '30px', width: '100%'}}>
            <p style={{padding: '15px 15px 15px 30px'}} className="m-0 d-flex align-items-center justify-content-between text-primary border-left-primary-2 font-weight-600 active-bg">DAU's <FiChevronRight style={{fontSize: '22px'}} /></p>
            <p style={{padding: '15px 15px 15px 30px'}} className="m-0 text-secondary">Avg Engagements (Min)</p>
            <p style={{padding: '15px 15px 15px 30px'}} className="m-0 text-secondary">Order Value</p>
            <p style={{padding: '15px 15px 15px 30px'}} className="m-0 text-secondary">Orders</p>
            <p style={{padding: '15px 15px 15px 30px'}} className="m-0 text-secondary">Revenue</p>
        </div>
    </div>
);

export default Menu;