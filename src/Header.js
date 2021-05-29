import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link, useHistory } from 'react-router-dom';

export default function Header({backButton}){
    const history = useHistory();
    return(
        <div className="header">
                {!backButton ?
                    <IconButton>
                        <PersonIcon fontSize="large" className="header_icon"/>
                    </IconButton>
                    :
                    <IconButton onClick={()=> history.replace(backButton)}>
                        <KeyboardArrowLeftIcon fontSize="large" className="header_icon"/>
                    </IconButton>
                }
                
                
            <MusicNoteIcon fontSize="large" className="header_logo"/>
            <Link to="/add">
                <IconButton>
                    <AddIcon fontSize="large" className="header_icon"/>
                </IconButton>
            </Link>
        </div>
    );
}