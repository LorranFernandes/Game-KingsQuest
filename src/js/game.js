import {weapons, items, chestGoblinCamps, imagesDiedDungeon, imagesMonsterDiedField, levelIntervals,
     monsters, locations, imagesEast,imagesNorth,imagesWest,monsterNameMapping,
     imagesPlayerDiedDungeon,imagesPlayerDiedField,imagesDragonAttack,imagesWin,imagesBackWorld, 
     imagesChest,chestMimico1,chestMimico2,chestMimico3,chestMimico4} from './data.js';
import {lose,goDangeon1,fightGoblinCamp,fightPinkBunny,goField,goFightField,goFightDungeon,goGuilda,
     goDangeon2, goDangeon3, goDangeon4, goCity, upgradeWeaponShop1, upgradeWeaponShop2, upgradeWeaponShop3} from './navigation.js'

let xp = 0;
let strength = 0;
let luck = 0;
let level = 0;
let health = 25;
let maxHealth = 25;
let stockLifePotion = 0;
let defense = 0;
let power= 0;
let gold = 50;
let currentWeapon = 0;
export var fighting = 0;
let inventory = [];
let bag = [];
let goblinCampActive = false;
let monsterImage = null
let dungeonFloor = 0;

export let gameState = {
    monsterHealth: 0,
    fighting: 0
};

export const body = document.body;
const controls = document.querySelector("#controls");
const descriptionPowerText = document.querySelector("#descriptionPowerText");
const descriptionXpText = document.querySelector("#descriptionXpText");
const game = document.querySelector("#game");
const text = document.querySelector("#text");
const levelText = document.querySelector("#levelText");
const healthText = document.querySelector("#healthText");
const maxHealthText = document.querySelector("#maxHealthText");
const defenseText = document.querySelector("#defenseText");
const powerText = document.querySelector("#powerText");
const goldText = document.querySelector("#goldText");
const originalPercentages = items.map(item => ({ monster: item.monster, name: item.name, percent: item.percent, price: item.price }));

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

function initializeGame() {
    inventory.push(weapons[0]);  // add first weapon
    currentPower();

    descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");  //description power weapon

    // initialize buttons
    button1.onclick = goGuilda;
    button2.onclick = goField;
    button3.onclick = goDangeon1;
    button4.onclick = fightDragon;

    monsterItems();
    console.log(monsters);
}

function findLocationByName(name, locations) {
    return locations.find(location => location.name === name);
}

export function goToLocation(name) {
    const location = findLocationByName(name, locations);
    if (location) {
        update(location);
    } else {
        console.log(`Location named "${name}" not found.`);
    }
}

function findmonsterByName(name, monsters) {
    return monsters.find(monster => monsters.name === name);
}

export function goToMonster(name) {
    const monster = findmonsterByName(name, monsters);
    const monsterIndex = monsters.findIndex(mon => mon.name === monsterName);
    if (monster) {
        gameState.fighting = monsterIndex;
        update(location);
    } else {
        console.log(`Location named "${name}" not found.`);
    }
}

// Função para atribuir itens aos monstros
function monsterItems() {
    for (let i = 0; i < items.length; i++) {
        const baseMonsterName = items[i].monster;
        monsters.forEach(monster => {
            // Mapeia o nome do monstro atual para seu nome base, se existir mapeamento
            const monsterName = monsterNameMapping[monster.name] || monster.name;
            if (monsterName === baseMonsterName) {
                // Inicialize o array de itens se não existir
                if (!monster.items) {
                    monster.items = [];
                }
                // Verifique se o item já está presente
                const existingItem = monster.items.find(item => item.name === items[i].name);
                // Adicione o item se não estiver presente
                if (!existingItem) {
                    monster.items.push(items[i]);
                }
            }
        });
    }
}

export function walk1(){
    let possibility = Math.random() * 100;

    if(possibility<=65){
        fightDungeonSlime(1);
    }else{
        fightDungeonEsqueleton(1);
    }
}


export function walk2(){
    let possibility = Math.random() * 100;

    if(possibility<=15){
        fightMimico(2);
    }else if(possibility<=25){
        fightDungeonBeast(2);
   }else if(possibility<=65){
        fightDungeonEsqueleton(2);
    }else{
        fightDungeonSlime(2);
    }
}

