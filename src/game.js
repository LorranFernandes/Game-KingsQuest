import * as Data from './data/index.js';
import { goBackWorld, goField, goToScene, goWin } from './game/locations/locations.js';
import { fightDragon } from './game/monsters/bossMonster.js';
import { monsterItems } from './game/monsters/monsterSystem.js';
import { addXp, inventory, resetWeapon, setDefense, setGold, setHealth, setLevel, setMaxHealth, updatePower } from './game/player/playerStats.js';
import { currentPower, mostPowerfulNameWeapon} from './game/Stores/weaponSystem.js';

export const body = document.body;
export const controls = document.querySelector("#controls");
export const descriptionPowerText = document.querySelector("#descriptionPowerText");
export const descriptionXpText = document.querySelector("#descriptionXpText");
export const game = document.querySelector("#game");
export const text = document.querySelector("#text");
export const levelText = document.querySelector("#levelText");
export const healthText = document.querySelector("#healthText");
export const maxHealthText = document.querySelector("#maxHealthText");
export const defenseText = document.querySelector("#defenseText");
export const powerText = document.querySelector("#powerText");
export const goldText = document.querySelector("#goldText");
export const originalPercentages = Data.items.map(item => ({ monster: item.monster, name: item.name, percent: item.percent, price: item.price }));

export const uiElements = {
    monsterStats: document.querySelector("#monsterStats"),
    monsterName: document.querySelector("#monsterName"),
    monsterHealthText: document.querySelector("#monsterHealth")
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

document.addEventListener('DOMContentLoaded', function() {
    initializeGame(); // initialize the game
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case '1':
                document.getElementById('button1').click();
                print("botao 1 apertado")
                break;
            case '2':
                document.getElementById('button2').click();
                break;
            case '3':
                document.getElementById('button3').click();
                break;
            case '4':
                document.getElementById('button4').click();
                break;
        }
    })
})

export function update(location) {

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];

  text.innerText = location.text;
}

export function styleImage(){
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'contain';  // Pode ajustar para 'contain' ou cover se preferir
    body.style.backgroundPosition = 'center';
}

export function hideButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.visibility = 'hidden';
    });
}

export function showButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.visibility = 'visible';
    });
}

export function initializeGame() {
    inventory.push(Data.weapons[0]);  // add first weapon
    currentPower();
    //description power weapon
    descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");

    // initialize buttons
    button1.onclick = () => goToScene("guilda");
    button2.onclick = goField;
    button3.onclick = () => goToScene("dungeon1");
    button4.onclick = fightDragon;

    monsterItems();
}

export function restoreOriginalPercentages() {
    Data.items.forEach(item => {
        const originalItem = originalPercentages.find(orig => orig.name === item.name && orig.monster === item.monster);
        if (originalItem) {
            item.percent = originalItem.percent;
        }
        console.log(item)
    });

}

export function winGame() {
    uiElements.monsterStats.style.display = "none";
    body.style.background = "none"
    text.innerText = "You finally killed the dragon and freed the world from a great evil.";
    setTimeout(function(){
        text.innerText = "The king calls you.";
    },3000);
    setTimeout(function(){
        goWin();
    },6000);

}

export function backWorld(){
    uiElements.monsterStats.style.display = "none";
    goBackWorld();
    setTimeout(function(){
        body.style.background = "none"
        text.innerText = "Thanks for playing. 🤩🎉 🤩🎉"
    },10000);
}

export function clearInventory(){
    inventory.splice(0, inventory.length);
    inventory.push(Data.weapons[0]);
}

export function restart() {
    goToScene("city");
    addXp(0);
    setLevel(0);
    setHealth(25);
    setDefense(0);
    setMaxHealth(25)
    setGold(50)
    resetWeapon()

    restoreOriginalPercentages();
    descriptionXpText.classList.remove('aura');

    clearInventory()

    setTimeout(function() {
        updatePower()
        descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");
    },100);
}