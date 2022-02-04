const width = 50;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");
const start = document.getElementById("start");
let squares = [];
let score = 0;

const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1,
    1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 5, 5, 5, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 6, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 1, 1, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 5, 5, 5, 5, 1, 5, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 5, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 6, 1, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 1, 1, 5, 1, 5, 1, 6, 1, 5, 1, 1, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1,
    1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 5, 5, 1, 1, 1, 5, 1, 5, 5, 5, 1, 1, 1, 5, 1, 5, 5, 5, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 1, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1,
    1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1,
    1, 1, 5, 1, 5, 1, 6, 1, 5, 5, 5, 5, 1, 5, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 5, 5, 5, 5, 1,
    1, 1, 1, 1, 1, 1, 6, 1, 1, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 5, 1, 5, 1, 1,
    1, 1, 1, 1, 1, 1, 6, 1, 5, 1, 1, 5, 1, 5, 1, 5, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1,
    6, 6, 6, 6, 6, 6, 6, 1, 5, 1, 1, 5, 1, 5, 1, 5, 5, 1, 5, 1, 1, 5, 5, 1, 5, 1, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 6, 1, 5, 1, 6, 1, 6, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 6, 1, 5, 5, 5, 5, 1, 5, 1, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 5, 1, 1, 1, 5, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6,
    1, 1, 1, 1, 1, 1, 6, 1, 5, 5, 5, 5, 1, 5, 1, 5, 5, 1, 5, 1, 5, 5, 1, 1, 5, 1, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 6, 1, 5, 1, 5, 1, 6, 1, 1, 1, 1, 1, 1,
    1, 1, 5, 1, 5, 1, 6, 1, 5, 5, 5, 5, 1, 5, 1, 1, 1, 1, 5, 1, 5, 5, 5, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 5, 1, 6, 1, 1, 1, 1, 1, 1,
    1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 5, 1, 5, 1, 1,
    1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1,
    1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 6, 6, 6, 6, 6, 6, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1,
    1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 4, 4, 4, 4, 1, 5, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1,
    1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 4, 4, 4, 4, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 4, 4, 4, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1,
    1, 7, 1, 1, 1, 1, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1

]

let createBoard = () => {
    for(let i = 0; i < layout.length; i++) {

        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);

        if (layout[i] === 1) {
            squares[i].classList.add('wall-grey')
        } else if (layout[i] === 4) {
            squares[i].classList.add('ghost-house')
        } else if (layout[i] === 5) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 6) {
            squares[i].classList.add('empty')
        } else if (layout[i] === 7) {
            squares[i].classList.add('power-pellet')
        }
    }
}

createBoard()

let pacmanCurrentIndex = 423;
resultDisplay.textContent = "";

let eatDot = () => {
    let eatDot = new Audio('./audios/eat4.mp3');
    eatDot.play();
}

let eatGhost = () => {
    let eatGhost = new Audio('./audios/pacman_eatghost.wav');
    eatGhost.play();
}

let police = new Audio('./audios/police_siren.mp3');
let pacDeath = new Audio('./audios/pacman_death.wav');
var power_pellete = new Audio('./audios/power_pellete.mp3');

