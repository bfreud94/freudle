import React from 'react'
import Letter from '../Letter/Letter'
import styles from './Board.styles'

const Board = ({ wordLength, totalGuesses}) => (
    <div style={styles.board}>
        {Array(totalGuesses).fill(0).map((_, attemptVal) => (
            <div style={styles.row} key={attemptVal}>
                {Array(wordLength).fill(0).map((_, letterPos) => (
                    <Letter key={`${attemptVal}.${letterPos}`} letterPos={letterPos} attemptVal={attemptVal} />
                ))}
            </div>
        ))}
    </div>
)

export default Board