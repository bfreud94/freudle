import { emptyBoardMatrix, generateTodaysWord } from './index'

export const onSelectLetterAction = (
    keyVal,
    board,
    currentAttempt,
    setBoard,
    setCurrentAttempt
) => {
    const { attempt, letterPos } = currentAttempt
    if (letterPos > 4) return
    const newBoard = [...board]
    newBoard[attempt][letterPos] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, letterPos: letterPos + 1})
}

export const onDeleteAction = (
    currentAttempt,
    board,
    setBoard,
    setCurrentAttempt
) => {
    const { attempt, letterPos } = currentAttempt
    if (letterPos === 0) return
    const newBoard = [...board]
    newBoard[attempt][letterPos - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({ ...currentAttempt, letterPos: letterPos - 1})
}

export const onEnterAction = (
    currentAttempt,
    board,
    wordSet,
    correctWord,
    styles,
    setCurrentAttempt,
    setGameOver
) => {
    const { attempt, letterPos } = currentAttempt
    if (letterPos !== 5) return
    let currentWord = ''
    for (let i = 0; i < 5; i++) {
        currentWord += board[attempt][i]
    }
    if (wordSet.has(currentWord.toLowerCase())) {
        board[attempt].forEach((letter, attemptVal) => {
            setTimeout(() => {
                const correct = correctWord.toUpperCase()[attemptVal] === letter
                const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter)
                const letterState = correct ? styles.tileStyles.correct : almost ? styles.tileStyles.almost : styles.tileStyles.error
                document.getElementById(`${attempt}.${attemptVal}`).classList.add('animate__flipInX')
                document.getElementById(`${attempt}.${attemptVal}`).style.backgroundColor = letterState.backgroundColor
            }, 300 * (attemptVal + 1))
        })
        setCurrentAttempt({ attempt: attempt + 1, letterPos: 0})
    } else {
        alert('Word not found')
        return
    }

    if (currentWord.toLowerCase() === correctWord.toLowerCase()) {
        setGameOver({isGameOver: true, guessedWord: true})
        return
    }

    if (attempt === 5) {
        setGameOver({isGameOver: true, guessedWord: false})
    }
}

export const resetGameAction = (
    setBoard,
    setCorrectWord,
    setGameOver,
    setDisabledLetters,
    setCurrentAttempt
) => {
    setBoard(emptyBoardMatrix())
    setCorrectWord(generateTodaysWord())
    setGameOver({
        isGameOver: false,
        guessedWord: false
    })
    setDisabledLetters([])
    setCurrentAttempt({
        attempt: 0,
        letterPos: 0
    })
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById(`${i}.${j}`).style.backgroundColor = ''
            document.getElementById(`${i}.${j}`).classList.remove('animate__flipInX')
        }
    }
}