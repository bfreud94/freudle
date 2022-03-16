import wordList from './wordList'

export const emptyBoardMatrix = () => ([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
])

export const generateWordSet = () => {
    const set = new Set()
    wordList.forEach(word => set.add(word))
    return set
}

export const generateTodaysWord = () => (
    wordList[Math.floor(Math.random() * wordList.length)]
)