import React from "react";
import CharacterCard from "../character-card/CharacterCard";
import CharacterPaginator from "../character-paginator/CharacterPaginator";
import './CharacterContainer.css'
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Skeleton } from "@mui/material";
import { useDispatch } from "react-redux/es";
import { removeCharacter } from "../../global-state/actions";

export default function CharacterContainer({ characters, section, next, prev, pages, selected, title }) {
    const loading = useSelector((state) => state.loadingChar)
    const dispatch = useDispatch();
    let selectedSection = section + '_CHARACTER_SELECTED'
    let charNumber = section === 'LEFT' ? 'Character #1' : 'Character #2'
    let modal = title ? true : false;
    const changeCharacter = () => {
        dispatch(removeCharacter(section + '_REMOVE'));
        modal = false
    }
    return (
        <div className="character-container-body">
            {title ? (<div className="character-title"><strong>{title && title.name}</strong> Selected!</div>) : (<div className="character-title">Choose <strong>{charNumber}</strong></div>)}
            <div className="character-container-grid">
                {!loading && characters?.map((c) => {
                    return (
                        <CharacterCard key={c.id} id={c.id} name={c.name} status={c.status} avatar={c.image} selected={selected} section={selectedSection} actualChar={title} />
                    )
                })
                }{
                    loading ? Array.from(new Array(20)).map((item, i) => {
                        return (
                            <div key={i + 's'}>
                                <Skeleton variant="rectangular" width={180} height={180} />
                            </div>
                        )
                    }) : null
                }
            </div>
            <CharacterPaginator section={section} next={next} prev={prev} pages={pages} />
            {title ?
                <div className="modal-box">
                    <Button variant="contained" onClick={() => changeCharacter()}> Change Character</Button>
                    <div className="modal-character-selected">
                        <h3 className="modal-character-selected-title">{title.name}</h3>
                        <img src={title.image} alt={title.name} className="modal-character-selected-image" />
                    </div>
                </div> : null}
        </div>
    )
}