import React, { useState } from 'react';
import './ImageDetection.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import FindShip from './FindShip';

const ImageDetection = () => {
  const [value, setValue] = useState({
    submitted: true,
  });

  const handleSubmit = () => {
    console.log('in handlesubmit');
    setValue({
      ...value,
      submitted: false,
    });
  };

  return (
    <div
      className='container-fluid vh-100'
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(https://img.pngio.com/ships-and-yacht-png-images-free-download-ship-png-ship-png-images-660_350.png)',
      }}
    >
      {console.log(value.submitted)}
      {value.submitted ? (
        <div className='row' style={{ opacity: 1 }}>
          <div className='col-md-3'></div>
          <div className='col-md-9'>
            <Card
              style={{ width: '33rem', marginTop: '17%', textAlign: 'center' }}
            >
              <Card.Body>
                <Card.Title style={{ color: 'red', fontSize: '2em' }}>
                  Upload Image of Ship
                </Card.Title>
                <br />
                <br />
                {/*<Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>*/}

                <Form style={{ marginLeft: '25%' }}>
                  <Form.Group>
                    <Form.File id='exampleFormControlFile1' />
                  </Form.Group>
                </Form>
                <br />
                <Button variant='primary' onClick={() => handleSubmit()}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div className='row'>
          <div className='col-md-12'>
            <FindShip />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetection;
