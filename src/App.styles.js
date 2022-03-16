export default {
    app: {
        backgroundColor: '#121212',
        color: 'white',
        height: '100vh',
        width: '100vw',
        textAlign: 'center'
    },
    game: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 170px)',
        paddingTop: '50px',
        width: '100vw',
    },
    tileStyles: {
        correct: {
            backgroundColor: '#528d4e'
        },
        almost: {
            backgroundColor: '#b49f39'
        },
        error: {
            backgroundColor: '#3a393c'
        }
    }
}