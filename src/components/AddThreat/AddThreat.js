import React, { useState } from 'react';
import { Form, Button, Dropdown, Col, Modal } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import './AddThreat.css';

const AddThreat = () => {
  const [value0, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);

  const [showModal1, setModal1] = useState(false);
  const [showModal2, setModal2] = useState(false);

  return (
    <div className='parentdiv'>
      <div className='row'>
        <div
          className='threatform'
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/originals/e2/71/fd/e271fda72f1e158b5f0569cc72d36d7f.jpg)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '5%' }}>
            <h2>ADD DETAILS FOR THREAT</h2>
          </div>
          <Form>
            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Flag of Ship:
                  </Form.Label>
                </Col>
                <Col sm='3'>
                  <Form.Control as='select' multiple>
                    <option>China</option>
                    <option>Pakistan</option>
                    <option>USA</option>
                    <option>Ireland</option>
                    <option>Bangladesh</option>
                  </Form.Control>
                </Col>
                <Col sm='1'></Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Type of Ship
                  </Form.Label>
                </Col>
                <Col sm='3'>
                  <Form.Control as='select' multiple>
                    <option>Fishing</option>
                    <option>Tugs & Special Craft</option>
                    <option>High speed Craft</option>
                    <option>Passenger Vessel</option>
                    <option>Tanker</option>
                    <option>Cargo Vessel</option>
                    <option>Pleasure Craft</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Latitude:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value0}
                    onChange={(changeEvent) =>
                      setValue(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Longitude:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value1}
                    onChange={(changeEvent) =>
                      setValue1(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Weight:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value2}
                    onChange={(changeEvent) =>
                      setValue2(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Length:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value3}
                    onChange={(changeEvent) =>
                      setValue3(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Distance from Coast:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value4}
                    onChange={(changeEvent) =>
                      setValue4(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Number of ships nearby
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value5}
                    onChange={(changeEvent) =>
                      setValue5(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group
              style={{ marginBottom: '10%' }}
              controlId='exampleForm.ControlSelect2'
            >
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Status of Ship
                  </Form.Label>
                </Col>
                <Col sm='3'>
                  <Dropdown>
                    <Dropdown.Toggle variant='light' id='dropdown-basic'>
                      Select Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>Under Way</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>At Anchor</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Sailing</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Speed:{' '}
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value8}
                    onChange={(changeEvent) =>
                      setValue8(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Draught:{' '}
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value9}
                    onChange={(changeEvent) =>
                      setValue9(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                Anomalies in AIS:
              </Form.Label>
              <Form.Row>
                <Col sm='2'>
                  <Form.Check type={'checkbox'} label={'5'} />
                </Col>
                <Col sm='2'>
                  <Form.Check type={'checkbox'} label={'10'} />
                </Col>
                <Col sm='2'>
                  <Form.Check type={'checkbox'} label={'15'} />
                </Col>
                <Col sm='2'>
                  <Form.Check type={'checkbox'} label={'20'} />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group style={{ marginBottom: '10%' }}>
              <Form.Row>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Time of Day:
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <RangeSlider
                    tooltip='on'
                    min={0}
                    max={100}
                    value={value10}
                    onChange={(changeEvent) =>
                      setValue10(changeEvent.target.value)
                    }
                    step={5}
                    size='lg'
                    variant='success'
                    tooltip='auto'
                  />
                </Col>
                <Col sm='2'>
                  <Form.Label style={{ fontWeight: 'bold', fontSize: 'large' }}>
                    Change in Location
                  </Form.Label>
                </Col>
                <Col sm='4'>
                  <Form.Control type='integer' />
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>

          <div style={{ textAlign: 'center' }}>
            <Button
              variant='danger'
              type='submit'
              style={{ textAlign: 'center' }}
              onClick={() => setModal1(true)}
            >
              Save Preference
            </Button>
            <br />
            <br />
            <Button
              variant='danger'
              type='submit'
              style={{ textAlign: 'center' }}
              onClick={() => setModal2(true)}
            >
              Train Model
            </Button>

            <Modal
              show={showModal1}
              style={{ textAlign: 'center', padding: '5%' }}
            >
              <h6>Your Preference has been saved</h6>
              <div>
                <Button variant='danger' onClick={() => setModal1(false)}>
                  Close
                </Button>
              </div>
            </Modal>

            <Modal
              show={showModal2}
              style={{ textAlign: 'center', padding: '5%' }}
            >
              <h6>Data has been saved to train the model</h6>
              <div>
                <Button variant='danger' onClick={() => setModal2(false)}>
                  Close
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddThreat;
