import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './EpisodeCard.css';
export default function EpisodeCard({ id }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (id) {
            axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            {data ? <div className="episode-card-body">
                <div className="episode">{data.episode}</div>
                <div className="episode-name"> "{data.name}"</div>
                <small className="episode-release-div"><span className="episode-release">Release: </span> {data.air_date}</small>
            </div> : null}
        </>)
}