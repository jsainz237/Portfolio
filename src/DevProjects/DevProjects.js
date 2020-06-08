import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './DevProjects.styles.scss';
import { Tile } from './Tile/Tile.index';
import Armada from '../assets/projects/Armada.png';
import GoldCPR from '../assets/projects/GoldCPR.png';
import TheButton from '../assets/projects/TheButton.png';
import FunnelAPI from '../assets/projects/FunnelAPI.png';

export function DevProjects() {
    return(
        <div className='projects-container' style={{ backgroundColor: '#171717', width: '100vw' }}>
            <h3>Projects</h3>
            <Row className='projects-wrapper' style={{ marginBottom: 50, maxWidth: '80vw' }}>
                <Col md={12} lg={4} style={{ marginBottom: 25 }}>
                    <Tile 
                        image={Armada}
                        title="SailPoint Design Guide"
                        description="Move SailPoint's PDF Design guide to static website 
                            using Gatsby.js, GraphQL, React, and Typescript." 
                    />
                </Col>
                <Col md={12} lg={4} style={{ marginBottom: 25 }}>
                    <Tile 
                        image={TheButton} 
                        title="The Button"
                        description="A social experiment to see just how much a human 
                            can care about a simple button. Done utilizing Angular, Node.js + Express, and PostgreSQL."
                        link="https://www.savethebutton.com"
                        linkTitle="www.savethebutton.com"
                    />
                </Col>
                {/* <Col md={12} lg={4} style={{ marginBottom: 25 }}>
                    <Tile 
                        image={FunnelAPI} 
                        title="Funnel API & Dashboard"
                        description="Node.js proxy server to funnel and cache requests and
                            React Dashboard to view fetch analytics" 
                    />
                </Col> */}
                <Col md={12} lg={4} style={{ marginBottom: 25 }}>
                    <Tile image={GoldCPR} 
                        title="goldcpr.com"
                        description="Live CPR Data using mobile device with analytics dashboard. Implemented
                            using Java+Spring API and a Typescript React Dashboard."
                        link="https://xd.adobe.com/view/db8215ff-c7c9-49e1-7c18-e13a2baa5c9d-adb3/"
                        linkTitle="View my redesign Mockups"
                    />
                </Col>
            </Row>
        </div>
    );
}