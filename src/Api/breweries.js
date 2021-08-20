import Axios from 'axios';
import CONFIG from '../config';

export const getAll = () => {
    return Axios.get(CONFIG.apiURL + `/breweries`).then(res => {
        let response = res['data'];
        return response;
    }).catch(err => {
        console.log('Get all breweries', err);
    });
};

export const getIndividual = (breweryID) => {
    return Axios.get(CONFIG.apiURL + `/breweries/${breweryID}`).then(res => {
        let response = res['data'];
        return response;
    }).catch(err => {
        console.log('Get individual brewery', err);
    });
};

export const search = (text) => {
    return Axios.get(CONFIG.apiURL + `breweries/search?query=${text}`).then(res => {
        let response = res['data'];
        return response;
    }).catch(err => {
        console.log('Get search based breweries', err);
    });
};