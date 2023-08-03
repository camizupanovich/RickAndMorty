import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../global-state/actions";
import { Button } from "@mui/material";
import './CharacterPaginator.css'
export default function CharacterPaginator(props) {
    const dispatch = useDispatch();
    let actualPage = props.prev !== null ? parseInt(props.prev?.split('?page=')[1]) : 0;
    return (
        <>
            <div className="paginator-btn-container">
                <Button variant="contained" size="small" disabled={props.prev === null} onClick={(e) => dispatch(changePage(props.prev, props.section))}>Previous page</Button>
                <Button variant="contained" size="small" disabled={props.next === null} onClick={(e) => dispatch(changePage(props.next, props.section))}>Next page</Button>
            </div>
            {props.pages&& props.next? <div className="paginator-title-container">Showing page <strong>{actualPage +1}</strong> of <strong>{props.pages}</strong></div> :null}
        </>
    )
}