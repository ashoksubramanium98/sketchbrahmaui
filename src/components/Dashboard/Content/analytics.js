import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FiSettings, FiChevronDown } from 'react-icons/fi';
import ChartAuto from './chart';

const Analytics = () => (
    <div className="bg-white border-radius-10">
        <div className="d-flex align-items-center justify-content-between" style={{padding: '5px 10px', margin: '0 15px 0 5px'}}>
            <div className="d-flex ">
                <h3 className="text-primary border-bottom-primary-2 p-1 m-0" style={{padding :'1rem 2rem'}}>AutoRCA</h3>
                <h3 className="p-1 m-0" style={{padding :'1rem 2rem'}}>Anomolies</h3>
            </div>
            <div className="d-flex align-items-center secondary-tag"><FiSettings style={{marginRight: '5px'}} /> Settings</div>
        </div>
        <hr className="m-0 horizontal-border" />
        <div style={{padding: '5px 10px 30px 5px', margin: '10px'}}>
            <div className="d-flex justify-content-end">
                <div className="d-flex align-items-center secondary-tag">Current Month on Last Month <FiChevronDown style={{marginLeft: '5px'}} /></div>
            </div>
            <div className="d-flex mt-1">
                <div style={{border: '1px solid #F5F5F5', borderRadius: '20px', padding: '10px 10px 20px 10px', width: '50%'}}>
                    <table className="analyticsTable">
                        <thead>
                            <tr>
                                <td></td>
                                <td>
                                    <p className="m-0 font-weight-500 text-center">Last Month</p>
                                    <p className="m-0 text-secondary font-size-sm">(Mar 1 to Mar 31)</p>
                                </td>
                                <td>
                                    <p className="m-0 font-weight-500 text-center">This Month</p>
                                    <p className="m-0 text-secondary font-size-sm text-center">(Apr 1 to Apr 31)</p>
                                </td>
                                <td className="font-weight-500 text-center">Difference</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td className="text-center bg-grey-100 border-top" style={{width: '120px'}}><h2 className="m-0">1152</h2></td>
                                <td className="text-center"><h2 className="m-0">3240</h2></td>
                                <td className="text-center"><h2 className="m-0 d-flex align-items-center justify-content-center text-primary">2088 <AiFillCaretUp className="font-size-sm" /></h2></td>
                            </tr>
                            <tr>
                                <td className="text-secondary font-size-sm text-right" style={{paddingRight: '10px'}}>Mean</td>
                                <td className="text-center bg-grey-100">5.27</td>
                                <td className="text-center">5.15</td>
                                <td className="d-flex align-items-center justify-content-center text-center text-warning">5.15 <AiFillCaretDown className="font-size-sm" /></td>
                            </tr>
                            <tr>
                                <td className="text-secondary font-size-sm text-right" style={{paddingRight: '10px'}}>Median</td>
                                <td className="text-center bg-grey-100">3.88</td>
                                <td className="text-center">3.73</td>
                                <td className="d-flex align-items-center justify-content-center text-center text-warning">53.73<AiFillCaretDown className="font-size-sm" /></td>
                            </tr>
                            <tr>
                                <td className="text-secondary font-size-sm text-right" style={{paddingRight: '10px'}}>Max</td>
                                <td className="text-center bg-grey-100">35.48</td>
                                <td className="text-center">51.57</td>
                                <td className="d-flex align-items-center justify-content-center text-center text-primary">51.57 <AiFillCaretUp className="font-size-sm" /></td>
                            </tr>
                            <tr>
                                <td className="text-secondary font-size-sm text-right" style={{paddingRight: '10px'}}>Min</td>
                                <td className="text-center bg-grey-100 border-bottom">0.13</td>
                                <td className="text-center">0.10</td>
                                <td className="d-flex align-items-center justify-content-center text-center text-warning">0.10<AiFillCaretDown className="font-size-sm" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ChartAuto />
            </div>
        </div>
    </div>
);

export default Analytics;