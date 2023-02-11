import React from 'react';
import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import { Pages } from './Pages';
import questions from './questions';

function App() {
  const [page, setPage] = useState(Pages.Home);
  const [aCount, setACount] = useState(0);
  const [bCount, setBCount] = useState(0);
  const [cCount, setCCount] = useState(0);
  const [dCount, setDCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const startClicked = () => {
    setPage(Pages.Quiz)
  }

  const aClicked = () => {
    setACount(aCount + 1);
    nextQuestion();
  }

  const bClicked = () => {
    setBCount(bCount + 1);
    nextQuestion();
  }

  const cClicked = () => {
    setCCount(cCount + 1);
    nextQuestion();
  }

  const dClicked = () => {
    setDCount(dCount + 1);
    nextQuestion();
  }

  const nextQuestion = () => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  const restartQuiz = () => {
    setPage(Pages.Home);
    setACount(0);
    setBCount(0);
    setCCount(0);
    setDCount(0);
    setQuestionIndex(0);
  }

  if (page === Pages.Home) {
    return <HomePage startClicked={startClicked}></HomePage>
  } else {
    return <QuizPage totals={[aCount, bCount, cCount, dCount]} questionIndex={questionIndex} aClicked={aClicked} bClicked={bClicked} cClicked={cClicked} dClicked={dClicked} restartClicked={restartQuiz}></QuizPage>;
  }
}

export default App;
