import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Header = () => (
    <div className="d-flex align-items-center bg-white justify-content-end p-1">
        <div className="d-flex align-items-center mr-1">
            <div className="profile-background d-flex align-items-center justify-content-center border-100">
                <span className="text-primary font-weight-600 font-size-lg">M</span>
            </div>
            <div className="ml-1">
                <p className="d-flex align-items-center m-0 font-weight-600"><span style={{paddingRight: '5px'}}>mathew.thomas@gmail.com</span> <AiFillCaretDown style={{fontSize: '10px'}} /></p>
                <p className="text-muted m-0 font-size-sm">Admin</p>
            </div>
        </div>
    </div>
);

export default Header;