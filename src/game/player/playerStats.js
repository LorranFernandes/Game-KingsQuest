import { imagesPlayerDiedDungeon, imagesPlayerDiedField, levelIntervals } from "../../data/index.js";
import { body, defenseText, descriptionXpText, goldText, healthText, hideButtons, levelText, maxHealthText, showButtons, styleImage, text } from "../../game.js";
import { getRandomImageUrl, goToScene, lose } from "../locations/locations.js";
import { mostPowerfulWeapon } from "../Stores/weaponSystem.js";

export let xp = 0;
export let strength = 0;
export let luck = 0;
export let level = 0;
export let health = 25;
export let maxHealth = 25;
export let stockLifePotion = 0;      
export let defense = 0;
export let power= 0;
export let gold = 50;
export let currentWeapon = 0;
export let inventory = [];
export let bag = [];

export function resetWeapon(){
    currentWeapon = 0;
}

export function updatePower() {
  power = mostPowerfulWeapon();
}

export function takeDamage(damage){
    health = Math.max(0, health - damage);
    healthText.innerText = health;
}

export function setLevel(value){
    if(value >= 0){
        level = value;
        levelText.innerText = value;
    }
}
export function setMaxHealth(value){
    if(value >= 0){
        maxHealth = value;
        maxHealthText.innerText = value;
    }
}

export function addHealth(value){
    if(value >= 0){
        health += value;
        healthText.innerText = value;
    }
}

export function setHealth(value){
    if(value >= 0){
        health = value;
        healthText.innerText = value;
    }
}

export function setDefense(value){
    if(value >= 0){
        defense = value;
        defenseText.innerText = value;
    }
}

export function addDefense(){
    defense ++;
    defenseText.innerText = value;
}

export function decreaseDefense(){
    if(defense > 0){
        defense--;
        defenseText.innerText = defense;
    }
}

export function addStockLifePotion(){
    stockLifePotion++;
}

export function decreaseStockLifePotion(){
    stockLifePotion--;
}

export function addStrength(){
    strength++;
}

export function decreaseStrength(){
    strength--;
}

export function addXp(value){
    xp += value;
}

export function setXp(value){
    xp = value;
}

export function setGold(value){
    if(value >= 0){
        gold = value;
        goldText.innerText = gold;
    }
}

export function addGold(value){
    if (gold + value >= 0){
        gold += value;
        goldText.innerText = gold;
    }
}

export function levelUp() {
    let nextLevel;

    while ((nextLevel = levelIntervals.find(int => xp >= int.min && level < int.level)) !== undefined) {
        level = nextLevel.level;
        xp -= nextLevel.min;

        maxHealth = nextLevel.health;
        health = maxHealth;

        levelText.innerText = level;
        maxHealthText.innerText = maxHealth;
        healthText.innerText = health;
    }
    descriptionXpText.setAttribute('title', "XP: " + xp + ".");
}

export function sleep(){
    if (maxHealth === health){
        text.innerText = "Are not you tired.";
    }else{
        health = maxHealth;
        text.innerText = "You went up to a room and went to sleep.";
        healthText.innerText = health;
        body.style.background = 'url("")';
        hideButtons();
        setTimeout(function() {
            goToScene("guilda");
            showButtons();
        }, 4000);
    }
}

export function sellItems() {
    let itemPrice = 0;

    console.log(bag);

    if (bag.length <= 0) {
        text.innerText = "Your bag is empty.";
        return;
    }

    while (bag.length > 0) {
        itemPrice = bag[0].price;
        console.log(bag[0].name);
        gold += itemPrice;
        bag.shift();  
    }

    text.innerText += " You sold all the items you got on your adventure.";
    goldText.innerText = gold;

    console.log(bag);
}

export function playerDeadField() {
    body.style.background = getRandomImageUrl(imagesPlayerDiedField);
    styleImage();
    lose();
}

export function playerDeadDungeon() {
    body.style.background = getRandomImageUrl(imagesPlayerDiedDungeon);
    styleImage();
    lose();
}