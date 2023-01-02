import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import Header from './Component/Header';

const App = () => {
    const [user, setUser] = useState([]);
    const fetchData = () => {
        return fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Header />
            <Card />
        </>
    );
}

export default App;
