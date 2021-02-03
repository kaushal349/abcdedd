import React,{useState} from 'react' 
import './ImageDetection.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import FindShip from './FindShip'

const ImageDetection = () => {

    const [value, setValue] = useState({
        submitted: true
      });

      const handleSubmit = () => {
          console.log('in handlesubmit')
          setValue({
              ...value,
              submitted: false
          })
      }

     return(
        <div className='container'>
            {console.log(value.submitted)}
            {value.submitted?
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-9'>
                        <Card style={{ width: '33rem',marginTop:'17%',textAlign:'center' }}>
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title style={{color:'red',fontSize:'2em'}}>Upload Image of Ship</Card.Title>
                                <br /><br />
                                {/*<Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>*/}
                                <Form>
                                    <Form.File 
                                        id="custom-file-translate-scss"
                                        label="Insert File"
                                        lang="en"
                                        custom
                                    />
                                </Form>
                                <br />
                                <Button variant="primary" onClick={() => handleSubmit()}>Submit</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                    :
                <div className='row'>
                    <div className='col-md-12'>
                        <FindShip />
                    </div>
                </div>
            }
        </div>
     )
}

export default ImageDetection