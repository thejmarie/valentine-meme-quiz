import React from 'react';
import '../css/HomePage.css';
import { Fade } from '@mui/material';

interface Props {
    startClicked: () => void;
}

function HomePage({ startClicked }: Props) {
    return (
        <div className="home-page-wrapper">
            <Fade in={true} timeout={500}>
                <div>
                    <h1 className="home-title">Valentine's</h1>
                    <h1 className="home-title-bottom">Day Quiz</h1>
                    <p className="home-p">In Madrid, you said that my love language is quizzes... well, here's a fun Buzzfeed-style quiz I made! Answer these 15 questions to reveal a Valentine's Day related meme. There are 4 possible results in total! Good luck and have fun :)</p>
                    <button className="border-button" onClick={() => startClicked()}><p className="border-button-p">Begin</p></button>
                </div>
            </Fade>
        </div>
    );
}

export default HomePage;
