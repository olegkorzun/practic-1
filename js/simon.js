// simon
const timeint = 500;
const simon = [
    {
        name: "yellow_botton",
        prime_background: "#D7D700",
        push_background: "#FFFF00"
    },
    {
        name: "green_button",
        prime_background: "green",
        push_background: "lime"
    },
    {
        name: "blue_button",
        prime_background: "#0000AF",
        push_background: "#1E1EFF"
    },
    {
        name: "red_button",
        prime_background: "#CD0000",
        push_background: "red"
    }
];

// drow field of 4 blocks & center
function init() {
    for (let i = 0; i < 4; i++) {
        document.getElementById('game').innerHTML += '<div  id="b' + i + '" class="block"></div>';
    }
   
}

// set to all prime background
function clean_field() {
    for (let i = 0; i < 4; i++) {
        document.getElementById('b' + i).style.background = simon[i].prime_background;
    }
    
}

let playerturn = () => {
    // put listener on click
    document.getElementById('game').onclick = function (event) {
        console.log(event);
        if (event.target.className == "block") {
            // show your tern
            event.target.style.background = simon[event.target.id[1]].push_background;
            setTimeout(clean_field, timeint);
        }
    }
}

// begin programm on load 
window.onload = function () {
    init();
    playerturn();
}