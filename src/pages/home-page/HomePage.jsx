import CharacterContainer from '../../shared/character-container/CharacterContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../global-state/actions';
import { Toolbar, AppBar, IconButton, Typography } from '@mui/material';
import CharacterEpisodes from '../../shared/character-episodes/CharacterEpisodes';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './HomePage.css'
export default function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharacters())
    }, [dispatch]);
    const charactersLeft = useSelector((state) => state.charactersLeft)
    const charactersRigth = useSelector((state) => state.charactersRigth)
    const infoLeft = useSelector((state) => state.infoLeft);
    const infoRigth = useSelector((state) => state.infoRigth);
    const selectedLeft = useSelector((state) => state.characterLeftSelected);
    const selectedRigth = useSelector((state) => state.characterRigthSelected);

    let commonEpisodes = []
    if (selectedLeft.episode && selectedRigth.episode) {
        selectedLeft.episode.forEach((a) => {
            let common = selectedRigth.episode.some(b => b === a);
            if (common) { commonEpisodes.push(a) };
        })
    }
    let commonTitle = selectedLeft && selectedRigth ? `${selectedLeft.name} AND ${selectedRigth.name} EPISODES` : 'Select two Characters to compare EPISODES'
    let leftTitle = selectedLeft ? `${selectedLeft.name} EPISODES` : 'You must select CHARACTER #1 to see the episodes'
    let rigthTitle = selectedRigth ? `${selectedRigth.name} EPISODES` : 'You must select CHARACTER #2 to see the episodes'
    return (
        <div className='homeBody'>
            <div className='grid-row cols-2'>
                <section id='1'>
                    <CharacterContainer characters={charactersLeft} section='LEFT' next={infoLeft.next} prev={infoLeft.prev} pages={infoLeft.pages} selected={selectedRigth} title={selectedLeft} />
                </section>
                <section id='2'>
                    <CharacterContainer characters={charactersRigth} section='RIGTH' next={infoRigth.next} prev={infoRigth.prev} pages={infoRigth.pages} selected={selectedLeft} title={selectedRigth} />
                </section>
            </div>
            <section id='3' className='grid-row cols-3'>
                <CharacterEpisodes episodes={selectedLeft.episode} title={leftTitle} />
                <CharacterEpisodes episodes={commonEpisodes} title={commonTitle} />
                <CharacterEpisodes episodes={selectedRigth.episode} title={rigthTitle} />
            </section>
            <div className='appBar-mobile'>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar sx={{ justifyContent: 'space-around' }}>
                        <IconButton color="inherit" >
                            <Typography><a href='#1'><EmojiEmotionsIcon></EmojiEmotionsIcon> #1</a></Typography>
                        </IconButton>
                        <IconButton color="inherit">
                        <a href='#3'><LiveTvIcon></LiveTvIcon></a> 
                        </IconButton>
                        <IconButton color="inherit">
                            <Typography>
                           <a href='#2'><EmojiEmotionsIcon></EmojiEmotionsIcon> #2</a> 
                           </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}