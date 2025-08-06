import { imagesDiedDungeon } from "../../data/index.js";
import { body, hideButtons, styleImage, text } from "../../game.js";
import { setDungeonFloor } from "../combat/combatStats.js";
import { getRandomImageUrl, goFightDungeon } from "../locations/locations.js";

export function fightDungeonSlime(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon slime");
}

export function fightDungeonBeast(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon beast");
}

export function fightDungeonEsqueleton(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon skeleton");
}

export function fightMimico(floor) {
    setDungeonFloor(floor);   
    goFightDungeon("dungeon mimico");

}

export function fightOwlBear(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon owl bear");
}

export function fightPantera(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon pantera");
}

export function fightLitch(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon litch");
}

export function fightBalor(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon balor");
}

export function fightFlamingGummen(floor) {
    setDungeonFloor(floor);
    goFightDungeon("dungeon flaming gummen");
}

export function fightFlamingGoat(floor) {
    setDungeonFloor(floor);       
    goFightDungeon("dungeon flaming goat");
}

export function monsterDeadDungeon(){
    hideButtons();
    text.innerText = 'The monster screams "Arg!" as it dies. You gain experience points and find items.'

    body.style.background = getRandomImageUrl(imagesDiedDungeon);
    styleImage();
}