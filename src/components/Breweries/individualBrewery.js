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
                        <span className="c-pointer" onClick={() => history.push('/breweries')}>List Breweries</span>
                        <span> / </span>
                        <span>{breweryID}</span>
                    </div>
                    <div className="d-flex flex-wrap">
                        <p className="card m-1"><span className="text-muted mr-1">ID :</span> {data.id}</p>
                        <p className="card m-1"><span className="text-muted mr-1">Name :</span> {data.name}</p>
                        {data.brewery_type && <p className="card m-1"><span className="text-muted mr-1">Brewery Type :</span> {data.brewery_type.slice(0,1).toUpperCase() + data.brewery_type.slice(1)}</p>}
                        {data.phone && <p className="card m-1"><span className="text-muted mr-1">Phone :</span> {data.phone}</p>}
                        {data.website_url && <p className="card m-1"><span className="text-muted mr-1">Website_url :</span> {data.website_url}</p>}
                        {data.street && <p className="card m-1"><span className="text-muted mr-1">Street :</span> {data.street}</p>}
                        {data.city && <p className="card m-1"><span className="text-muted mr-1">City :</span> {data.city}</p>}
                        {data.state && <p className="card m-1"><span className="text-muted mr-1">State :</span> {data.state}</p>}
                        {data.country && <p className="card m-1"><span className="text-muted mr-1">Country :</span> {data.country}</p>}
                        {data.postal_code && <p className="card m-1"><span className="text-muted mr-1">Postal Code :</span> {data.postal_code}</p>}
                        {data.created_at && <p className="card m-1"><span className="text-muted mr-1">Created At :</span> {dateTimeFormat(data.created_at)}</p>}
                        {data.updated_at && <p className="card m-1"><span className="text-muted mr-1">Updated At :</span> {dateTimeFormat(data.updated_at)}</p>}
                        {data.longitude && <p className="card m-1"><span className="text-muted mr-1">Longitude :</span> {data.longitude}</p>}
                        {data.latitude && <p className="card m-1"><span className="text-muted mr-1">Latitude :</span> {data.latitude}</p>}
                    </div>
                </div>
            }
        </div>
    );
};

export default IndividualBrewery;