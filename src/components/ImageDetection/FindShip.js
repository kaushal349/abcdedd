import React,{Component} from 'react' 
import {Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
//import { ShipsID } from '../../extras/ShipsId';

const FindShip = (props) => {

    let shipsData = require('../../JsonData/final_AIS_data.json');
    let shipsImages = require('../../JsonData/mmsi_image')
    let shipsIDs = require('../../extras/ShipsId')
    const shipid =   shipsIDs['ShipsID'][Math.floor(Math.random() * 100) + 1]
    const history = useHistory();

    return(
            <div className="container">
                <div className='row'>
                    <Card border='danger' style={{ width: '45rem',marginLeft:'15%',marginTop:'5%',textAlign:'center'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'center'}}><b>{shipsData['Vessel Name'][shipid]}</b></Card.Title>
                            <Card.Text style={{fontWeight:'bold'}}>
                                <div style={{height:'13em',textAlign:'center'}}>
                                    <img
                                    src={shipsImages['Image URL'][shipsData['MMSI'][shipid]]}
                                    height='100%'
                                    width='60%'
                                    />
                                </div>
                                <br /> <br /> <br />
                                <div className='row'>
                                    <div className='col-md-6'>
                                        Course: {shipsData['Course'][shipid]}
                                    </div>
                                    <div className='col-md-6'>
                                    Speed: (Kn) {shipsData['Speed (Kn)'][shipid]}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    Length Overall: {shipsData['Length (m)'][shipid]}
                                    </div>
                                    <div className='col-md-6'>
                                    Last Updated: {shipsData['Last Updated'][shipid]}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    Current Draught: {shipsData['Current Draught'][shipid]}
                                    </div>
                                    <div className='col-md-6'>
                                    GT: {shipsData['Gross Tonnage'][shipid]}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    Built: {shipsData['Year of Built'][shipid]}
                                    </div>
                                    <div className='col-md-6'>
                                    IMO number: {shipsData['IMO'][shipid]}
                                    </div>
                                </div>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
    )
    
}

export default FindShip