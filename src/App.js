import React, { createContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Board from './components/Board/Board'
import Keyboard from './components/Keyboard/Keyboard'
import GameOver from './components/GameOver/GameOver'
import { emptyBoardMatrix, generateTodaysWord } from './util/index'
import { generateWordSet } from './util/index'
import { onDeleteAction, onEnterAction, onSelectLetterAction, resetGameAction } from './util/actions'
import styles from './App.styles'

export const AppContext = createContext()

const wordLength = 5
const totalGuesses = 6

const test = ''

const App = () => {
    const [board, setBoard ] = useState(emptyBoardMatrix())
    const [currentAttempt, setCurrentAttempt] = useState({
        attempt: 0,
        letterPos: 0
    })

    const [wordSet, setWordSet] = useState(new Set())

    const [gameOver, setGameOver] = useState({
        isGameOver: false,
        guessedWord: false
    })
    
    const [almostLetters, setAlmostLetters] = useState([])
    const [correctLetters, setCorrectLetters] = useState([])
    const [disabledLetters, setDisabledLetters] = useState([])

    const [correctWord, setCorrectWord] = useState('')

    useEffect(() => {
        setWordSet(generateWordSet())
        setCorrectWord(generateTodaysWord())
    }, [])

    const onSelectLetter = (keyVal) => onSelectLetterAction(
        keyVal,
        board,
        currentAttempt,
        setBoard,
        setCurrentAttempt
    )

    const onDelete = () => onDeleteAction(
        currentAttempt,
        board,
        setBoard,
        setCurrentAttempt
    )

    const onEnter = () => onEnterAction(
        currentAttempt,
        board,
        wordSet,
        correctWord,
        styles,
        setCurrentAttempt,
        setGameOver
    )

    const resetGame = () => resetGameAction(
        setBoard,
        setCorrectWord,
        setGameOver,
        setDisabledLetters,
        setCorrectLetters,
        setAlmostLetters,
        setCurrentAttempt
    )
    return (
        <div style={styles.app}>
            <Header />
            <AppContext.Provider value={{
                    board,
                    setBoard,
                    currentAttempt,
                    setCurrentAttempt,
                    onSelectLetter,
                    onDelete,
                    onEnter,
                    correctWord,
                    disabledLetters,
                    setDisabledLetters,
                    almostLetters,
                    setAlmostLetters,
                    correctLetters,
                    setCorrectLetters,
                    gameOver,
                    setGameOver,
                    resetGame}}>
                <div style={{...styles.game, ...(gameOver.isGameOver && {...styles.gameOver})}}>
                    <Board wordLength={wordLength} totalGuesses={totalGuesses} />
                    {!gameOver.isGameOver ? <Keyboard /> : <GameOver />}
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App