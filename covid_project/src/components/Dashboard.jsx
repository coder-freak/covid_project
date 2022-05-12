import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
const Dashboard = () => {
return (
<div>
<p> Hello hi login !!</p>
<NavLink to="/covid_project/medic-main/src/App.js" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
Covid test    
</NavLink>
</div>
);
};

export default Dashboard;
