import { text, uiElements } from "../../game.js";
import { fightBalor, fightDungeonBeast, fightDungeonEsqueleton, fightDungeonSlime, fightFlamingGoat, fightFlamingGummen, fightLitch, fightMimico, fightOwlBear, fightPantera } from "../monsters/dungeonMonster.js";
import { goToScene, randomEvent } from "./locations.js";

export function walk1() {
    const events = [
        { chance: 65, action: () => fightDungeonSlime(1) },
        { chance: 100, action: () => fightDungeonEsqueleton(1) }
    ];
    randomEvent(events);
}

export function walk2() {
    const events = [
        { chance: 15, action: () => fightMimico(2) },
        { chance: 25, action: () => fightDungeonBeast(2) },
        { chance: 65, action: () => fightDungeonEsqueleton(2) },
        { chance: 100, action: () => fightDungeonSlime(2) }
    ];
    randomEvent(events);
}

export function walk3() {
    const events = [
        { chance: 10, action: () => fightFlamingGoat(3) },
        { chance: 15, action: () => fightMimico(3) },
        { chance: 25, action: () => fightFlamingGummen(3) },
        { chance: 35, action: () => fightOwlBear(3) },
        { chance: 55, action: () => fightLitch(3) },
        { chance: 75, action: () => fightDungeonEsqueleton(3) },
        { chance: 100, action: () => fightDungeonBeast(3) }
    ];
    randomEvent(events);
}

export function walk4() {
    const events = [
        { chance: 4, action: () => fightMimico(4) },
        { chance: 7, action: () => fightDungeonBeast(4) },
        { chance: 13, action: () => fightOwlBear(4) },
        { chance: 25, action: () => fightBalor(4) },
        { chance: 40, action: () => fightPantera(4) },
        { chance: 65, action: () => fightLitch(4) },
        { chance: 100, action: () => fightFlamingGoat(4) }
    ];
    randomEvent(events);
}


export function shoutOut1() {
    const events = [
        { chance: 5, action: () => fightMimico(1) },
        { chance: 60, action: () => fightDungeonEsqueleton(1) },
        { chance: 100, action: () => fightDungeonSlime(1) }
    ];
    randomEvent(events);
}

export function shoutOut2() {
    const events = [
        { chance: 15, action: () => fightMimico(2) },
        { chance: 40, action: () => fightDungeonBeast(2) },
        { chance: 75, action: () => fightDungeonEsqueleton(2) },
        { chance: 100, action: () => fightDungeonSlime(2) }
    ];
    randomEvent(events);
}

export function shoutOut3() {
    const events = [
        { chance: 15, action: () => fightFlamingGoat(3) },
        { chance: 20, action: () => fightMimico(3) },
        { chance: 30, action: () => fightFlamingGummen(3) },
        { chance: 45, action: () => fightOwlBear(3) },
        { chance: 70, action: () => fightLitch(3) },
        { chance: 90, action: () => fightDungeonEsqueleton(3) },
        { chance: 100, action: () => fightDungeonBeast(3) }
    ];
    randomEvent(events);
}

export function shoutOut4() {
    const events = [
        { chance: 5, action: () => fightMimico(4) },
        { chance: 12, action: () => fightFlamingGummen(4) },
        { chance: 20, action: () => fightFlamingGoat(4) },
        { chance: 30, action: () => fightBalor(4) },
        { chance: 40, action: () => fightLitch(4) },
        { chance: 55, action: () => fightPantera(4) },
        { chance: 75, action: () => fightOwlBear(4) },
        { chance: 100, action: () => fightPantera(4) }
    ];
    randomEvent(events);
}

export function runDungeon(){
    goToScene("dungeon1");
    text.innerText += " You ran away when the enemy tried to attack you."
    uiElements.monsterStats.style.display = "none";
}