import React, { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import * as breweriesApis from '../../Api/breweries';
import { dateTimeFormat } from '../../utils';

const IndividualBrewery = ({match, history}) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const {breweryID} = match.params;

    useEffect(() => {
        setLoading(true);
        breweriesApis.getIndividual(breweryID).then(res => {
            setLoading(false);
            setData(res);
        }).catch(res => {
            console.log('Unable to get brewery');
        });
    }, [breweryID]);

    return(
        <div>
            {loading ? <div className="page d-flex align-items-center justify-content-center"><Loader type="Oval" color="#00BFFF" height={25} width={25} /></div> : 
                <div className="m-1">
                    <div className="mb-1">
                        <span className="c-pointer" onClick={() => history.push('/')}>Home</span>
                        <span> / </span>
                        <span className="c-pointer" onClick={() => history.push('/breweries')}>List Breweries</span>
                        <span> / </span>
                        <span>{breweryID}</span>
                    </div>
                    <div className="d-flex flex-wrap">
                        <p className="react-card card m-1"><span className="text-secondary">ID :</span> {data.id}</p>
                        <p className="react-card card m-1"><span className="text-secondary">Name :</span> {data.name}</p>
                        {data.brewery_type && <p className="react-card card m-1"><span className="text-secondary">Brewery Type :</span> {data.brewery_type.slice(0,1).toUpperCase() + data.brewery_type.slice(1)}</p>}
                        {data.phone && <p className="react-card card m-1"><span className="text-secondary">Phone :</span> {data.phone}</p>}
                        {data.website_url && <p className="react-card card m-1"><span className="text-secondary">Website_url :</span> {data.website_url}</p>}
                        {data.street && <p className="react-card card m-1"><span className="text-secondary">Street :</span> {data.street}</p>}
                        {data.city && <p className="react-card card m-1"><span className="text-secondary">City :</span> {data.city}</p>}
                        {data.state && <p className="react-card card m-1"><span className="text-secondary">State :</span> {data.state}</p>}
                        {data.country && <p className="react-card card m-1"><span className="text-secondary">Country :</span> {data.country}</p>}
                        {data.postal_code && <p className="react-card card m-1"><span className="text-secondary">Postal Code :</span> {data.postal_code}</p>}
                        {data.created_at && <p className="react-card card m-1"><span className="text-secondary">Created At :</span> {dateTimeFormat(data.created_at)}</p>}
                        {data.updated_at && <p className="react-card card m-1"><span className="text-secondary">Updated At :</span> {dateTimeFormat(data.updated_at)}</p>}
                        {data.longitude && <p className="react-card card m-1"><span className="text-secondary">Longitude :</span> {data.longitude}</p>}
                        {data.latitude && <p className="react-card card m-1"><span className="text-secondary">Latitude :</span> {data.latitude}</p>}
                    </div>
                </div>
            }
        </div>
    );
};

export default IndividualBrewery;