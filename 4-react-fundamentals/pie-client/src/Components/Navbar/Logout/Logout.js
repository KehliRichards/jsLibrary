import React from 'react';
import './Logout.css';
import logoutPic from '../../../Assets/logout.png';

const Logout = (props) => {
    return (
        <img className="logout-img" src={logoutPic} alt="Logout" onClick={props.logout} />
    );
};

export default Logout;