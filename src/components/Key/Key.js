import React, { useContext } from 'react'
import { AppContext } from '../../App'
import styles from './Key.styles'

const Key = ({ keyVal, bigKey = false, disabled }) => {
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
    return (
        <div style={{...styles.key, ...bigKey && styles.bigKey, ...disabled && styles.disabled}} onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key