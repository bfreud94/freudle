import React, { useContext } from 'react'
import { AppContext } from '../../App'
import styles from './Key.styles'

const Key = ({ keyVal, bigKey = false, disabled, almost, correct }) => {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext)
    const selectLetter = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === 'DELETE') {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }
    const keyStyles = {...styles.key, ...bigKey && styles.bigKey, ...disabled && styles.disabled, ...correct && styles.correct, ...almost && styles.almost}
    return (
        <div style={keyStyles} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key