export function walk3(){
    let possibility = Math.random() * 100;

    if(possibility<=10){
        fightFlamingGoat(3);
    }else if(possibility<=15){
        fightMimico(3);
    }else if(possibility<=25){
        fightFlamingGummen(3);
    }else if(possibility<=35){
        fightOwlBear(3);
    }else if(possibility<=55){
        fightLitch(3);
    }else if(possibility<=75){
        fightDungeonEsqueleton(3);
    }else{
        fightDungeonBeast(3);
    }
}


export function walk4(){
    let possibility = Math.random() * 100;

    if(possibility<=4){
        fightMimico(4);
    }else if(possibility<=7){
        fightDungeonBeast(4);
    }else if(possibility<=13){
        fightOwlBear(4);
    }else if(possibility<=25){
        fightBalor(4);
    }else if(possibility<=40){
        fightPantera(4);
    }else if(possibility<=65){
        fightLitch(4);
    }else{
        fightFlamingGoat(4);
    }
}

export function shoutOut1(){
    let possibility = Math.random() * 100;

    if(possibility<=5){
        fightMimico(1);
    }else if(possibility<=60){
        fightDungeonEsqueleton(1);
    }else{
        fightDungeonSlime(1);
    }
}

export function shoutOut2(){
    let possibility = Math.random() * 100;

    if(possibility<=15){
        fightMimico(2);
    }else if(possibility<=40){
        fightDungeonBeast(2);
   }else if(possibility<=75){
        fightDungeonEsqueleton(2);
    }else{
        fightDungeonSlime(2);
    }
}

export function shoutOut3(){
    let possibility = Math.random() * 100;

    if(possibility<=15){
        fightFlamingGoat(3);
    }else if(possibility<=20){
        fightMimico(3);
    }else if(possibility<=30){
        fightFlamingGummen(3);
    }else if(possibility<=45){
        fightOwlBear(3);
    }else if(possibility<=70){
        fightLitch(3);
    }else if(possibility<=90){
        fightDungeonEsqueleton(3);
    }else{
        fightDungeonBeast(3);
    }
}

