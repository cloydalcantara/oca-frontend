import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nav: 'Dashboard' 
        };
    }
    render() {
        return (
            <ul className="nav">
                <li className={window.location.pathname == "/" ? "active" : ""}>
                    <Link to="/">
                        <i className="ti-layout-grid2"></i>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/libraries" ? "active" : ""}>
                    <Link to="/libraries">
                        <i className="ti-layout-tab"></i>
                        <p>Libraries</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/user-manager" ? "active" : ""}>
                    <Link to="/user-manager">
                        <i className="ti-user"></i>
                        <p>USER MANAGER</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/competency-manager" ? "active" : ""}>
                    <Link to="/competency-manager">
                        <i className="ti-star"></i>
                        <p>COMPETENCY MANAGER</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/curriculum-manager" ? "active" : ""}>
                    <Link to="/curriculum-manager">
                        <i className="ti-book"></i>
                        <p>CURRICULUM MANAGER</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/schedule-manager" ? "active" : ""}>
                    <Link to="/schedule-manager">
                        <i className="ti-calendar"></i>
                        <p>SCHEDULE MANAGER</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/results" ? "active" : ""}>
                    <Link to="/results">
                        <i className="ti-harddrives"></i>
                        <p>RESULTS</p>
                    </Link>
                </li>
                <li className={window.location.pathname == "/annoucements" ? "active" : ""}>
                    <Link to="/announcements">
                        <i className="ti-announcement"></i>
                        <p>ANNOUCENEMENT</p>
                    </Link>
                </li>
            </ul>
        )
    }
}