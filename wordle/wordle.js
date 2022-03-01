const rLookUp = ["A", "B", "C", "D", "E", "F"]

const state = {
    guess: "",
    score: 0,
    winner: {
        aInternal: 10,
        aListener: function(val) {},
        set a(val) {
          this.aInternal = val;
          this.aListener(val);
        },
        get a() {
          return this.aInternal;
        },
        registerListener: function(listener) {
          this.aListener = listener;
        }
      } 
}

state.winner.registerListener(function(val) {
    alert("You found todays word!");
  });

function createBoard(board) {
    // Inject stylesheet
    const linkElement = document.createElement("link");
    linkElement.href = import.meta.url.replace(".js", ".css");
    linkElement.rel = "stylesheet";
    document.head.append(linkElement);

    // Generate board
    const table = document.createElement("table");
    for (let r = 0; r < 6; r++) {
        const row = document.createElement("tr");
        for (let c = 0; c < 5; c++) {
            const cell = document.createElement("td");
            cell.className = `${rLookUp[r]}${c}`
            row.append(cell)
        }
        table.append(row)
    }
    board.append(table)
}

function createKeyboard(keyboard) {
    const buttons = [["Q","W","E","R","T","Y","U","I","O","P"],
                    ["A","S","D","F","G","H","J","K","L"],
                    ["ENTER","Z","X","C","V","B","N","M","←"]]

    const container = document.createElement("div");
    
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("div");
        row.className = "row"
        buttons[i].forEach(element => {
            const button = document.createElement("button");
            button.innerHTML = element
            if (element == "ENTER") {
                button.id = "enterButton"
                row.append(button)
            } else {
                button.addEventListener("click", (event) => {
                    if (event.target.innerHTML == "ENTER") {
                        
                    } else if (event.target.innerHTML == "←") {
                        state.guess = state.guess.slice(0, state.guess.length - 1)
                        removeLetter(state.guess.length)
                    } else {
                        addLetter(event.target.innerHTML, state.guess.length);
                    }
                    // console.log(event)
                });
                row.append(button)
            }
        });
        container.append(row)   
    }

    keyboard.append(container);
    

    

}

function listenForLetters(board) {
    window.addEventListener("keydown", (event) => {
        //console.log(event.key)
        switch (event.key) {
            case "a":
                addLetter("A", state.guess.length) 
                break;
            case "b":
                addLetter("B", state.guess.length)
                break;
            case "c":
                addLetter("C", state.guess.length)
                break;
            case "d":
                addLetter("D", state.guess.length)
                break;
            case "e":
                addLetter("E", state.guess.length)
                break;
            case "f":
                addLetter("F", state.guess.length)
                break;
            case "g":
                addLetter("G", state.guess.length)
                break;
            case "h":
                addLetter("H", state.guess.length)
                break;
            case "i":
                addLetter("I", state.guess.length)
                break;
            case "j":
                addLetter("J", state.guess.length)
                break;
            case "k":
                addLetter("K", state.guess.length)
                break;
            case "l":
                addLetter("L", state.guess.length)
                break;
            case "m":
                addLetter("M", state.guess.length)
                break;
            case "n":
                addLetter("N", state.guess.length)
                break;
            case "o":
                addLetter("O", state.guess.length)
                break;
            case "p":
                addLetter("P", state.guess.length)
                break;
            case "q":
                addLetter("Q", state.guess.length)
                break;
            case "r":
                addLetter("R", state.guess.length)
                break;
            case "s":
                addLetter("S", state.guess.length)
                break;
            case "t":
                addLetter("T", state.guess.length)
                break;
            case "u":
                addLetter("U", state.guess.length)
                break;
            case "v":
                addLetter("V", state.guess.length)
                break;
            case "w":
                addLetter("W", state.guess.length)
                break;
            case "x":
                addLetter("X", state.guess.length)
                break;
            case "y":
                addLetter("Y", state.guess.length)
                break;
            case "z":
                addLetter("Z", state.guess.length)
                break;
            case "A":
                addLetter("A", state.guess.length)
                break;
            case "B":
                addLetter("B", state.guess.length)
                break;
            case "C":
                addLetter("C", state.guess.length)
                break;
            case "D":
                addLetter("D", state.guess.length)
                break;
            case "E":
                addLetter("E", state.guess.length)
                break;
            case "F":
                addLetter("F", state.guess.length)
                break;
            case "G":
                addLetter("G", state.guess.length)
                break;
            case "H":
                addLetter("H", state.guess.length)
                break;
            case "I":
                addLetter("I", state.guess.length)
                break;
            case "J":
                addLetter("J", state.guess.length)
                break;
            case "K":
                addLetter("K", state.guess.length)
                break;
            case "L":
                addLetter("L", state.guess.length)
                break;
            case "M":
                addLetter("M", state.guess.length)
                break;
            case "N":
                addLetter("N", state.guess.length)
                break;
            case "O":
                addLetter("O", state.guess.length)
                break;
            case "P":
                addLetter("P", state.guess.length)
                break;
            case "Q":
                addLetter("Q", state.guess.length)
                break;
            case "R":
                addLetter("R", state.guess.length)
                break;
            case "S":
                addLetter("S", state.guess.length)
                break;
            case "T":
                addLetter("T", state.guess.length)
                break;
            case "U":
                addLetter("U", state.guess.length)
                break;
            case "V":
                addLetter("V", state.guess.length)
                break;
            case "W":
                addLetter("W", state.guess.length)
                break;
            case "X":
                addLetter("X", state.guess.length)
                break;
            case "Y":
                addLetter("Y", state.guess.length)
                break;
            case "Z":
                addLetter("Z", state.guess.length)
                break;
            case "Backspace":
                state.guess = state.guess.slice(0, state.guess.length - 1)
                removeLetter(state.guess.length)
                break
            default:
        }
    })
}

function addLetter(key, cell) {
    if (state.guess.length < 5) {
        const cellToChange = document.querySelector(`.${rLookUp[state.score]}${cell}`);
        cellToChange.innerHTML = key
        state.guess += key.toLowerCase()
        // console.log(state.guess)
    }
}

function removeLetter(cell) {
    const cellToChange = document.querySelector(`.${rLookUp[state.score]}${cell}`);
    cellToChange.innerHTML = null
    // console.log(state.guess)
}

function showResult(result) {

    //To do: clean up winning way
    if (JSON.stringify(result) == JSON.stringify([1,1,1,1,1])) {
        state.winner.a = 1;
    };

    for (let index = 0; index < result.length; index++) {
        const cellToChange = document.querySelector(`.${rLookUp[state.score]}${index}`);
        // console.log(result[index])
        switch (result[index]) {
            case 1:
                cellToChange.className = `${rLookUp[state.score]}${index} correct`
                break
            case 0:
                cellToChange.className = `${rLookUp[state.score]}${index} misplaced`
                break
            case -1:
                cellToChange.className = `${rLookUp[state.score]}${index} incorrect`
                break
            default:
                break
        }
    }
    
    state.score++;
    state.guess = "";
}

export { createBoard, createKeyboard, listenForLetters, showResult, rLookUp, state }