import React from 'react';
import {Chart, Path} from "bizcharts";

const data = [
    { consumption: 1050, price: 500, year: 1 },
    { consumption: 960, price: 1000, year: 5 },
    { consumption: 1340, price: 1500, year: 10 },
    { consumption: 1800, price: 2000, year: 15 },
    { consumption: 2400, price: 2500, year: 20 },
    { consumption: 2700, price: 3000, year: 25 },
    { consumption: 3400, price: 3500, year: 30 }
];

const scale={
	price:{
		min: 500,
		max: 4000
	},
	year:{
		range:[0, 1]
	}
}
const ChartAuto = () => (
    <div style={{border: '1px solid #F5F5F5', borderRadius: '20px', padding: '10px 10px 20px 10px', width: '50%', marginLeft: '15px'}}>
        <Chart height={200} autoFit data={data} scale={scale} className="pt-1 bizcharts">
            <Path position="year*price" />
        </Chart>
    </div>
);

export default ChartAuto;