import React from "react";
import { useDispatch } from "react-redux";
import { selectCharacter } from "../../global-state/actions";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function CharacterCard(char) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSelect = (e) => {
        e.preventDefault();
        if (char.section === 'CHARACTER_DETAIL') {
            dispatch(selectCharacter(char.id, char.section));
            navigate(`/character/${char.id}`)
        } else {
            if (char.id === char.selected.id) {
                toast.error(`You've already selected ${char.name}, try comparing it with another.`, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                dispatch(selectCharacter(char.id, char.section));
            }
        }
    }
    let color = 'gray'
    if (char.status.toLowerCase() === 'alive') { color = 'green' }
    if (char.status.toLowerCase() === 'dead') { color = 'red' }
    let colorSelectedCard = 'white'
    if (char.actualChar.id === char.id) { colorSelectedCard = '#2196f3' }

    return (
        <>
            <Card className="character-card" sx={{ width: 180, backgroundColor: colorSelectedCard, height: 350 }}>
                <CardActionArea sx={{ height: '100%' }} onClick={(e) => handleSelect(e)}>
                    <CardMedia
                        component="img"
                        width="180"
                        image={char.avatar}
                        alt={char.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>
                            {char.name}
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                            <div style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                marginRight: '5px'
                            }}></div><Typography variant="body2" color="text.secondary">{char.status}
                            </Typography></div>
                    </CardContent>
                </CardActionArea>
            </Card >
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}