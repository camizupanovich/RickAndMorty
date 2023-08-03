import React from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";
import img from '../../assets/hero-logo.png'
import Button from '@mui/material/Button';
export default function LandingPage(){
    return(
        <div className="body-landing">
            <img src={img} alt="Rick and Morty" className="img-landing"/>
            <p className="description-landing">The Rick & Morty app has arrived to help you find the episode you were looking for.</p>
        <Link to="/playground" className="btn-landing"><Button variant="contained"> Get Start</Button></Link>
        </div>
    )
}