import React, { useEffect, useState } from 'react';
import Card from './Component/Card';
import './App.css';
import Header from './Component/Header';
import SearchName  from './Component/SearchName';

const App = () => {
    const [movie, setMovie] = useState([]);
    const fetchData = () => {
        return fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            .then((response) => response.json())
            .then((data) => setMovie(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    const Cards = (id) =>
    {
        return ( <Card key={id.Year} title={id.Title} release={id.Year} img_src={id.Poster} />) 
    }
    return (
        <>

            <SearchName/>
            <Header />
            <div className="series-list">
                {movie.map(Cards)}
            </div>
        </>
    );
}

export default App;
