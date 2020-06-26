
import React, { Component } from "react";
import { Navbar ,Breadcrumb,Nav} from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar fluid>
         <Breadcrumb className="navbar-transparent">
        <Breadcrumb.Item active>Admin</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb> 
        <Navbar.Header>
          <Navbar.Brand>
            <h2>Webasto AirTop 2000</h2>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <AdminNavbarLinks />

        </Navbar.Collapse>
        <li >
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                    <NavLink
                      to={prop.layout + prop.path}
                      className="navbar-nav"
                      activeStyle={{borderBottom:"1px solid white"}}
                    >
                    <p>{prop.name}</p>
                    </NavLink>        
                );
              return null;
            })}
            </li>
      </Navbar>
        
    );
  }
}

export default Header;
