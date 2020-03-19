let enemy;

class Enemy {
    constructor(name, health, mana, strength, agility, speed) {
        console.log("created enemy: " + name);
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.agility = agility;
        this.speed = speed;
    }
}