export function shoutOut4(){
    let possibility = Math.random() * 100;

    if(possibility<=5){
        fightMimico(4);
    }else if(possibility<=12){
        fightFlamingGummen(4);
    }else if(possibility<=20){
        fightFlamingGoat(4);
    }else if(possibility<=30){
        fightBalor(4);
    }else if(possibility<=40){
        fightLitch(4);
    }else if(possibility<=55){
        fightPantera(4);
    }else if(possibility<=75){
        fightOwlBear(4);
    }else{
        fightPantera(4);
    }
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
            goGuilda();
            showButtons();
        }, 4000);
    }
}
export function giftsBord(monster) {

    console.log(monsters);
    let counter = 0;

    monsters.forEach(mon => {
        const cleanName = mon.name.replace(/^(field |dungeon )/, '');
        if (monster === cleanName) {
            counter += mon.counter;
        }
    });

    let reward = 0;
    let xpReward = 0;
    let requiredCount = 0;

    if (monster === "slime") {
        reward = 35;
        xpReward = 10;
        requiredCount = 5;
    } else if (monster === "wolf") {
        reward = 50;
        xpReward = 45;
        requiredCount = 3;
    } else if (monster === "fake pink bunny") {
        reward = 100;
        xpReward = 100;
        requiredCount = 1;
    }

    if (counter >= requiredCount) {
        const sets = Math.floor(counter / requiredCount);
        const totalReward = sets * reward;
        const totalXpReward = sets * xpReward;

        monsters.forEach(mon => {
            const cleanName = mon.name.replace(/^(field |dungeon )/, '');
            if (monster === cleanName) {
                const reduction = Math.min(mon.counter, sets * requiredCount);
                mon.counter -= reduction;
            }
        });

        xp += totalXpReward;
        levelUp();
        gold += totalReward;
        goldText.innerText = gold;
        text.innerText = "You completed the quest.";
    } else {
        text.innerText = "You did not meet the requirements.";
    }

    console.log(monsters);
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

export function lifePotion(){
    let potion = 50;
    if(stockLifePotion > 0){
        if(health + potion > maxHealth){
            health = maxHealth;
        }else{
            health += potion;
        }
        stockLifePotion --;
        healthText.innerText = health;
        text.innerText = "You drank a health potion."
    }else{
        text.innerText = "You don't have a health potion."
    }


}

export function buyLifePotion(){
    if(gold >= 50){
        stockLifePotion ++;
        gold -= 50;
        goldText.innerText = gold;
    }else{
        text.innerText = "Not enough gold."
    }

}

function defensePotion(){
    defense ++;
    defensePotion.innerText = defense;
    defenseText.innerText = defense;
}

export function buyDefensePotion(){
    let potion = 35;
    if(gold >= potion){
        gold -= potion;
        goldText.innerText = gold;
        defensePotion();
        text.innerText = "You bought a defense potion."
    }else{
        text.innerText = "Not enough gold."
    }
    
}

function strengthPotion(){
    strength++;
    let weapon = mostPowerfulWeaponInInventory()
    let oldPower = weapon.power;
    weapon.power += weapon.power * 0.20;
    powerText.innerText = weapon.power;

    setTimeout(function() {
        strength--;
        weapon.power = oldPower;
        powerText.innerText = weapon.power;
    },100000);

}

export function buyStrengthPotion(){
    let potion = 70;
    if(strength === 0){
        if(gold >= potion){
            gold -= potion;
            goldText.innerText = gold;
            strengthPotion();
            text.innerText = "You bought a strength potion."
        }else{
            text.innerText = "Not enough gold."
        }
    }else{
        text.innerText = "You are already using this potion."
    }

}

export function luckPotion(){
    const chance = Math.random();

    gold -= 50;
    goldText.innerText = gold;

    if (chance < 0.8) {
        items.forEach(item => {
            item.percent = 80;
        });

        text.innerText += "You got a luck potion";
        descriptionXpText.classList.add('aura');
    } else {
        text.innerText += "You didn't get a luck potion";
    }

    console.log(items);
}

function restoreOriginalPercentages() {
    items.forEach(item => {
        const originalItem = originalPercentages.find(orig => orig.name === item.name && orig.monster === item.monster);
        if (originalItem) {
            item.percent = originalItem.percent;
        }
        console.log(item)
    });

}


export function buyCopperDagger(){
    let index = getWeaponIndexByName('copper dagger');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyCopperSword(){
    let index = getWeaponIndexByName('copper sword');
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyShortBow(){
    let index = getWeaponIndexByName('short bow');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyObsidianDagger(){
    let index = getWeaponIndexByName('obsidian dagger');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyRaisorSword(){
    let index = getWeaponIndexByName('raisor sword');
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyLigthBow(){
    let index = getWeaponIndexByName('ligth bow');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyPrismaDagger(){
    let index = getWeaponIndexByName('prisma dagger');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buySilverSword(){
    let index = getWeaponIndexByName('silver sword');
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyDandelionBow(){
    let index = getWeaponIndexByName('dandelion bow');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}


export function buyFakeHeroSword(){
    let index = getWeaponIndexByName('fake hero sword');
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

export function buyFlameBow(){
    let index = getWeaponIndexByName('flame bow');;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

function getWeaponIndexByName(weaponName) {
    return weapons.findIndex(weapon => weapon.name === weaponName);
}


function weaponPurchaseChecker(index){
    if(!inventory.includes(weapons[index])){
        let goldWeapon = weapons[index].price;
        if(gold >= goldWeapon){
            gold -= goldWeapon;
            inventory.push(weapons[index]);
            goldText.innerText = gold;
            let nameWeapon = indexNameWeapon(index);
            text.innerText += " You bought a "+ nameWeapon+ ".";
            currentPower();
            descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");
        }else{
            text.innerText = "Not enough gold."
        }
    }else{
        text.innerText = "You already have this weapon."
    }
}

function indexNameWeapon(index) {
    if (index >= 0 && index < weapons.length) {
        return weapons[index].name;
    } else {
        console.error('Index out of bounds');
        return null;
    }
}

export function runField(){
    goField();
    text.innerText += " You ran away when the enemy tried to attack you."
    uiElements.monsterStats.style.display = "none";
    goblinCampActive = false;
}

export function runDungeon(){
    goDangeon1();
    text.innerText += " You ran away when the enemy tried to attack you."
    uiElements.monsterStats.style.display = "none";
}

  function winGame() {
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
  
  export function restart() {
    goCity();
    xp = 0;
    level = 0;
    health = 25;
    defense = 0;
    maxHealth = 25
    gold = 50;
    currentWeapon = 0;

    restoreOriginalPercentages();
    descriptionXpText.classList.remove('aura');

    inventory.splice(0, inventory.length);
    inventory.push(weapons[0]);

    setTimeout(function() {
        power = mostPowerfulWeapon();
        descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");
        goldText.innerText = gold;
        healthText.innerText = health;
        maxHealthText.innerText = maxHealth;
        defenseText.innerText = defense;
        powerText.innerText = power;
        levelText.innerText = level;
    },100);
  }

  export function finish(){
    game.style.display = "none";
  }

  
  export function goWest(){
    let possibility = Math.random() * 100;

    if(possibility<=4){
        fightPinkBunny();
    }else if(possibility<=7){
        fightFieldBeast();
    }else if(possibility<=13){
        fightWolf();
    }else if(possibility<=25){
        fightFieldEsqueleton();
    }else if(possibility<=40){
        fightGoblin();
    }else if(possibility<=65){
        goWestImage();
    }else{
        fightFildSlime();
    }
}

function goWestImage(){
    goToLocation("field");
    const randomIndex = Math.floor(Math.random() * imagesWest.length);
    const imageUrl = `url("${imagesWest[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}

export function goNorth(){
    let possibility = Math.random() * 100;

    if(possibility<=5){
        goNorthImage();
    }else if(possibility<=10){
        fightFieldBeast();
    }else if(possibility<=20){
        fightFildSlime();
    }else if(possibility<=30){
        fightGoblinRidingWolf();
    }else if(possibility<=40){
        fightGoblinCamp();
    }else if(possibility<=55){
        fightWolf();
    }else if(possibility<=75){
        fightFieldEsqueleton();
    }else{
        fightGoblin();
    }
}

function goNorthImage(){
    goToLocation("field");
    const randomIndex = Math.floor(Math.random() * imagesNorth.length);
    const imageUrl = `url("${imagesNorth[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}

export function goEast(){
    let possibility = Math.random() * 100;

    if(possibility<=2){
        fightPinkBunny();
    }else if(possibility<=10){
        fightWolf();
    }else if(possibility<=20){
        fightFieldBeast();
    }else if(possibility<=35){
        fightFieldEsqueleton();
    }else if(possibility<=55){
        fightGoblin();
    }else if(possibility<=80){
        fightFildSlime();
    }else{
        goEastImage();
    }

}

function goEastImage(){
    goToLocation("field");
    const randomIndex = Math.floor(Math.random() * imagesEast.length);
    const imageUrl = `url("${imagesEast[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}


function goWin(){
    goToLocation("win");
    const randomIndex = Math.floor(Math.random() * imagesWin.length);
    const imageUrl = `url("${imagesWin[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}

export function goBackWorld(){
    goToLocation("back World");
    hideButtons();
    const randomIndex = Math.floor(Math.random() * imagesBackWorld.length);
    const imageUrl = `url("${imagesBackWorld[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}

  function fightFildSlime() {
    goFightField("field slime");
  }

  function fightDungeonSlime(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon slime");
  }
  
  function fightFieldBeast() {
    goFightField("field beast");
  }

  function fightDungeonBeast(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon beast");
  }

  function fightFieldEsqueleton() {
    goFightField("field skeleton");
  }

  function fightDungeonEsqueleton(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon skeleton");
  }

  function fightGoblin() {
    goFightField("goblin");
    if(monsters[2].counter > 0){
        monsters[2].counter --;
    }  
  }
  
  function fightWolf() {
    goFightField("wolf");
  }
  
  export function fightFakePinkBunny() {
    goFightField("fake pink bunny");
  }
  
  export function attackGoblinCamp(){
    goblinCampActive = true;
    monsters[2].counter = 4; //five goblins
    goFightField("goblin");  
  }
  
  function fightGoblinRidingWolf() {
    goFightField("goblin riding wolf");

  }
  
  function fightMimico(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon mimico");

  }
  
  function fightOwlBear(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon owl bear");
  }
  
  function fightPantera(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon pantera");
  }
  
  function fightLitch(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon litch");
  }
  
  function fightBalor(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon balor");
  }
  
  function fightFlamingGummen(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon flaming gummen");
  }

  function fightFlamingGoat(floor) {
    dungeonFloor = floor;
    goFightDungeon("dungeon flaming goat");
  }
  
  export function fightDragon() {
    goFightField("celestial dragon");
  }

  export function randomImage(monster) {
    monsterImage = monster.image[Math.floor(Math.random() * monster.image.length)];
    body.style.background = `url("${monsterImage}")`;
    styleImage();
    return monsterImage;
}

function currentImage() {
    const imageUrl = monsterImage;
    body.style.background = `url("${imageUrl}")`;
    styleImage();
}

function hideButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.visibility = 'hidden';
    });
}

function showButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.visibility = 'visible';
    });
}
  
  function monsterDeadField() {
    hideButtons();
    const randomIndex = Math.floor(Math.random() * imagesMonsterDiedField.length);
    const imageUrl = `url("${imagesMonsterDiedField[randomIndex]}")`;
    text.innerText = 'The monster screams "Arg!" as it dies. You gain experience points and find items.'

    body.style.background = imageUrl;
    styleImage();
}

function playerDeadField() {
    const randomIndex = Math.floor(Math.random() * imagesPlayerDiedField.length);
    const imageUrl = `url("${imagesPlayerDiedField[randomIndex]}")`;
    body.style.background = imageUrl;
    styleImage();
    lose();
}

function playerDeadDungeon() {
    const randomIndex = Math.floor(Math.random() * imagesPlayerDiedDungeon.length);
    const imageUrl = `url("${imagesPlayerDiedDungeon[randomIndex]}")`;
    body.style.background = imageUrl;
    styleImage();
    lose();
}

function monsterDeadDungeon(){
    hideButtons();
    const randomIndex = Math.floor(Math.random() * imagesDiedDungeon.length);
    const imageUrl = `url("${imagesDiedDungeon[randomIndex]}")`;
    text.innerText = 'The monster screams "Arg!" as it dies. You gain experience points and find items.'

    body.style.background = imageUrl;
    styleImage();
}

function mimicoDead(floor){
    hideButtons();
    const imageUrl = getImageByFloor(floor);
    if (imageUrl) {
        body.style.background = `url("${imageUrl}")`;
        console.log(getImageByFloor(floor));
        styleImage();
    }

    const chest = getChestByFloor(floor);
    const lootedItems = chest.filter(item => Math.random() * 100 < item.percent);

    lootedItems.forEach(item => {
        if (item.name.includes('sword') || item.name.includes('bow') || item.name.includes('dagger')) {
            if (!inventory.some(weapon => weapon.name === item.name)) {
                inventory.push({ name: item.name, power: item.power, price: item.price });
            }
        } else if (item.name === 'life potion') {
            stockLifePotion++;
        } else if (item.name === 'defense potion') {
            defensePotion();
        } else if (item.name === 'strength potion') {
            strengthPotion();
        } else {
            bag.push(item);
        }
    });

    console.log("Itens na bolsa:", bag);
    console.log("Itens no inventário:", inventory);
    console.log("Poções de vida:", stockLifePotion);

    const itemNames = lootedItems.map(item => item.name).join(", ");
    text.innerText = `The monster screams "Arg!" as it dies. You gain experience points and find items: ${itemNames}.`;

    console.log("Itens na bolsa:", bag);
}

function getImageByFloor(floor) {
    const imageChest = imagesChest.find(chest => chest.tier === floor);
    return imageChest ? imageChest.image : null;
}

function getChestByFloor(floor) {
    switch (floor) {
        case 1:
            return chestMimico1;
        case 2:
            return chestMimico2;
        case 3:
            return chestMimico3;
        case 4:
            return chestMimico4;
        default:
            return [];
    }
}

function lootGoblinChest() {
    const lootedItems = chestGoblinCamps.filter(item => Math.random() * 100 < item.percent);
  
    lootedItems.forEach(item => {
      if (item.name.includes('sword') || item.name.includes('bow') || item.name.includes('dagger')) {
        if (!inventory.some(weapon => weapon.name === item.name)) {
          inventory.push({ name: item.name, power: item.power, price: item.price });
        }
      } else if (item.name === 'life potion') {
        stockLifePotion++;
      } else if (item.name === 'defense potion') {
        defensePotion();
      } else if (item.name === 'strength potion') {
        strengthPotion();
      } else {
        bag.push(item);
      }
    });
  
    const itemNames = lootedItems.map(item => item.name).join(", ");
    text.innerText = `You open the chest and find: ${itemNames}.`;
  
    console.log("Itens na bolsa:", bag);
    console.log("Itens no inventário:", inventory);
    console.log("Poções de vida:", stockLifePotion);
  }
  

function lastGoblinCamp(){
    hideButtons();
    body.style.background = 'url("src/assets/images/goblinChest.jpg")';
    styleImage();
    lootGoblinChest();
}

function dragonAttack(){
    const randomIndex = Math.floor(Math.random() * imagesDragonAttack.length);
    const imageUrl = `url("${imagesDragonAttack[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}


export function dodge(){
    text.innerText = "You dodge the attack from the " + monsters[gameState.fighting].name;
}
export function attackDragon() {
    const monster = monsters[gameState.fighting];
    
    if (gameState.monsterHealth === undefined) {
        gameState.monsterHealth = monster.health;
    }

    text.innerText = `The ${monster.name} attacks.`;
    text.innerText += ` You attack it with your ${mostPowerfulNameWeapon()}.`;

    let weaponPower = mostPowerfulWeapon();

    if (gameState.monsterHealth > weaponPower) {
        gameState.monsterHealth -= weaponPower;
    } else {
        gameState.monsterHealth = 0;
    }
    uiElements.monsterHealthText.innerText = gameState.monsterHealth;

    if (gameState.monsterHealth === 0) {
        winGame();
        return; 
    }

    const weaponType = getWeaponType(mostPowerfulNameWeapon());
    let dodgeChance = 0;

    if (weaponType === 'bow') {
        dodgeChance = 0.70;
    } else if (weaponType === 'sword') {
        dodgeChance = 0.40;
    } else if (weaponType === 'dagger') {
        dodgeChance = 0.15;
    }

    const isAttackDodged = Math.random() < dodgeChance;

    if (!isAttackDodged) {
        if (defense === 0 && gameState.monsterHealth > 0) {
            if (health > monster.damage) {
                dragonAttack();
                setTimeout(function() {
                    health -= monster.damage;
                    currentImage(monster);
                }, 1500);
            } else {
                health = 0;
            }
            healthText.innerText = health;
        } else {
            defense--;
            defenseText.innerText = defense;
        }
    } else {
        text.innerText += ` You dodged the attack!`;
    }

    if (health === 0) {
        playerDeadField();
    }
}


function getWeaponType(weaponName) {
    if (/bow/i.test(weaponName)) {
        return 'bow';
    } else if (/sword/i.test(weaponName)) {
        return 'sword';
    } else if (/dagger/i.test(weaponName)) {
        return 'dagger';
    } else {
        return 'unknown';
    }
}


export function attackField() {
    const monster = monsters[gameState.fighting];
    
    if (gameState.monsterHealth === undefined) {
        gameState.monsterHealth = monster.health;
    }

    text.innerText = `The ${monster.name} attacks.`;
    text.innerText += ` You attack it with your ${mostPowerfulNameWeapon()}.`;

    let weaponPower = mostPowerfulWeapon();

    if (gameState.monsterHealth > weaponPower) {
        gameState.monsterHealth -= weaponPower;
    } else {
        gameState.monsterHealth = 0;
    }
    uiElements.monsterHealthText.innerText = gameState.monsterHealth;

    if (gameState.monsterHealth === 0) {
        defeatMonsterField();
        return; 
    }

    const weaponType = getWeaponType(mostPowerfulNameWeapon());
    let dodgeChance = 0;

    if (weaponType === 'bow') {
        dodgeChance = 0.70;
    } else if (weaponType === 'sword') {
        dodgeChance = 0.40;
    } else if (weaponType === 'dagger') {
        dodgeChance = 0.15;
    }

    const isAttackDodged = Math.random() < dodgeChance;

    if (!isAttackDodged) {
        if (defense === 0 && gameState.monsterHealth > 0) {
            if (health > monster.damage) {
                health -= monster.damage;
            } else {
                health = 0;
            }
            healthText.innerText = health;
        } else {
            defense--;
            defenseText.innerText = defense;
        }
    } else {
        text.innerText += ` You dodged the attack!`;
    }

    if (health === 0) {
        playerDeadField();
    }
}

export function attackDungeon() {
    const monster = monsters[gameState.fighting];
    
    if (gameState.monsterHealth === undefined) {
        gameState.monsterHealth = monster.health;
    }

    text.innerText = `The ${monster.name} attacks.`;
    text.innerText += ` You attack it with your ${mostPowerfulNameWeapon()}.`;

    let weaponPower = mostPowerfulWeapon();

    if (gameState.monsterHealth > weaponPower) {
        gameState.monsterHealth -= weaponPower;
    } else {
        gameState.monsterHealth = 0;
    }
    uiElements.monsterHealthText.innerText = gameState.monsterHealth;

    if (gameState.monsterHealth === 0) {
        defeatMonsterDungeon();
        return; 
    }

    const weaponType = getWeaponType(mostPowerfulNameWeapon());
    let dodgeChance = 0;

    if (weaponType === 'bow') {
        dodgeChance = 0.70;
    } else if (weaponType === 'sword') {
        dodgeChance = 0.40;
    } else if (weaponType === 'dagger') {
        dodgeChance = 0.15;
    }

    const isAttackDodged = Math.random() < dodgeChance;

    if (!isAttackDodged) {
        if (defense === 0 && gameState.monsterHealth > 0) {
            if (health > monster.damage) {
                health -= monster.damage;
            } else {
                health = 0;
            }
            healthText.innerText = health;
        } else {
            defense--;
            defenseText.innerText = defense;
        }
    } else {
        text.innerText += ` You dodged the attack!`;
    }

    if (health === 0) {
        playerDeadDungeon();
    }
}


function looting(fighting){
    const loot = monsters[fighting].items.filter(item => {
        return Math.random() * 100 < item.percent;
    });

    bag.push(...loot);

    console.log("Itens na bolsa:", bag); 
}

function defeatMonsterField() {
    const defeatedMonster = monsters[gameState.fighting];
    xp += monsters[gameState.fighting].xp;
    monsters[gameState.fighting].counter ++;

    if (defeatedMonster.name === "goblin riding wolf" && defeatedMonster.counter === 1) {
        upgradeWeaponShop1();
    }

    looting(gameState.fighting);
    descriptionXpText.setAttribute('title', "XP: "+xp+".");
    monsterDeadField();

    setTimeout(function() {
        levelUp();
        if(goblinCampActive){
            if(monsters[2].counter > 0){      
                showButtons()
                fightGoblin();
            }else{
                lastGoblinCamp();
                goblinCampActive = false;
                uiElements.monsterStats.style.display = "none"; 
                setTimeout(function(){
                    showButtons();
                    goField();
                },5000);
            }
        }else{
            showButtons();
            goField();
            uiElements.monsterStats.style.display = "none"; 
        }
        
    }, 1500);   
}

function defeatMonsterDungeon() {
    const defeatedMonster = monsters[gameState.fighting];
    xp += monsters[gameState.fighting].xp;
    monsters[gameState.fighting].counter ++;

    if (defeatedMonster.name === "dungeon flaming gummen" && defeatedMonster.counter === 1) { 
        upgradeWeaponShop2();
    }
    if (defeatedMonster.name === "dungeon pantera" && defeatedMonster.counter === 1) { 
        upgradeWeaponShop3();
    }

    looting(gameState.fighting);
    descriptionXpText.setAttribute('title', "XP: "+xp+".");

    if(defeatedMonster.name === "dungeon mimico"){
        mimicoDead(dungeonFloor);
        setTimeout(function(){
            showButtons();
            levelUp();
            if(dungeonFloor === 1){
                goDangeon1();
            }else if(dungeonFloor === 2){
                goDangeon2();
            }else if(dungeonFloor === 3){
                goDangeon3();
            }else{
                goDangeon4();
            }
            uiElements.monsterStats.style.display = "none"; 
        }, 5000)
    }else{
        monsterDeadDungeon();
        setTimeout(function() {
            showButtons();
            levelUp();
            if(dungeonFloor === 1){
                goDangeon1();
            }else if(dungeonFloor === 2){
                goDangeon2();
            }else if(dungeonFloor === 3){
                goDangeon3();
            }else{
                goDangeon4();
            }
            uiElements.monsterStats.style.display = "none"; 
        }, 1500);  
    }
}

function levelUp() {
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


function currentPower(){
    power = mostPowerfulWeapon();
    powerText.innerText = power;
}

function mostPowerfulWeapon() {
    let maxPower = -1;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
        }
    }
    return maxPower;
}

function mostPowerfulNameWeapon() {
    let maxPower = -1;
    let morePowerfulWeapon = 0;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
            morePowerfulWeapon = weapon.name;
        }
    }
    return morePowerfulWeapon;
}

function mostPowerfulWeaponInInventory() {
    let maxPower = -1;
    let powerfulWeapon = null;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
            powerfulWeapon = weapon;
        }
    }
    return powerfulWeapon;
}
