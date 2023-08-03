import React from "react";
import { useSelector } from "react-redux";
import './CharacterDetail.css'

export default function CharacterDetail() {
    const char = useSelector((state) => state.characterDetail);
    console.log(char)
    return (<>
        {char && char.name && <>
            <h1>{char.name}</h1>
            <div className="character-detail-body">
                <div className="character-detail-image">
                    <img className="character-detail-image-absolute" src='https://i.pinimg.com/originals/49/5f/f5/495ff50ae67b0a9c94f4ba9a10d93998.png' alt={char.name} />
                    <img className="character-detail-image-absolute-index-2" src={char.image} alt={char.name} />
                </div>
                <div className="character-detail-info">
                    <div>Gender: <strong>{char.gender}</strong></div>
                    <div>Species: <strong>{char.species}</strong></div>
                    <div>Status:<strong>{char.status}</strong></div>
                    <div>Location:<strong>{char.location.name}</strong></div>
                    <div>Origin:<strong>{char.origin.name}</strong></div>
                </div>
            </div></>}
    </>
    )
}