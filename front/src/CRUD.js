import React, { useState, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CRUD() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Name, setname] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");

  const [editID, setEditId] = useState("");
  const [editName, seteditname] = useState("");
  const [editage, seteditAge] = useState("");
  const [editcompany, seteditCompany] = useState("");
  const empdata = [
    {
      Id: 1,
      Name: "Manoj",
      age: 29,
      company: "asdf",
    },
    {
      Id: 2,
      Name: "Oleg",
      age: 49,
      company: "adfdsdf",
    },
    {
      Id: 3,
      Name: "sam",
      age: 20,
      company: "aasdfsdf",
    },
  ];

  const [data, setDate] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:5053/api/Worcker").then((result) => {
      setDate(result.data);
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  const handleEdit = (Id) => {
    alert(Id);
    //handleShow(Id);
  };
  const handleDelete = () => {
    if (window.confirm("Вы хотите удалить пользователя?") == true) {
      axios.delete(`http://localhost:5053/api/Worcker/${Id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("delete");
            getData();
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const handleSave = () => {
    const url = "http://localhost:5053/api/Worcker";
    const data = {
      name: Name,
      age: age,
      company: company,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("asdfasd");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setname("");
    setAge("");
    setCompany("");
    seteditname("");
    seteditAge("");
    seteditCompany("");
    setEditId("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="Enter Name"
              value={Name}
              onChange={(e) => setname(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col>
            {" "}
            <input
              type="text"
              placeholder="Enter company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Col>
          <Col>
            <button onClick={() => handleSave()}>Submit</button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>age</th>
            <th>company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{item.Name}</td>
                    <td>{item.age}</td>
                    <td>{item.company}</td>
                    <td colSpan={2}>
                      <button onClick={() => handleEdit(item.Id)}>Edit</button>
                      <button onClick={() => handleDelete(item.Id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CRUD;
