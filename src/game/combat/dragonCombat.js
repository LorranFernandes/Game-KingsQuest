import { imagesDragonAttack } from "../../data/index.js";
import { body, styleImage, winGame } from "../../game.js";
import { currentMonsterImage } from "../monsters/monsterSystem.js";
import { health, playerDeadField } from "../player/playerStats.js";
import { applyMonsterAttack, applyPlayerAttack, describeAttack, displayDodgeMessage, gameState, getCurrentMonster, initializeMonsterHealth, isAttackDodged } from "./combatStats.js";

export function attackDragon() {
    const monster = getCurrentMonster();
    
    initializeMonsterHealth(monster)

    describeAttack(monster)

    applyPlayerAttack(monster, winGame)

    if (gameState.monsterHealth === 0) return; 

    if (!isAttackDodged()) {
        const playerStillAlive = applyMonsterAttack(monster);
        setTimeout(function () {
            if (playerStillAlive) {
                currentMonsterImage(monster);
                showRandomDragonAttackScene();
            } 
            if (health === 0) {
                playerDeadField();
            }
        }, 1500); 
    } else {
        displayDodgeMessage()
    }

}

export function showRandomDragonAttackScene(){
    const randomIndex = Math.floor(Math.random() * imagesDragonAttack.length);
    const imageUrl = `url("${imagesDragonAttack[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
}
