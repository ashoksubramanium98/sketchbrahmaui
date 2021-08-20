const dev = {
    apiURL: 'https://api.openbrewerydb.org'
};

const prod = {
    apiURL: 'https://api.openbrewerydb.org'
};

const CONFIG = true ? prod : dev;

export default CONFIG;