let control = (e) => {
    squares[pacmanCurrentIndex].classList.remove('pacman');

    switch(e.key) {
        case "ArrowDown":
            if (
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-house') &&
                !squares[pacmanCurrentIndex + width].classList.contains('wall')
            ) {
                pacmanCurrentIndex += width;
                squares[pacmanCurrentIndex].classList.add('pacman')
                $(".pacman").css("border-bottom-color", "transparent");
                $(".pacman").css("border-top-color", "#fffb00");
                $(".pacman").css("border-right-color", "#fffb00");
                $(".pacman").css("border-left-color", "#fffb00");
            }

            break;

        case "ArrowUp":

            if (
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-house') &&
                !squares[pacmanCurrentIndex - width].classList.contains('wall')
            ) {
                pacmanCurrentIndex -= width;
                squares[pacmanCurrentIndex].classList.add('pacman')
                $(".pacman").css("border-top-color", "transparent");
                $(".pacman").css("border-bottom-color", "#fffb00");
                $(".pacman").css("border-left-color", "#fffb00");
                $(".pacman").css("border-right-color", "#fffb00");
            }

            break

        case "ArrowLeft":

            if (
                !squares[pacmanCurrentIndex - 1].classList.contains('ghost-house') &&
                !squares[pacmanCurrentIndex - 1].classList.contains('wall')
            ) {
                pacmanCurrentIndex -= 1
                squares[pacmanCurrentIndex].classList.add('pacman')
                $(".pacman").css("border-left-color", "transparent");
                $(".pacman").css("border-top-color", "#fffb00");
                $(".pacman").css("border-bottom-color", "#fffb00");
                $(".pacman").css("border-right-color", "#fffb00");
            }
            if (pacmanCurrentIndex === 652) {
                squares[pacmanCurrentIndex].classList.remove('pacman');
                pacmanCurrentIndex = 749
            }

            break

        case "ArrowRight":

            if (
                !squares[pacmanCurrentIndex + 1].classList.contains('ghost-house') &&
                !squares[pacmanCurrentIndex + 1].classList.contains('wall')
            ) {
                pacmanCurrentIndex += 1;
                squares[pacmanCurrentIndex].classList.add('pacman')
                $(".pacman").css("border-right-color", "transparent");
                $(".pacman").css("border-top-color", "#fffb00");
                $(".pacman").css("border-bottom-color", "#fffb00");
                $(".pacman").css("border-left-color", "#fffb00");
            }
            if (pacmanCurrentIndex === 749) {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                pacmanCurrentIndex = 652;
            }

            break
    }

    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    powerPelletEaten()
    checkForWin()
    checkForGameOver()
}

let beginning = () => {
    let beg_music = new Audio('./audios/pacman_beginning.wav');
    beg_music.play();
    beg_music.onended = function (){
        beg_music.innerHTML = "Restart";

        for(let i= 0; i < layout.length; i++){
            if (layout[i] === 1) {
                squares[i].classList.remove('wall-grey')
                squares[i].classList.add('wall')
            }
        }
        ghosts.forEach(ghost => {
            ghost.currentIndex = ghost.startIndex
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        })

        police.play();
        police.loop = true;
        ghosts.forEach(ghost => moveGhost(ghost));
        document.addEventListener('keydown', control);
    }
}

start.addEventListener("click" , () => {
    resultDisplay.textContent = "";
    beginning();
    squares[pacmanCurrentIndex].classList.add('pacman')
    start.disabled = true;

})

let pacDotEaten = () => {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.textContent = score
        eatDot();


    }
}
let setTime;

let powerPelletEaten = () => {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {

        police.pause();
        // police.loop = false;
        ghosts.forEach(ghost => ghost.isScared = true)
        squares[pacmanCurrentIndex].classList.remove('power-pellet');
        power_pellete.play();
        power_pellete.loop = true;
        score += 10;
        scoreDisplay.textContent = score;
        power_pellete_finish_time = 10000;

        setTime =  setTimeout(() => {
                ghosts.forEach(ghost => ghost.isScared = false);
                police.play();
                power_pellete.pause();
                power_pellete.loop = false;
                ghosts.forEach(ghost => {
                    if (ghost.isScared && squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
                        // power_pellete_finish_time += 10000;
                        console.log("in foreach" + power_pellete_finish_time)
                    }
                });
                console.log("in timeout" + power_pellete_finish_time)

            }, power_pellete_finish_time)

    }
}


class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 1073, 150),
    new Ghost('pinky', 1025, 150),
    new Ghost('inky', 1075, 150),
    new Ghost('clyde', 1076, 150),
    new Ghost('inky1', 1026, 150),
    new Ghost('purple', 1027, 150)
]

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(() => {

        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ){
            squares[ghost.currentIndex].classList.remove(ghost.className);
            squares[ghost.currentIndex].classList.remove('ghost' , 'scared-ghost');

            ghost.currentIndex += direction

            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')

        }else {
            direction = directions[Math.floor(Math.random() * directions.length)]
        }

        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost');
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {

            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            scoreDisplay.textContent = score
            eatGhost()
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

        }
        checkForGameOver()

    } , ghost.speed)
}

