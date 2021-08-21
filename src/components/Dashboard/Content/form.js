import React from 'react';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';

const Forms = () => (
    <div className="d-flex flex-column p-1 card-container">
        <div className="">
            <h2 className="p-1 m-0 font-weight-600">Forms</h2>
        </div>
        <div className="d-flex flex-column input-group">
            <Input label="KPI Name" placeholder="Name Of Your KPI" required={true} />
            <Select label="Select Data Source" required={true} />
            <Input label="Table Name Or Query" placeholder="Enter Table Name Or Query" required={true} />
            <Input label="Metric Column" placeholder="Enter Metric Column" required={true} />
            <Select label="Aggregate By" required={true} />
        </div>
    </div>
        
);

export default Forms;