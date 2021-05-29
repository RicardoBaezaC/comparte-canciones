import React, { useState, useEffect } from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function SwipeButtons ({handleClick}){
    console.log(handleClick);
    return (
        <div className="swipeButtons">
            <IconButton className="left_button">
                <KeyboardArrowLeftIcon fontSize="large" />
            </IconButton>
            <button onClick={handleClick}>Hola</button>
            <IconButton className="repeat_button">
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="right_button">
                <KeyboardArrowRightIcon fontSize="large" />
            </IconButton>
        </div>
    );
}