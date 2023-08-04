import React from "react";
import EpisodeCard from "../episode-card/EpisodeCard";
import './CharacterEpisodes.css'

export default function CharacterEpisodes(props) {
    return (
        <div className="character-episodes-body">
        <strong className="character-episodes-title">{props.title}</strong>
        {props &&props.episodes?.length? <div className="character-episodes-container">
            {props && props.episodes?.map((e,i) => {
                let idEpisode=parseInt(e?.split('episode/')[1])
                return (
                    <EpisodeCard key={i} id={idEpisode}/>
                )
            })}
        </div>:<p>Not data to display! Try to choose new Characters.</p>}
        </div>
    )
}