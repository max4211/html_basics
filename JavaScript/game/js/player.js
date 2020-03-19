let player;

class Player {
  constructor(name, health, mana, strength, agility, speed) {
    this.name = name;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
  }
}

let PlayerMoves = {
  calcAttack: function() {
    console.log("player.name: " + player.name);
    // Determine who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;

    // Player attacks!
     let playerAttack = function() {
        let calcBaseDamage;
        if (player.mana > 0) {
          calcBaseDamage = player.strength * player.mana / 1000;
        } else {
          calcBaseDamage = player.strength * player.agility / 1000;
        }
        // Create damage offset
        let offsetDamage = Math.floor(Math.random() * 20);
        calcBaseDamage -= offsetDamage;
        // Determine number ofo hits
        let numberOfHits = Math.floor(Math.random() * player.agility / 20 + 1);
        let attackValues = [calcBaseDamage, numberOfHits];
        return attackValues;
      }
      // Enemy attacks!
      let enemyAttack = function() {
        let calcBaseDamage;
        if (enemy.mana > 0) {
          calcBaseDamage = enemy.strength * enemy.mana / 1000;
        } else {
          calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        // Create damage offset
        let offsetDamage = Math.floor(Math.random() * 20);
        calcBaseDamage -= offsetDamage;
        // Determine number ofo hits
        let numberOfHits = Math.floor(Math.random() * enemy.agility / 20 + 1);
        let attackValues = [calcBaseDamage, numberOfHits];
        return attackValues;
      }
      // Update health values
      let updateHealth = function() {
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let playerAttackValues = playerAttack();
        let playerDamage = playerAttackValues[0] * playerAttackValues[1];
        let enemyAttackValues = enemyAttack();
        let enemyDamage = playerAttackValues[0] * playerAttackValues[1];
        if (getPlayerSpeed >= getEnemySpeed) {
          enemy.health -= playerDamage;
          alertAttacks("You", playerAttackValues[0], playerAttackValues[1]);
          if (enemy.health <= 0) {
            alert("You win! Refresh the browser to play again.");
            getEnemyHealth.innerHTML = 'Health: 0';
          } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            playerHealth -= enemyDamage;
            alertAttacks("Enemy", enemyAttackValues[0], enemyAttackValues[1]);
            if (player.health <= 0) {
              alert("You lose! Refresh the browser to try again.");
              getPlayerHealth.innerHTML = 'Health: 0';
            } else {
              getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
          }
        } else {

        }
      }
      // Set attack alerts
      let alertAttacks = function(name, damage, times) {
        alert(name + " hit " + damage + " damage " + times + " times.");
      }

  }

}
