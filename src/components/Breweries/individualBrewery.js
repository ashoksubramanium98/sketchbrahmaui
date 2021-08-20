import React, { useState, useEffect } from 'react';
import * as breweriesApis from '../../Api/breweries';
import { dateFormatDate } from '../../utils';

const IndividualBrewery = ({match}) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const {breweryID} = match.params;

    useEffect(() => {
        setLoading(true);
        breweriesApis.getIndividual(breweryID).then(res => {
            setLoading(false);
            setData(res);
            console.log(res)
        }).catch(res => {
            console.log('Unable to get brewery');
        });
    }, [breweryID]);

    return(
        <>
            Get Individual Brewery
        </>
    );
};

export default IndividualBrewery;