let checkForGameOver = () => {
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ){
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        document.removeEventListener("keydown" , control);
        police.pause()
        // police.loop = false;
        pacDeath.play();
        squares[pacmanCurrentIndex].classList.remove("pacman");

        setTimeout(() => {
            ghosts.forEach(ghost => {
                squares[ghost.currentIndex].classList.remove(ghost.className)
                squares[ghost.currentIndex].classList.remove('ghost');
                squares[pacmanCurrentIndex].classList.remove('scared-ghost')
            })
        }, 1000);

        setTimeout(function () {
            for (let i = 0; i < layout.length; i++) {
                if (layout[i] === 1) {
                    squares[i].classList.add('wall-grey')
                }

            }
        }, 1200);

        pacDeath.onended = () => {
            var pacTries = document.getElementById('pac-tries');
            var elements = pacTries.getElementsByClassName("pacman-tri");
            pacTries.removeChild(elements[0]);

            let elemCount = document.getElementById('pac-tries').childElementCount;
            if(elemCount === 0){
                start.innerHTML = "Start";
                police.pause();

                score = 0;
                scoreDisplay.textContent = score;
                resultDisplay.textContent = "You Lose";
                $("#result").css("color", "red")

                $('#pac-tries').append([
                    $('<div/>', { "class": "pacman-tri" }),
                    $('<div/>', { "class": "pacman-tri" }),
                    $('<div/>', { "class": "pacman-tri" })
                ]);

                for (let i = 0; i < layout.length; i++) {

                    if (layout[i] === 5) {
                        squares[i].classList.add('pac-dot')
                    } if (layout[i] === 7) {
                        squares[i].classList.add('power-pellet')
                    }

                }
            }
            start.disabled = false;

            pacmanCurrentIndex = 423
        }

    }
}

let checkForWin = () => {
    let elemCount = document.getElementById('pac-tries').childElementCount;

    let pacDotLength = document.querySelectorAll('.grid .pac-dot').length;

    if(pacDotLength === 0){
        resultDisplay.textContent = "You Win";
        score = 0
        scoreDisplay.textContent = score
        $("#result").css("color", "green")

        ghosts.forEach(ghost =>{
            ghost.isScared = false
        })
        // resultDisplay.innerHTML = "You Win";

            police.pause();
            power_pellete.pause();
            power_pellete.loop = false;
            // police.loop = false;
            console.log("resultDisplay.textContent === You Win")

        let win = new Audio('./audios/win2.wav');
        win.play();

        squares[pacmanCurrentIndex].classList.remove("pacman")
        ghosts.forEach(ghost => clearInterval(ghost.timerId));
        clearTimeout(setTime);
        document.removeEventListener('keydown', control);

        start.innerHTML = "Start";

        win.onended = () => {
            start.disabled = false;
            console.log("win.onended");
            police.pause();

        }

        ghosts.forEach(ghost => {
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost');
            squares[ghost.currentIndex].classList.remove('scared-ghost');
            console.log("ghost.foreach")
        })

        if (elemCount === 1) {
            $('#pac-tries').append([
                $('<div/>', { "class": "pacman-tri" }),
                $('<div/>', { "class": "pacman-tri" })
            ]);
        } else if (elemCount === 2) {
            $('#pac-tries').append([
                $('<div/>', { "class": "pacman-tri" })
            ]);
        } else if (elemCount === 0) {
            $('#pac-tries').append([
                $('<div/>', { "class": "pacman-tri" }),
                $('<div/>', { "class": "pacman-tri" }),
                $('<div/>', { "class": "pacman-tri" })
            ]);
        }

        for (let i = 0; i < layout.length; i++) {
            if (layout[i] === 1) {
                squares[i].classList.add('wall-grey')
            } else if (layout[i] === 5) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 7) {
                squares[i].classList.add('power-pellet')
            }

        }
        pacmanCurrentIndex = 423;
        squares[pacmanCurrentIndex].classList.add("pacman")
    }
}