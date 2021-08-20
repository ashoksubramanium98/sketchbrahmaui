import React, { useState, useEffect } from 'react';
import * as breweriesApis from '../../Api/breweries';

const ApiIntegration = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        breweriesApis.getAll().then(res => {
            console.log(res)
            setData(res);
        }).catch(res => {
            console.log('Unable to load the brewerie');
        });
    }, []);

    return(
        <>
            ApiIntegration
        </>
    );
};

export default ApiIntegration;