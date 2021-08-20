const dev = {
    apiURL: '',
};

const prod = {
    apiURL: ''
};

const CONFIG = true ? prod : dev;

export default CONFIG;