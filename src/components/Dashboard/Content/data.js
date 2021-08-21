import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FiSettings, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Data = () => (
    <div className="data-container">
        <div className="bg-white border-radius-10">
            <div className="d-flex align-items-center justify-content-between" style={{padding: '5px 10px', margin: '0 15px 0 5px'}}>
                <div className="d-flex ">
                    <h3 className="text-primary border-bottom-primary-2 p-1 m-0" style={{padding :'1rem 2rem'}}>AutoRCA</h3>
                    <h3 className="p-1 m-0" style={{padding :'1rem 2rem'}}>Anomolies</h3>
                </div>
                <div className="d-flex align-items-center secondary-tag"><FiSettings style={{marginRight: '5px'}} /> Settings</div>
            </div>
            <hr className="m-0 horizontal-border" />
            <div style={{padding: '5px 10px 0 5px', margin: '10px'}}>
                <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center secondary-tag">Current Month on Last Month <FiChevronDown style={{marginLeft: '5px'}} /></div>
                </div>
            </div>
        </div>

        <div className="bg-white border-radius-10">
            <div className="d-flex align-items-center justify-content-between" style={{padding: '5px 10px', margin: '0 15px 0 5px'}}>
                <h2 className="p-1 m-0 font-weight-600">Drill Downs</h2>
                <FiChevronUp className="text-primary" style={{fontSize: '22px'}} />
            </div>
            <hr className="m-0 horizontal-border" />
            <div style={{padding: '5px 10px 0 5px', margin: '10px'}}>
                <div className="d-flex align-items-center justify-content-between" style={{margin: '0 0 0 8px'}}>
                    <div className="d-flex ">
                        <h3 className="m-0 text-primary border-bottom-primary-2" style={{padding :'0 1rem 13px 1rem'}}>Housing</h3>
                        <h3 className="m-0 font-weight-400" style={{padding :'0 1rem 13px 1rem'}}>Loan</h3>
                        <h3 className="m-0 font-weight-400" style={{padding :'0 1rem 13px 1rem'}}>Education</h3>
                        <h3 className="m-0 font-weight-400" style={{padding :'0 1rem 13px 1rem'}}>Job</h3>
                    </div>
                    <div style={{marginBottom: '10px'}} className="d-flex align-items-center secondary-tag">Multidimensional <FiChevronDown style={{marginLeft: '5px'}} /></div>
                </div>
                <hr className="m-0 horizontal-border" />
            </div>
            <div className="d-flex p-1 card-container">
                <div className="bg-grey card">
                    <div className="card-icon-background"><FaDatabase className="text-white font-size-xl" /></div>
                    <h3 className="font-weight-600">Add Data Sources</h3>
                    <p className="opacity-7">Select the data you want to monitor and analyse</p>
                    <button className="card-button">View Data Sources</button>
                </div>
                <div className="card card-gradient-bg">
                    <div className="card-icon-background" style={{background: '#fff'}}><MdExplore className="font-size-xl" /></div>
                    <h3 className="font-weight-600 text-white">Add KPI</h3>
                    <p className="opacity-7 text-white">Select the data you want to monitor and analyse</p>
                    <button className="card-button gradient">Add KPI</button>
                </div>
                <div className="bg-grey card">
                    <div className="card-icon-background"><AiOutlineDashboard className="text-white font-size-xl" /></div>
                    <h3 className="font-weight-600">Create Dashboard</h3>
                    <p className="opacity-7">Select the data you want to monitor and analyse</p>
                    <button className="card-button disabled">Create Dashboard</button>
                </div>
            </div>
        </div>
    </div>
);

export default Data;