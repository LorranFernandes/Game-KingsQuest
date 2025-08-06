import { imagesEast, imagesNorth, imagesWest } from "../../data/index.js";
import { body, styleImage, text, uiElements } from "../../game.js";
import { setGoblinCampActive } from "../combat/combatStats.js";
import { fightFieldBeast, fightFieldEsqueleton, fightFildSlime, fightGoblin, fightGoblinCamp, fightGoblinRidingWolf, fightPinkBunny, fightWolf } from "../monsters/fieldMonster.js";
import { getRandomImageUrl, goField, goToLocation, randomEvent } from "./locations.js";

export function goWest() {
    randomEvent([
        { chance: 4, action: fightPinkBunny },
        { chance: 7, action: fightFieldBeast },
        { chance: 13, action: fightWolf },
        { chance: 25, action: fightFieldEsqueleton },
        { chance: 40, action: fightGoblin },
        { chance: 65, action: goWestImage },
        { chance: 100, action: fightFildSlime }
    ]);
}

export function goNorth() {
    randomEvent([
        { chance: 5, action: goNorthImage },
        { chance: 10, action: fightFieldBeast },
        { chance: 20, action: fightFildSlime },
        { chance: 30, action: fightGoblinRidingWolf },
        { chance: 40, action: fightGoblinCamp },
        { chance: 55, action: fightWolf },
        { chance: 75, action: fightFieldEsqueleton },
        { chance: 100, action: fightGoblin }
    ]);
}

export function goEast() {
    randomEvent([
        { chance: 2, action: fightPinkBunny },
        { chance: 10, action: fightWolf },
        { chance: 20, action: fightFieldBeast },
        { chance: 35, action: fightFieldEsqueleton },
        { chance: 55, action: fightGoblin },
        { chance: 80, action: fightFildSlime },
        { chance: 100, action: goEastImage }
    ]);
}

function goWestImage(){
    goToLocation("field");
    body.style.background = getRandomImageUrl(imagesWest);
    styleImage();
}

function goNorthImage(){
    goToLocation("field");
    body.style.background = getRandomImageUrl(imagesNorth);
    styleImage();
}
function goEastImage(){
    goToLocation("field");
    body.style.background = getRandomImageUrl(imagesEast);
    styleImage();
}

export function runField(){
    goField();
    text.innerText += " You ran away when the enemy tried to attack you."
    uiElements.monsterStats.style.display = "none";
    setGoblinCampActive(false);
}