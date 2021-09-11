import { useState, useContext } from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Si1Password, SiGnuprivacyguard } from "react-icons/si";
import { authenticateSignup } from "../../service/Service";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../../context/LoginState";
import { CSVReader } from "react-papaparse";
import { BsUpload } from "react-icons/bs";

const AdminLoginInter = () => {
  //   const [adminUserCreateLogin,setLogin]=useState(AdminLoginInitialvalue)
  //   const history = useHistory();
  //   const {account,setAccount} =  useContext(LoginContext);
  //   const OnChangeValue = (e) =>{
  //     setLogin({...adminUserCreateLogin,[e.target.name]:e.target.value});
  //     console.log(adminUserCreateLogin)
  //   }

  // console.log("Harsh vachhani");

  return (
    <div style={{backgroundColor:'#053742'}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Card
          style={{
            margin: "200px auto",
            borderRadius: "5px",
            background: "rgba(255,255,255, 0.15)",
            padding: 30,
          }}
        >
          <h4
            style={{
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <BsUpload
              style={{ color: "#ffffff", fontSize: 20 }}
              className="mr-2"
            />
            Upload
          </h4>
          <CSVReader>
            <Form>
              <Form.Group
                controlId="formFileLg"
                className="my-3"
                style={{ color: "#fff", marginLeft: "25%" }}
              >
                <Form.Control type="file" size="lg" style={{ color: "#fff" }} />
              </Form.Group>
            </Form>
          </CSVReader>
          <Button
            size="lg"
            variant="success"
            type="submit"
            className="mx-auto"
            style={{ marginLeft: "40%", marginTop: 20 }}
          >
            Upload
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default AdminLoginInter;
