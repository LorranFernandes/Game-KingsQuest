import { chestMimico1, chestMimico2, chestMimico3, chestMimico4, imagesChest, monsters } from "../../data/index.js";
import { body, descriptionXpText, hideButtons, styleImage, text, uiElements } from "../../game.js";
import { getWeaponType } from "../inventory/weapon.js";
import { upgradeWeaponStore1, upgradeWeaponStore2, upgradeWeaponStore3 } from "../locations/locations.js";
import { cleanNameMonster, findmonsterByName, findmonsterId, randomMonsterImage } from "../monsters/monsterSystem.js";
import { addXp, bag, decreaseDefense, defense, health, takeDamage, xp } from "../player/playerStats.js";
import { mostPowerfulNameWeapon, mostPowerfulWeapon } from "../Stores/weaponSystem.js";
import { lootGoblinChest } from "./fieldCombat.js";

export var fighting = 0;
export let goblinCampActive = false;
export let monsterImage = null
export let dungeonFloor = 0;
export let gameState = {
    monsterHealth: 0,
    fighting: 0
};

export function setDungeonFloor(value){
    if(value > 0 && value <=4){
        dungeonFloor = value;
    }
}

export function setGoblinCampActive(value){
    if(typeof value === "boolean")
        goblinCampActive = value;
}

export function setRandomMonsterImage(monster){
    monsterImage = monster.image[Math.floor(Math.random() * monster.image.length)];
}

export function goFight(nameMonster){
    const monster = findmonsterByName(nameMonster, monsters);
    const monsterIndex = findmonsterId(monster, monsters);
    if (monster) {
        uiElements.monsterStats.style.display = "block";
        gameState.monsterHealth = monster.health;
        gameState.fighting = monsterIndex;

        const cleanName = cleanNameMonster(monster);
        uiElements.monsterName.innerText = cleanName;        
        uiElements.monsterHealthText.innerText = gameState.monsterHealth;
        randomMonsterImage(monster);
    } else {
        console.error(`Monster with name ${monsterName} not found.`);
    }
}

export function getCurrentMonster() {
    return monsters[gameState.fighting];
}

export function dodge(){
    text.innerText = "You dodge the attack from the " + getCurrentMonster();
}

export function initializeMonsterHealth(monster) {
    if (gameState.monsterHealth === undefined) {
        gameState.monsterHealth = monster.health;
    }
}

export function describeAttack(monster) {
    text.innerText = `The ${monster.name} attacks.`;
    text.innerText += ` You attack it with your ${mostPowerfulNameWeapon()}.`;
}

export function applyPlayerAttack(monster, onDefeat) {
    const weaponPower = mostPowerfulWeapon();
    gameState.monsterHealth = Math.max(0, gameState.monsterHealth - weaponPower);
    uiElements.monsterHealthText.innerText = gameState.monsterHealth;
    if (gameState.monsterHealth === 0) {
        onDefeat();
    }
}

export function isAttackDodged() {
    const weaponType = getWeaponType(mostPowerfulNameWeapon());
    const dodgeChance = {
        bow: 0.70,
        sword: 0.40,
        dagger: 0.15
    }[weaponType] || 0;

    return Math.random() < dodgeChance;
}

export function applyMonsterAttack(monster) {
    if (defense === 0 && gameState.monsterHealth > 0) {
        takeDamage(monster.damage);
        return true;
    } else {
        decreaseDefense();
    }
    return false;
}

export function displayDodgeMessage() {
    text.innerText += ` You dodged the attack!`;
}

export function returnToDungeon() {
    if (dungeonFloor === 1) goToScene("dungeon1");
    else if (dungeonFloor === 2) goToScene("dungeon2");
    else if (dungeonFloor === 3) goToScene("dungeon3");
    else goToScene("dungeon4");
}

export function attack({ onDefeat, onPlayerDeath }) {
    const monster = getCurrentMonster();
    initializeMonsterHealth(monster);

    describeAttack(monster);
    applyPlayerAttack(monster, onDefeat);

    if (gameState.monsterHealth === 0) return;

    if (!isAttackDodged()) {
        applyMonsterAttack(monster);
    } else {
        displayDodgeMessage()
    }

    if (health === 0) {
        onPlayerDeath();
    }
}

export function getImageByFloor(floor) {
    const imageChest = imagesChest.find(chest => chest.tier === floor);
    return imageChest ? imageChest.image : null;
}

export function getChestByFloor(floor) {
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

export function lastGoblinCamp(){
    hideButtons();
    body.style.background = 'url("src/assets/images/goblinChest.jpg")';
    styleImage();
    lootGoblinChest();
}

export function looting(fighting){
    const loot = monsters[fighting].items.filter(item => {
        return Math.random() * 100 < item.percent;
    });

    bag.push(...loot);

    console.log("Itens na bolsa:", bag); 
}

export function handleXpAndLoot(monsterIndex) {
    const monster = monsters[monsterIndex];
    addXp(monster.xp);
    monster.counter++;
    looting(monsterIndex);
    descriptionXpText.setAttribute('title', `XP: ${xp}.`);
    return monster;
}

export function handleMonsterStoreUpgrade(monster) {
    const upgrades = {
        "goblin riding wolf": upgradeWeaponStore1,
        "dungeon flaming gummen": upgradeWeaponStore2,
        "dungeon pantera": upgradeWeaponStore3
    };
    if (upgrades[monster.name] && monster.counter === 1) {
        upgrades[monster.name]();
    }
}
