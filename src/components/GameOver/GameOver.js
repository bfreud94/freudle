import React, { useContext } from 'react'
import { AppContext } from '../../App'

const GameOver = () => {
    const { gameOver, currentAttempt, correctWord, resetGame } = useContext(AppContext)
    const { attempt } = currentAttempt
    const { guessedWord } = gameOver
    return (
        <div>
            <h3>{guessedWord ? 'You correctly guessed!' : 'You failed'}</h3>
            <h1>Correct word: {correctWord}</h1>
            {guessedWord && (<h3>You guessed in {attempt} attempts</h3>)}
            <button onClick={resetGame}>Replay</button>
        </div>
    )
}

export default GameOver