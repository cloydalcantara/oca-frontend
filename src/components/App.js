import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header/index'
import logo from '../assets/logo.jpg';
export default (props) => {
  return (
    // <div>
    //   <Header />
    //   { props.children }
    // </div>
    <div className="wrapper">
      <div className="sidebar" data-background-color="white" data-active-color="danger">
          <div className="sidebar-wrapper">
              <div style={{textAlign:"center",padding:"10px"}}>
                  <img style={{width: "28%"}} src={logo} />
              </div>
              <div className="logo" style={{marginTop:"-10px"}}>
                  <Link to="/" className="simple-text">
                      OCA-Target
                  </Link>
              </div>
              <Header />
          </div>
      </div>
      <div className="main-panel">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar bar1"></span>
                          <span className="icon-bar bar2"></span>
                          <span className="icon-bar bar3"></span>
                      </button>
                      <Link className="navbar-brand" to="/">Dashboard</Link>
                  </div>
                  <div className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                          <li className="dropdown">
                              <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="ti-settings"> <p></p> </i>
                                      <b className="caret"></b>
                              </Link>
                              <ul className="dropdown-menu">
                                  <li><Link to="/">Notification 1</Link></li>
                                  <li><Link to="/">Notification 2</Link></li>
                                  <li><Link to="/">Notification 3</Link></li>
                                  <li><Link to="/">Notification 4</Link></li>
                                  <li><Link to="/">Another notification</Link></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                  {  props.children }
              </div>
          </nav>
          <footer className="footer">
            <div className="container-fluid">
              <div className="copyright pull-right">
                  &copy;2019 , developed by <a href="#">HRMDO</a>
              </div>
            </div>
        </footer>
      </div>
  </div>
  );
};