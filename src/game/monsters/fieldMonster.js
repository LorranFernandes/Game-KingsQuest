import { imagesMonsterDiedField, monsters } from "../../data/index.js";
import { body, hideButtons, styleImage, text } from "../../game.js";
import { setGoblinCampActive } from "../combat/combatStats.js";
import { getRandomImageUrl, goFightField, goToScene } from "../locations/locations.js";

export function fightFildSlime() {
    goFightField("field slime");    
}

export function fightFieldBeast() {
    goFightField("field beast");
}

export function fightFieldEsqueleton() {
    goFightField("field skeleton");
}

export function fightWolf() {
    goFightField("wolf");
}

export function fightGoblinRidingWolf() {
    goFightField("goblin riding wolf");
}

export function fightFakePinkBunny() {
    goFightField("fake pink bunny");
}

export function fightGoblin() {
    goFightField("goblin");
    if(monsters[2].counter > 0){
        monsters[2].counter --;
    }  
}

export function attackGoblinCamp(){
    setGoblinCampActive(true);
    monsters[2].counter = 4; //five goblins
    goFightField("goblin");  
}

export function fightGoblinCamp() {
    goToScene("attack Goblin Camp");
}
    
export function fightPinkBunny(){
    goToScene("fight pink bunny");
  }

export function monsterDeadField() {
    hideButtons();
    text.innerText = 'The monster screams "Arg!" as it dies. You gain experience points and find items.'

    body.style.background = getRandomImageUrl(imagesMonsterDiedField);
    styleImage();
}