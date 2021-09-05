import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import {SiGnuprivacyguard} from 'react-icons/si';
import { useState,useContext } from "react";

const LoginInitialvalue = {
  phone:'',
  password:''
};

const UserLogin = () => {

  const [login,setLogin] = useState(LoginInitialvalue);

  const onChangeValue = (e) => {
    setLogin({...login,[e.target.name]:e.target.value});
    console.log(login);
  };
  
  return (
    <Card
      style={{
        display: "flex",
        width: "35%",
        margin: "100px auto",
        borderRadius: "5px",
        background: "rgba(255,255,255, 0.15)",
        padding: 30,
        boxShadow: '2px 2px 2px 2px  rgb(0.8,0.8,0.8)'
      }}
      className="mx-auto"
    >
      <Form style={{ borderColor: "red" }}>
      <div class="d-flex justify-content-center">  
        <h3 style={{color: 'black', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 15,fontWeight:600}}>
                <SiGnuprivacyguard style={{color: 'black', fontSize: 30}} className="mr-2"/>
                User Login
        </h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" pattern="[0-9]*" placeholder="Enter phone number" onChange ={(e)=>onChangeValue(e)} name="phone" value={login.phone}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  onChange={(e)=>onChangeValue(e)}  value={login.password} name="password" placeholder="Enter your password"/>
        </Form.Group>
        <div class="d-flex justify-content-center">  
          <Button variant="dark" type="submit">
            Get me in
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default UserLogin;
