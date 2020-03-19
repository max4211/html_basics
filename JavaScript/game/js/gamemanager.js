let GameManager = {
  /* CALLED FROM ON CLICK */
  setGameStart: function(name) {
    console.log("Creating new game manager");
    this.resetPlayer(name);
    this.setPreFight();
  },
  /* CREATES PLAYER INSIDE GAME */
  resetPlayer: function(name) {
    console.log("creating player: " + name);
    let player;
    switch (name) {
      case "warrior":
        player = new Player(name, 200, 0, 200, 100, 50);
        break;
      case "rogue":
        player = new Player(name, 100, 0, 100, 150, 200);
        break;
      case "mage":
        player = new Player(name, 80, 50, 200, 50, 100);
        break;
      case "hunter":
        player = new Player(name, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-player/' + name.toLowerCase() + '.png" class="img-avatar">' +
      '<div>' +
      '<h3>' + name + '</h3>' +
      '<p class ="health-player">Health: ' + player.health + '</p>' +
      '<p>Mana: ' + player.mana + '</p>' +
      '<p>Strength: ' + player.strength + '</p>' +
      '<p>Agility: ' + player.agility + '</p>' +
      '<p>Speed: ' + player.speed + '</p>' +
      '</div>';
  },
  /* CREATES FIGHT STAGE */
  setPreFight: function() {
    // STEP 1: Get all elements to change
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    // STEP 2: Update elements accordingly
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="GameManager.createFight()">Search for an enemy!</a>';
    getArena.style.visibility = "visible";

  },
  createFight: function() {
    // STEP 1: Get all elements to change
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");

    // STEP 2: Create enemy
    let enemy0 = new Enemy("Goblin", 100, 0, 50, 100, 100);
    let enemy1 = new Enemy("Troll", 200, 0, 150, 80, 80);
    let rand = Math.round(Math.random());
    switch (rand) {
      case 0:
        enemy = enemy0;
        break;
      case 1:
        enemy = enemy1;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move!</p>';
    getActions.innerHTML =
      '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="img/avatar-enemy/' + enemy.name.toLowerCase() + '.png" class="img-avatar">' +
      '<div>' +
      '<h3>' + enemy.name + '</h3>' +
      '<p class="health-enemy">Health: ' + enemy.health + '</p>' +
      '<p>Mana: ' + enemy.mana + '</p>' +
      '<p>Strength: ' + enemy.strength + '</p>' +
      '<p>Agility: ' + enemy.agility + '</p>' +
      '<p>Speed: ' + enemy.speed + '</p>' +
      '</div>';
  }
}
