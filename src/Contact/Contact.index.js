import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone, AiFillLinkedin } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import './Contact.styles.scss';

export function Contact() {
    return (
        <div className='contact-container'>
            <Row style={{ width: '100vw'}}>
                <Col lg={6} className="atSign">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 32, marginBottom: 32 }}>
                        <FiAtSign size='18em' />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className='contact-wrapper'>
                        <h1 className='contact-title'>Contact</h1>
                        <div className='contact-details-wrapper'>
                            <div className='contact-details'>
                                <MdEmail size='2.3em' className='contact-icon' />
                                <a className='contact-link' href="mailto:jsainz237@gmail.com">jsainz237@gmail.com</a>
                            </div>
                            <div className='contact-details'>
                                <AiFillPhone size='2.3em' className='contact-icon' />
                                <p className='contact-link'>+1 (512)850-3316</p>
                            </div>
                            <div className='contact-details'>
                                <AiFillLinkedin size='2.3em' className='contact-icon' />
                                <a className='contact-link' href="https://www.linkedin.com/in/jessesainz/">visit my LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}