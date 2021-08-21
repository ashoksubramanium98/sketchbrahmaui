import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

let driversData = [
    {name: 'Housing=yes', aprilAvg: 0.27, mayAvg: 0.12, aprilPopulation: 2406, mayPopulation: 889, overAllAvg: 0.16},
    {name: 'Housing=yes', aprilAvg: 0.78, mayAvg: 0.89, aprilPopulation: 2839, mayPopulation: 789, overAllAvg: 0.38},
    {name: 'Housing=yes', aprilAvg: 0.89, mayAvg: 0.78, aprilPopulation: 2839, mayPopulation: 796, overAllAvg: 0.48},
    {name: 'Housing=yes', aprilAvg: 0.78, mayAvg: 0.89, aprilPopulation: 2839, mayPopulation: 789, overAllAvg: 0.38},
    {name: 'Housing=yes', aprilAvg: 0.89, mayAvg: 0.78, aprilPopulation: 2839, mayPopulation: 796, overAllAvg: 0.48}
];

const DriversTable = () => (
    <div className="d-flex flex-column" style={{padding: '5px 10px', margin: '0 15px 0 5px'}}>
        <div className="d-flex align-items-center justify-content-between">
            <h2 className="p-1 m-0 font-weight-600">Top Drivers</h2>
            <div className="d-flex align-items-center">
                <label class="switch">
                    <input type="checkbox" checked />
                    <span class="slider round"></span>
                </label>
                <p className="m-0" style={{marginLeft: '5px'}}>Remove Overlap</p>
            </div>
        </div>
        <div className="overflow-scroll">
            <table className="driversTable">
                <thead className="thead">
                    <tr>
                        <td className="text-left" style={{borderTopLeftRadius: '9px'}}>Sub Group Name</td>
                        <td>April Avg</td>
                        <td>May Avg</td>
                        <td>April Sub Group population</td>
                        <td>May Sub Group population</td>
                        <td style={{borderTopRightRadius: '9px'}}>Net Impact on Overall Avg</td>
                    </tr>
                </thead>
                <tbody>
                    {driversData.map(({name, aprilAvg, mayAvg, aprilPopulation, mayPopulation, overAllAvg}, index) => <tr key={index}>
                        <td className={"text-left " + ((index === 0) ? "firstDataRow" : "")}>{name}</td>
                        <td className={(index === 0) ? "firstDataRow" : ""}>{aprilAvg}</td>
                        <td className={(index === 0) ? "firstDataRow" : ""}>{mayAvg}</td>
                        <td className={(index === 0) ? "firstDataRow" : ""}>{aprilPopulation}</td>
                        <td className={(index === 0) ? "firstDataRow" : ""}>{mayPopulation}</td>
                        <td className={"text-warning d-flex align-items-center justify-content-center " + ((index === 0) ? "firstDataRow" : "")}><AiFillCaretDown style={{marginRight: '5px'}} />{overAllAvg}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
);

export default DriversTable;