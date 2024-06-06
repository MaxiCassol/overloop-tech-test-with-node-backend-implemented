import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { ROUTE_HOME, ROUTE_ARTICLE_LIST } from '../../constants';

function MainNav() {
    return (
        <div className="MainNav">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={ Link } to={ ROUTE_HOME }>Overloop Tech Test</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as= { Link } to={ ROUTE_ARTICLE_LIST }>Articles</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default MainNav;
