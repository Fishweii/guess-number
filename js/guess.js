var radomnum = Math.floor(Math.random() * 100) + 1;
var guess = document.querySelector(".mynum");
var selectnum = document.querySelector(".go");
var hiorlow = document.querySelector(".hiorlow");
var recnum = document.querySelector(".pastnum");
var reset = document.querySelector(".reset");
var guesstimes = 1;

function checkednum() {
    var guessnum = Number(guess.value);
    if (radomnum == guessnum) {
        hiorlow.innerHTML = ("恭喜答對！");
        gameover();
    } else if (guesstimes == 10) {
        hiorlow.innerHTML = ("遊戲結束");
        gameover();
    } else {
        if (radomnum > guessnum) {
            hiorlow.innerHTML = ("數字太小囉");
        } else if (radomnum < guessnum) {
            hiorlow.innerHTML = ("數字太大囉");
        }
    }

    recnum.innerHTML += ("&nbsp") + guessnum;
    guesstimes++;
}
selectnum.addEventListener("click", checkednum);

function gameover() {
    selectnum.setAttribute("style", "display:none");
    reset.setAttribute("style", "display:inline");
}

function resetgame() {
    radomnum = Math.floor(Math.random() * 100) + 1;
    guesstimes = 1;
    guess.value = "";
    reset.setAttribute("style", "display:none");
    selectnum.setAttribute("style", "display:inline");
    hiorlow.innerHTML = "";
    recnum.innerHTML = "";
}
reset.addEventListener("click", resetgame);