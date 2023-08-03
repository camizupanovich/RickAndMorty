import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../global-state/actions";
import CharacterCard from "../../shared/character-card/CharacterCard";
import CharacterPaginator from "../../shared/character-paginator/CharacterPaginator";
import { Link } from "react-router-dom";


export default function CharactersPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch]);
    const characters = useSelector((state) => state.allCharacters)
    const info = useSelector((state) => state.paginatorInfo)
    return (
        <> <h1>Explore more about the characters by clicking the card.</h1>
            <div className="character-container-grid">
                {characters?.map((c) => {
                    return (
                        <Link key={c.id} to={`/character/${c.id}`}>
                            <CharacterCard id={c.id} name={c.name} status={c.status} avatar={c.image} selected={false} section={'CHARACTER_DETAIL'} actualChar={false} />
                        </Link>
                    )
                })
                }
                <CharacterPaginator section='ALL_CHARACTERS' next={info.next} prev={info.prev} pages={info.pages} />
            </div>
        </>
    )
}