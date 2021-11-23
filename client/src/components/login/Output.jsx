import { Col, Row, Card } from 'react-bootstrap';
import { useEffect, useState , useContext} from 'react';
import {FaClinicMedical} from 'react-icons/fa';
import axios from 'axios';
import { LoginContext } from '../../context/LoginState';

const url = 'http://localhost:4000/api';

const Output = () => {
    
    

    const {account,setAccount} = useContext(LoginContext);
    console.log(account);
    
    const medicinedata = account.phone;
    
    
    var [ userdata,setUserdata ] = useState([]);

    const userFinder = async (medicine) => {
        try {
            await axios.get(`${url}/med/search`,{'params':{phone: account.phone}})
            .then ((res) => {
                console.log(res.data);
                   setUserdata(userdata => ([...userdata, res.data]));
                console.log(userdata);
            })
        }catch(err) {
            console.log('Error while finding User',err);
        }
    }
    var i =0;
    var [ I,seI ] = useState(0);
    useEffect(() => {
        setUserdata([])
        userFinder(account);
        
    }, [medicinedata])

    const updateI = () => {
        i = 2;
        seI(i);
    };

    console.log(userdata[0]);

    if(i!=2){
        setInterval(updateI,1000);
    }


    return (
        <div>
        {
            I?
            <div>
            {
                userdata.length=== 0 ?
                // <Child  />
                <div className="d-flex justify-content-center">
                    {/* <Alert msg={"Medicine not found in your district"} color={'warning'}/> */}
                </div>
                :
                <Row xs={5} md={3} className="g-4" style={{margin: '3% 3%'}}>
                    {
                        userdata[0].map(user => (
                            <Col className = "mb-3">
                                <Card border="black" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: '#ffffff', borderWidth: '2px'}}>
                                    <Card.Body> 
                                        <Card.Title style={{textTransform: 'uppercase'}}><FaClinicMedical className="mb-2"/> {user.phone}</Card.Title>
                                        <Card.Text>
                                            <span style={{color:'#5cb85c'}}>Owner Name: </span>{user.amount}
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Shop Address: </span>{user.product}
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Pincode: </span>{user.sub_product}
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Phone: </span>{user.policy_type}
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Email: </span>{user.insurar}
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Features: </span>{user.start_date} 
                                            <br/>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            }
            </div>
            :
            <div/>
        }
        </div>
        
    )
}


export default Output;
