import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LowFidJobseeking = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <h5 className='text-center mt-5 text-secondary'>Low-Fid Prototype</h5>
      <Row className='mt-4'>
        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Splash.jpg" />
            <Card.Body>
              <Card.Title>Splash</Card.Title>
              <Card.Text>
                After Delay Effect.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Login.jpg" />
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Login Screen.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Main.jpg" />
            <Card.Body>
              <Card.Title>Home</Card.Title>
              <Card.Text>
                Search for jobs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Calendar.jpg" />
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Card.Text>
                Applied Jobs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/CalendarNext.jpg" />
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Card.Text>
                Next Shifts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/CalendarHistory.jpg" />
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Card.Text>
                History.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Messeges.jpg" />
            <Card.Body>
              <Card.Title>Messeges</Card.Title>
              <Card.Text>
                Messeges and Chats.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5" md={3}>
          <Card>
            <Card.Img className='w-100 border border-1' variant="top" src="../img/jobseeking/low-fid/Profile.jpg" />
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Earnings, Skills, Etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LowFidJobseeking;