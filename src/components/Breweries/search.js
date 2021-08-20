import React, { useState, useEffect } from 'react';
import { Input, Table, Tag, Button } from 'antd';
import * as breweriesApis from '../../Api/breweries';
import 'antd/dist/antd.css';
import { FiSearch } from  'react-icons/fi';
import { dateFormat } from '../../utils';

const SearchBreweries = ({history}) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setLoading(true);
        breweriesApis.search(searchText).then(res => {
            setLoading(false);
            setData(res);
        }).catch(res => {
            console.log('Unable to load the breweries');
        });
    }, [searchText]);

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
                <Button type="primary" onClick={() => history.push(`/breweries/${record.id}`)}>More</Button>
            )
        }
    ];
    

    return(
        <div className="mr-1 ml-1">
            <div className="mb-1">
                <span className="c-pointer" onClick={() => history.push('/breweries')}>List Breweries</span>
                <span> / </span>
                <span>Search</span>
            </div>
            <Input placeholder="Search" addonAfter={<FiSearch />} onChange={e => setSearchText(e.target.value)} className="mb-1" style={{width: '300px'}} />
            <Table rowKey={"id"} size={'small'} loading={loading} columns={columns} dataSource={data} childrenColumnName="antdChildren" pagination={true} scroll={{x: 800}} />
        </div>
    );
};

export default SearchBreweries;