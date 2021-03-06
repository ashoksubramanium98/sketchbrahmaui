import React, { useState, useEffect } from 'react';
import { Table, Tag, Button } from 'antd';
import * as breweriesApis from '../../Api/breweries';
import 'antd/dist/antd.css';
import { dateFormat } from '../../utils';

const Breweries = ({history}) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        breweriesApis.getAll().then(res => {
            setLoading(false);
            setData(res);
        }).catch(res => {
            console.log('Unable to load the breweries');
        });
    }, []);

    const columns = [
        {
            title: 'S No',
            dataIndex: 's_no',
            render: (string, record, index) => <>{index + 1}</>
        },
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Type',
            dataIndex: 'brewery_type',
            render: (string) => <Tag color="purple">{string && string.slice(0,1).toUpperCase() + string.slice(1)}</Tag>
        },
        {
            title: 'Street',
            dataIndex: 'street'
        },
        {
            title: 'State',
            dataIndex: 'state'
        },
        {
            title: 'Postal Code',
            dataIndex: 'postal_code'
        },
        {
            title: 'Phone',
            dataIndex: 'phone'
        },
        {
            title: 'Updated At',
            dataIndex: 'updated_at',
            render: (string) => <>{dateFormat(string)}</>
        },
        {
            title: 'Action',
            render: (string, record) => (
                <Button type="link" onClick={() => history.push(`/breweries/${record.id}`)}>More</Button>
            )
        }
    ];

    return(
        <div className="mr-1 ml-1">
            <div className="d-flex align-items-center justify-content-between mt-1 mb-1">
                <div className="d-flex align-items-center">
                    <span className="c-pointer" onClick={() => history.push('/')}>Home</span>
                    <span style={{margin: '0 5px'}}> / </span>
                    <h2 className="m-0">List Breweries</h2>
                </div>
                <Button type="primary" onClick={() => history.push(`/breweries-search`)}>Search</Button>
            </div>
            <Table rowKey={"id"} size={'small'} loading={loading} columns={columns} dataSource={data} childrenColumnName="antdChildren" pagination={true} scroll={{x: 800}} />
        </div>
    );
};

export default Breweries;