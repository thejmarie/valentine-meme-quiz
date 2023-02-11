import React, { useState } from 'react';
import '../css/QuizPage.css';
import { Fade } from '@mui/material';
import questions from '../questions';
import memeA from '../img/memeA.jpg';
import memeB from '../img/memeB.jpg';
import memeC from '../img/memeC.jpg';
import memeD from '../img/memeD.jpg';
import letterStyled from '../img/letterStyled.png';

interface Props {
    totals: Array<number>,
    questionIndex: number,
    aClicked: () => void;
    bClicked: () => void;
    cClicked: () => void;
    dClicked: () => void;
    restartClicked: () => void;
}

function QuizPage({ totals, questionIndex, aClicked, bClicked, cClicked, dClicked, restartClicked }: Props) {
    const [displayLetter, setDisplayLetter] = useState(false);
    const [letterSeen, setLetterSeen] = useState(false);

    function indexOfMax(arr: Array<number>) {
        if (arr.length === 0) {
            return -1;
        }
        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    return (
        <div className="quiz-page-wrapper">
            <Fade in={true} timeout={500}>
                <div className="quiz-page-popup">
                    {totals.reduce((partialSum, a) => partialSum + a, 0) < 15 ?
                        (<>
                            <h1 className="question-number">Question #{questionIndex + 1}</h1>
                            <p className="question">{questions[questionIndex]["question"]}</p>
                            <table className="quiz-table" cellSpacing="0">
                                <tr>
                                    <td onClick={() => aClicked()}>
                                        <img src={questions[questionIndex]["a-img"]} />
                                        <p className="answer-caption">{questions[questionIndex]["a"]}</p>
                                    </td>
                                    <td onClick={() => bClicked()}>
                                        <img src={questions[questionIndex]["b-img"]} />
                                        <p className="answer-caption">{questions[questionIndex]["b"]}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td onClick={() => cClicked()}>
                                        <img src={questions[questionIndex]["c-img"]} />
                                        <p className="answer-caption">{questions[questionIndex]["c"]}</p>
                                    </td>
                                    <td onClick={() => dClicked()}>
                                        <img src={questions[questionIndex]["d-img"]} />
                                        <p className="answer-caption">{questions[questionIndex]["d"]}</p>
                                    </td>
                                </tr>
                            </table>
                        </>)
                        :
                        (<>
                            <h1 className="question-number">The Results are In!</h1>
                            <img className="result-img" src={memeA} style={{ display: !displayLetter && 0 === indexOfMax(totals) ? "inline-block" : "none" }} />
                            <img className="result-img" src={memeB} style={{ display: !displayLetter && 1 === indexOfMax(totals) ? "inline-block" : "none" }} />
                            <img className="result-img" src={memeC} style={{ display: !displayLetter && 2 === indexOfMax(totals) ? "inline-block" : "none" }} />
                            <img className="result-img" src={memeD} style={{ display: !displayLetter && 3 === indexOfMax(totals) ? "inline-block" : "none" }} />
                            <img className="result-img" src={letterStyled} style={{ display: displayLetter ? "inline-block" : "none" }} />
                            <button className="border-button-results" onClick={() => {
                                setDisplayLetter(!displayLetter);
                                setLetterSeen(true);
                            }}><p className="border-button-results-p">Click here!</p></button>
                            <button className="border-button-results" style={{display: letterSeen? "inline-block": "none"}} onClick={() => {
                                restartClicked()
                            }}><p className="border-button-results-p">Play Again</p></button>
                        </>)}

                </div>
            </Fade>
        </div >
    );
}

export default QuizPage;
