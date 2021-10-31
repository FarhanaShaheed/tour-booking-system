import React from 'react';
import package1 from '../../Images/package1.jpg';
import package2 from '../../Images/package2.jpg';
import package3 from '../../Images/package3.jpg';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Packages = () => {
    return (
        <div>
            <h2>Popular Packages</h2>
            <Container>

                <CardGroup>
                    <Card className="p-2">
                        <Card.Img variant="top" src={package1} />
                        <Card.Body>
                            <Card.Title>Berlin</Card.Title>
                            <Card.Text>
                                <h5>New Price</h5>
                                <h4>$400</h4>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">EUROPE</small>
                        </Card.Footer>
                    </Card>
                    <Card className="p-2">
                        <Card.Img variant="top" src={package2} />
                        <Card.Body>
                            <Card.Title>New Delhi</Card.Title>
                            <Card.Text>
                            <h5>New Price</h5>
                                <h4>$300</h4>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">ASIA</small>
                        </Card.Footer>
                    </Card>
                    <Card className="p-2">
                        <Card.Img variant="top" src={package3} />
                        <Card.Body>
                            <Card.Title>London</Card.Title>
                            <Card.Text>
                            <h5>New Price</h5>
                                <h4>$600</h4>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">ENGLAND</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </Container>
        </div>
    );
};

export default Packages;