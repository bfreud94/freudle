import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import styles from './Letter.styles'

const Letter = ({ letterPos, attemptVal }) => {
    const { board, correctWord, currentAttempt, setDisabledLetters, almostLetters, setAlmostLetters, correctLetters, setCorrectLetters } = useContext(AppContext)
    const { attempt } = currentAttempt
    const letter = board[attemptVal][letterPos]
    const correct = correctWord.toUpperCase()[letterPos] === letter
    const almost = attempt > attemptVal && !correct && letter !== '' && correctWord.toUpperCase().includes(letter)

    const id = `${attemptVal}.${letterPos}`

    useEffect(() => {
        if (letter !== '') {
            if (!correct && !almost) {
                setDisabledLetters((prev) => [...prev, letter])
            } else if (correct) {
                if (almostLetters.includes(letter)) setAlmostLetters([...almostLetters.filter(i => i !== letter)])
                setCorrectLetters((prev) => [...prev, letter])
            } else if (almost) {
                if (correctLetters.includes(letter)) setCorrectLetters([...correctLetters.filter(i => i !== letter)])
                setAlmostLetters((prev) => [...prev, letter])
            }
        }

    }, [attempt])
    return (
        <div className='animate__animated' style={styles.letter} id={id}>
            {letter}
        </div>
    )
}

export default Letter