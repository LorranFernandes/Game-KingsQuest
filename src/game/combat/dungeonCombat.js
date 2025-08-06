import { body, hideButtons, showButtons, styleImage, text, uiElements } from "../../game.js";
import { defensePotion, strengthPotion } from "../inventory/potion.js";
import { monsterDeadDungeon } from "../monsters/dungeonMonster.js";
import { addStockLifePotion, bag, inventory, levelUp, playerDeadDungeon, stockLifePotion } from "../player/playerStats.js";
import { attack, gameState, getChestByFloor, getImageByFloor, handleMonsterStoreUpgrade, handleXpAndLoot, returnToDungeon } from "./combatStats.js";

export function defeatMonsterDungeon() {
    const defeatedMonster = handleXpAndLoot(gameState.fighting);
    handleMonsterStoreUpgrade(defeatedMonster);

    if (defeatedMonster.name === "dungeon mimico") {
        mimicoDead(dungeonFloor);
        setTimeout(() => {
            showButtons();
            levelUp();
            returnToDungeon();
            uiElements.monsterStats.style.display = "none";
        }, 5000);
    } else {
        monsterDeadDungeon();
        setTimeout(() => {
            showButtons();
            levelUp();
            returnToDungeon();
            uiElements.monsterStats.style.display = "none";
        }, 1500);
    }
}

export function mimicoDead(floor){
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
            addStockLifePotion();
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

export function attackDungeon() {
    attack({
        onDefeat: defeatMonsterDungeon,
        onPlayerDeath: playerDeadDungeon
    });
}