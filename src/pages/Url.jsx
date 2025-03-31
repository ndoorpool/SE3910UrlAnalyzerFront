import { useEffect, useState } from "react";
import { Table, Button, Container, ListGroup, Form } from "react-bootstrap";

function Url() {

    const [urls, setUrl] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/urls", {method:"GET"})
        .then(res =>res.json())
        .then(res =>{
            setUrl(res);
        })
    },[])

    return (
        <Container fluid>
            <Form className="url-input rounded-top d-flex justify-content-center">
                <Form.Group className="d-flex m-3" controlId="formBasicPassword">
                    <Form.Label>Enter URL:</Form.Label>
                    <Form.Control type="url" placeholder="www.example.com" />
                </Form.Group>
                <Button variant="light" type="submit" className="my-3">
                    Analyze
                </Button>
            </Form>
            <ListGroup className="url-information rounded-0">
                <div className="d-flex"><label for="lgi1" className="fw-bold flex-shrink-1 p-3 my-1">SLL PROTOCOL/CIPHER:</label><ListGroup.Item id="lgi1" className = "rounded m-2 p-3 flex-grow-1"></ListGroup.Item></div>
                <div className="d-flex"><label for="lgi2" className="fw-bold flex-shrink-1 p-3 my-1">RESPONSE CODE:</label><ListGroup.Item id="lgi2" className = "rounded m-2 p-3 flex-grow-1"></ListGroup.Item></div>
                <div className="d-flex"><label for="lgi3" className="fw-bold flex-shrink-1 p-3 my-1">SSL CERTIFICATE:</label><ListGroup.Item id="lgi3" className = "rounded m-2 p-3 flex-grow-1"></ListGroup.Item></div>
                <div className="d-flex"><label for="lgi4" className="fw-bold flex-shrink-1 p-3 my-1">EXPIRATION:</label><ListGroup.Item id="lgi4" className = "rounded m-2 p-3 flex-grow-1"></ListGroup.Item></div>
                <div className="d-flex"><label for="lgi5" className="fw-bold flex-shrink-1 p-3 my-1">RESPONSE HEADERS:</label><ListGroup.Item id="lgi5" className = "rounded m-2 p-3 flex-grow-1"></ListGroup.Item></div>
            </ListGroup>
            <Container fluid className="url-saved rounded-bottom text-center p-2">
                <label for="saved-table" className="fw-bold m-2 text-decoration-underline">RECENT SCANS</label>
                <Table striped bordered hover id="saved-table" className="justify-content-center">
                    <thead>
                        <tr>
                        <th>Url Name</th>
                        <th>Url</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    {urls.map(url =>
                        <tr key = {url.url_id}>
                        <td>{url.name}</td>
                        <td>{url.url}</td>
                        <td>
                            <Button id="edit" className="text-dark mx-2">Edit</Button>
                            <Button id="rescan" className="shadow-none text-dark mx-2">Rescan</Button>
                            <Button id="remove" className="shadow-none text-dark mx-2">Remove</Button>
                        </td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
}

export default Url;