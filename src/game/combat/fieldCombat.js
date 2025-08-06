import { chestGoblinCamps, monsters } from "../../data/index.js";
import { showButtons, text, uiElements } from "../../game.js";
import { defensePotion, strengthPotion } from "../inventory/potion.js";
import { goField } from "../locations/locations.js";
import { fightGoblin, monsterDeadField } from "../monsters/fieldMonster.js";
import { addStockLifePotion, bag, inventory, levelUp, playerDeadField, stockLifePotion } from "../player/playerStats.js";
import { attack, gameState, goblinCampActive, handleMonsterStoreUpgrade, handleXpAndLoot, lastGoblinCamp } from "./combatStats.js";

export function defeatMonsterField() {
    const defeatedMonster = handleXpAndLoot(gameState.fighting);
    handleMonsterStoreUpgrade(defeatedMonster);
    monsterDeadField();

    setTimeout(() => {
        levelUp();

        if (goblinCampActive) {
            if (monsters[2].counter > 0) {
                showButtons();
                fightGoblin();
            } else {
                lastGoblinCamp();
                goblinCampActive = false;
                uiElements.monsterStats.style.display = "none";
                setTimeout(() => {
                    showButtons();
                    goField();
                }, 5000);
            }
        } else {
            showButtons();
            goField();
            uiElements.monsterStats.style.display = "none";
        }
    }, 1500);
}

export function attackField() {
    attack({
        onDefeat: defeatMonsterField,
        onPlayerDeath: playerDeadField
    });
}

export function lootGoblinChest() {
    const lootedItems = chestGoblinCamps.filter(item => Math.random() * 100 < item.percent);
  
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
  
    const itemNames = lootedItems.map(item => item.name).join(", ");
    text.innerText = `You open the chest and find: ${itemNames}.`;
  
    console.log("Itens na bolsa:", bag);
    console.log("Itens no inventário:", inventory);
    console.log("Poções de vida:", stockLifePotion);
  }