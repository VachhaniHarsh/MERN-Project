import { useState } from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import {Si1Password, SiGnuprivacyguard} from 'react-icons/si';
import { authenticateSignup } from "../../service/Service";
import { useHistory } from 'react-router-dom';

const AdminLoginInitialvalue ={
  phone:'',
  password:''
};

const AdminUserLoginApp = () => {
 
  const [adminLogin,setLogin]=useState(AdminLoginInitialvalue)
  const history = useHistory();
  const OnChangeValue = (e) =>{
    setLogin({...adminLogin,[e.target.name]:e.target.value});
    console.log(adminLogin)
  }

  // console.log("Harsh vachhani"); 

  const clickHandler = async () =>{
    let response  = await(authenticateSignup(adminLogin));  
    if(!response)
    {
      alert("Invalid login");
      setLogin({...adminLogin, password :''});
      return;
    }
    // else {
      alert("User created Successfully");
      setLogin(AdminLoginInitialvalue);
      console.log(adminLogin);
      history.push('/UserLogin');
      
    // }
  }

  // console.log("Harsh vachhani");
  
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
        <Form.Group className="mb-3">
          <Form.Label>Add user phone number without country code</Form.Label>
          <Form.Control type="phone" onChange = {(e)=>{OnChangeValue(e)}} name = "phone" value ={adminLogin.phone}placeholder="Enter User phone number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Add user password</Form.Label>
          <Form.Control type="password" onChange={(e)=>{OnChangeValue(e)}} name = "password" value = {adminLogin.password}placeholder="Create a User password" />
        </Form.Group>
        <div class="d-flex justify-content-center">  
          <Button variant="dark" onClick = {()=>{clickHandler()}}>
            Get me in
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AdminUserLoginApp;