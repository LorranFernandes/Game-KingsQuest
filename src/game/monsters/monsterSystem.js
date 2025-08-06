import { items, monsters } from "../../data/index.js";
import { body, styleImage } from "../../game.js";
import { monsterImage, setRandomMonsterImage } from "../combat/combatStats.js";

// Função para atribuir itens aos monstros
export function monsterItems() {
    for (let i = 0; i < items.length; i++) {
        const baseMonsterName = items[i].monster;
        monsters.forEach(monster => {
            const monsterName = cleanNameMonster(monster);
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

export function findmonsterByName(name, monsters) {
    return monsters.find(monster => monster.name === name);
}

export function findmonsterId(monster, monsters) {
    return monsters.indexOf(monster);
}

export function cleanNameMonster(monster){
    return monster.name.replace(/^(field |dungeon )/, '');
}


export function getKillsByMonsterName(monsterName){
    return monsters.reduce((count, mon) => {
        const cleanName = cleanNameMonster(mon);
        return (monsterName === cleanName) ? count + mon.counter : count;
    }, 0);
}

export function reduceMonsterCount(monsterName, amount){
    monsters.forEach(mon => {
        const cleanName = cleanNameMonster(mon);
        if (monsterName === cleanName) {
            const reduction = Math.min(mon.counter, amount);
            mon.counter -= reduction;
        }
    });
}

export function randomMonsterImage(monster) {
    setRandomMonsterImage(monster);
    body.style.background = `url("${monsterImage}")`;
    styleImage();
    return monsterImage;
}

export function currentMonsterImage() {
    const imageUrl = monsterImage;
    body.style.background = `url("${imageUrl}")`;
    styleImage();
}