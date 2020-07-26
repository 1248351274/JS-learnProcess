import Game from './games/game.js'
let game = new Game()
let eles = {
    login:{
        loginView:document.querySelector(".login"),
        username:document.querySelector(".username"),
        loginSub:document.querySelector(".sub")
    },
    games:{
        gameView:document.querySelector(".game"),
        choiseusername:document.querySelector(".choiseusername"),

    }

}

eles.login.loginSub.onclick = function(){
    let username = eles.login.username.value
    if(username){
        game.login(username)
        console.log(game)
        eles.login.loginView.style.display = 'none'
        eles.games.gameView.style.display = 'block'
        eles.games.choiseusername.innerHTML = username

    }
}