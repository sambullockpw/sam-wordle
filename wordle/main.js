import { createBoard, createKeyboard, listenForLetters, showResult, showSnackbar, rLookUp, state } from "./wordle.js"

window.addEventListener("DOMContentLoaded", () => {
    // Initialise the UI
    const board = document.querySelector(".board");
    const keyboard = document.querySelector(".keyboard")
    createBoard(board)
    createKeyboard(keyboard)

    const websocket = new WebSocket(getWebSocketServer());
    initGame(websocket);
    receiveResults(board, websocket);
    sendGuesses(board, websocket);
    listenForLetters(board);
});

function initGame(websocket) {
    websocket.addEventListener("open", () => {
        // Send an "init" event according to who is connecting"
        const params = new URLSearchParams(window.location.search);
        let event = {type: "init"};
        // Player starts a new game
        websocket.send(JSON.stringify(event));
    });
};

function receiveResults(board, websocket) {
    websocket.addEventListener("message", ({data}) => {
        const event = JSON.parse(data);
        switch (event.type) {
            case "guessResult":
                // Update the UI with result
                // console.log(event)
                const result = event.result
                showResult(result);
                break
            case "error":
                showSnackbar(event.message);
                break
            default:
        }
    })
};

function sendGuesses(board, websocket) {    
    // when pressing enter, send a "guess" event
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "Enter":
                // Send event
                const guess = {
                    "type": "guess",
                    "word": state.guess
                };
                    websocket.send(JSON.stringify(guess))
                    break
            default:
        }
    });
    const enterButton = document.getElementById("ENTER")
    enterButton.addEventListener("click", () => {
        // Send event
        const guess = {
            "type": "guess",
            "word": state.guess
        };
        websocket.send(JSON.stringify(guess))
    });
}

function showMessage(message) {
    window.setTimeout(() => window.alert(message), 50);
}


function getWebSocketServer() {
    if (window.location.host === "sambullockpw.github.io") {
        return "wss://sam-wordle.herokuapp.com/";
    } else if (window.location.host === "localhost:8000") {
        return "ws://localhost:8001/";
    } else {
        throw new Error(`Unsupported host: ${window.location.host}`);
    }
}
    