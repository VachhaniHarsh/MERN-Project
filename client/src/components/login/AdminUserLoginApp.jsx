import { useState } from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import {Si1Password, SiGnuprivacyguard} from 'react-icons/si';
import { authenticateSignup } from "../../service/Service";

const AdminLoginInitialvalue ={
  phone:'',
  password:''
}

const AdminUserLoginApp = () => {
 
  const [adminLogin,setLogin]=useState(AdminLoginInitialvalue)

  const OnChangeValue = (e) =>{
    setLogin({...adminLogin,[e.target.name]:e.target.value});
    console.log(adminLogin)
  }

  const clickHandler = async () =>{
    const response  = await(authenticateSignup(adminLogin));  
    if(!response)
    {
      console.log("Invalid login");
      setLogin({...adminLogin, password :''});
    }
    alert("User created Successfully");
    setLogin(AdminLoginInitialvalue);
  }
  
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
                Create User
        </h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add user phone number without country code</Form.Label>
          <Form.Control type="phone" onChange = {(e)=>{OnChangeValue(e)}} name = "phone" value ={adminLogin.phone}placeholder="Enter User phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Add user password</Form.Label>
          <Form.Control type="password" onChange={(e)=>{OnChangeValue(e)}} name = "password" value = {adminLogin.password}placeholder="Create a User password" />
        </Form.Group>
        <div class="d-flex justify-content-center">  
          <Button variant="dark" type="submit" onClick = {()=>{clickHandler()}}>
            Get me in
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AdminUserLoginApp;
