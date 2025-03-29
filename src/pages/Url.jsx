import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

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
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Url Name</th>
                    <th>Url</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                {urls.map(url =>
                    <tr key = {url.url_id}>
                    <td>{url.url_id}</td>
                    <td>{url.name}</td>
                    <td>{url.url}</td>
                    <td>
                        <Button variant="primary">save</Button>
                        <Button variant="success">rescan</Button>
                        <Button variant="danger">remove</Button>
                    </td>
                    </tr>
                    )}

                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Url Name</th>
                    <th>Url</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                {urls.map(url =>
                    <tr key = {url.url_id}>
                    <td>{url.url_id}</td>
                    <td>{url.name}</td>
                    <td>{url.url}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Url;