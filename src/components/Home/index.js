import React from 'react';

const Home = ({history}) => (
    <div className="page d-flex flex-column align-items-center justify-content-center">
        <h4 className="mt-0">Select any one of the option to view</h4>
        <div className="d-flex">
            <button className="btn btn-primary mr-1" onClick={() => history.push('/breweries')}>API Task</button>
            <button className="btn btn-primary" onClick={() => history.push('/ui-task')}>UI Task</button>
        </div>
    </div>
);

export default Home;