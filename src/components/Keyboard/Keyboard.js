import React, { useCallback, useContext , useEffect } from 'react'
import Key from '../Key/Key'
import { AppContext } from '../../App'
import styles from './Keyboard.styles'

const Keyboard = (props) => {
    const { onSelectLetter, onDelete, onEnter, disabledLetters } = useContext(AppContext)

    const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    const handleKeyboard = useCallback((event) => {
        if (event.key === 'Enter') onEnter()
        else if (event.key === 'Backspace') onDelete()
        else {
            [...topRow, ...middleRow, ...bottomRow].forEach(key => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        } 
    }, [handleKeyboard])
    return (
        <div style={styles.keyboard} onKeyDown={handleKeyboard}>
            <div style={styles.topRow}>{topRow.map(letter => <Key key={letter} keyVal={letter} disabled={disabledLetters.includes(letter)} />)}</div>
            <div style={styles.middleRow}>{middleRow.map(letter => <Key key={letter} keyVal={letter} disabled={disabledLetters.includes(letter)} />)}</div>
            <div style={styles.bottomRow}>
                <Key keyVal={'ENTER'} bigKey={true} />
                {bottomRow.map(letter => <Key key={letter} keyVal={letter} disabled={disabledLetters.includes(letter)}/>)}
                <Key keyVal={'DELETE'} bigKey={true} />
            </div>
        </div>
    )
}

export default Keyboard