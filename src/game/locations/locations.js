import { imagesBackWorld, imagesField, imagesWin, locationAliases, placeLocations } from "../../data/index.js";
import { backWorld, body, hideButtons, restart, styleImage, text, uiElements, update } from "../../game.js";
import { dodge, goFight } from "../combat/combatStats.js";
import { attackDragon } from "../combat/dragonCombat.js";
import { attackDungeon } from "../combat/dungeonCombat.js";
import { attackField } from "../combat/fieldCombat.js";
import { lifePotion, luckPotion } from "../inventory/potion.js";
import { fightDragon } from "../monsters/bossMonster.js";
import { attackGoblinCamp, fightFakePinkBunny } from "../monsters/fieldMonster.js";
import { sellItems, sleep } from "../player/playerStats.js";
import { giftsBoard } from "../Stores/board.js";
import { buyDefensePotion, buyLifePotion, buyStrengthPotion } from "../Stores/potion.js";
import { buyCopperDagger, buyCopperSword, buyDandelionBow, buyFakeHeroSword, buyFlameBow, buyLigthBow, buyObsidianDagger, buyPrismaDagger, buyRaisorSword, buyShortBow, buySilverSword } from "../Stores/weapon.js";
import { runDungeon, shoutOut1, shoutOut2, shoutOut3, shoutOut4, walk1, walk2, walk3, walk4 } from "./dungeon.js";
import { goEast, goNorth, goWest, runField } from "./field.js";

export const locations = [
  {
    name: "town square",
    "button text": ["Go to guilda", "Go to field", "Go to dungeon", "Fight dragon"],
    "button functions": [() => goToScene("guilda"), goField, () => goToScene("dungeon1"), fightDragon],
    text: "Welcome new traveler, you are the hero called by the gods..."
  },
  {
    name: "guilda",
    "button text": ["Look at the board", "Go to stores", "Sleep", "Leave the guild"],
    "button functions": [() => goToScene("board"), () => goToScene("stores"), sleep, () => goToScene("town square")],
    text: "You enter the guilda."
  },
  {
    name: "field",
    "button text": ["Go to west", "Go to north", "Go to east", "Return to the city"],
    "button functions": [goWest, goNorth, goEast, () => goToScene("town square")],
    text: "You have arrived at the camp..."
  },
  {
    name: "dungeon1",
    "button text": ["To walk", "Shout out", "Return to the city", "Go up walk"],
    "button functions": [walk1, shoutOut1, () => goToScene("town square"), () => goToScene("dungeon2")],
    text: "You entered the dungeon..."
  },
  {
    name: "dungeon2",
    "button text": ["To walk", "Shout out", "Go down walk", "Go up walk"],
    "button functions": [walk2, shoutOut2, () => goToScene("dungeon1"), () => goToScene("dungeon3")],
    text: "You are on the second floor..."
  },
  {
    name: "dungeon3",
    "button text": ["To walk", "Shout out", "Go down walk", "Go up walk"],
    "button functions": [walk3, shoutOut3, () => goToScene("dungeon2"), () => goToScene("dungeon4")],
    text: "You are on the third floor..."
  },
  {
    name: "dungeon4",
    "button text": ["To walk", "Shout out", "Go down walk", "Go down walk"],
    "button functions": [walk4, shoutOut4, () => goToScene("dungeon3"), () => goToScene("dungeon3")],
    text: "You are on the fourth and top floor..."
  },
  {
    name: "stores",
    "button text": ["Sell your items", "Buy weapons", "Buy potions", "Leave the stores"],
    "button functions": [sellItems, () => goToScene("weapons"), () => goToScene("potions"), () => goToScene("town square")],
    text: "You enter the store."
  },
  {
    name: "board",
    "button text": ["Kill 5 slimes (35 golds)", "Kill 3 wolfs (50 golds)", "Kill 1 pink bunny (100 golds)", "Return to guilda"],
    "button functions": [() => giftsBoard("slime"), () => giftsBoard("wolf"), () => giftsBoard("fake pink bunny"), () => goToScene("guilda")],
    text: "You look at the rewards board."
  },
  {
    name: "potions",
    "button text": ["Life potion 50 (50 golds)", "Defense Potion (35 golds)", "Potion of strength 20% (70 golds)", "Return to stores"],
    "button functions": [buyLifePotion, buyDefensePotion, buyStrengthPotion, () => goToScene("stores")],
    text: "You enter the potions store."
  },
  {
    name: "weapons",
    "button text": ["Copper sword (35 golds)", "Short bow (30 golds)", "Copper dagger (45 golds)", "Return to stores"],
    "button functions": [buyCopperSword, buyShortBow, buyCopperDagger, () => goToScene("stores")],
    text: "You enter the weapons store."
  },
  {
    name: "fight Dungeon",
    "button text": ["Attack", "Dodge", "Drink life potion", "Run"],
    "button functions": [attackDungeon, dodge, lifePotion, runDungeon],
    text: "The battle begins."
  },
  {
    name: "fight Field",
    "button text": ["Attack", "Dodge", "Drink life potion", "Run"],
    "button functions": [attackField, dodge, lifePotion, runField],
    text: "The battle begins."
  },
  {
    name: "attack Goblin Camp",
    "button text": ["Attack", "Drink life potion", "Run", "Run"],
    "button functions": [attackGoblinCamp, lifePotion, runField, runField],
    text: "You found a goblin camp..."
  },
  {
    name: "fight pink bunny",
    "button text": ["Attack?", "Donate 50 coins", "Drink life potion", "Run"],
    "button functions": [fightFakePinkBunny, luckPotion, lifePotion, runField],
    text: "The battle begins."
  },
  {
    name: "fight Dragon",
    "button text": ["Attack", "Dodge", "Drink life potion", "Run"],
    "button functions": [attackDragon, dodge, lifePotion, () => goToScene("town square")],
    text: 'The monster screams "Arg!" as it dies...'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart, restart],
    text: "You die. ☠️"
  },
  {
    name: "kill monster Dungeon",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [() => goToScene("town square"), () => goToScene("town square"), () => goToScene("town square")],
    text: 'The monster screams "Arg!" as it dies...'
  },
  {
    name: "win",
    "button text": ["Stay in the world", "Stay in the world", "Go back to your world", "Go back to your world"],
    "button functions": [() => goToScene("town"), () => goToScene("town square"), backWorld, backWorld],
    text: "You killed the dragon!..."
  },
  {
    name: "back World",
    "button text": ["", "", "", ""],
    "button functions": [],
    text: "You return to your old world..."
  }
];

export function upgradeWeaponStore1() {
    const weaponShop = locations.find(location => location.name === "weapons");
    if (weaponShop) {
        weaponShop["button text"] = ["Raisor sword (60 golds)", "Ligth bow (80 golds)", "Obsidian dagger (95 golds)", "Return to stores"];
        weaponShop["button functions"] = [buyRaisorSword, buyLigthBow, buyObsidianDagger, () => goToScene("stores")];
        weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
    }
}

export function upgradeWeaponStore2() {
    const weaponShop = locations.find(location => location.name === "weapons");
    if (weaponShop) {
        weaponShop["button text"] = ["Silver sword (85 golds)", "Dandelion bow (90 golds)", "Prisma dagger (180 golds)", "Return to stores"];
        weaponShop["button functions"] = [buySilverSword, buyDandelionBow, buyPrismaDagger, () => goToScene("stores")];
        weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
    }
}

export function upgradeWeaponStore3() {
    const weaponShop = locations.find(location => location.name === "weapons");
    if (weaponShop) {
        weaponShop["button text"] = ["Hero sword? (220 golds)", "Flame bow (225 golds)", "Prisma dagger (180 golds)", "Return to stores"];
        weaponShop["button functions"] = [buyFakeHeroSword, buyFlameBow, buyPrismaDagger, () => goToScene("stores")];
        weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
    }
}

export function goToScene(sceneName) {
    const scene = placeLocations.find(loc => loc.name === sceneName);
    if (!scene) {
        console.warn(`Scene "${sceneName}" not found.`);
        return;
    }

    goToLocation(scene.name);
    body.style.background = `url("${scene.image}")`;

    body.style.backgroundSize = scene.backgroundSize || "";

    if(typeof scene.text === "true")
        text.innerText = scene.text;

    if (scene.styleImage) styleImage();

    if(typeof scene.showStats === "true")
        uiElements.monsterStats.style.display = scene.showStats = "block";

}

export function goToLocation(name) {
    const actualName = locationAliases[name] || name;
    const location = findLocationByName(actualName, locations);
    if (location) {
        update(location);
    } else {
        console.log(`Location named "${name}" not found.`);
    }
}

export function findLocationByName(name, locations) {
    return locations.find(location => location.name === name);
}

export function randomEvent(events) {
    const roll = Math.random() * 100;
    for (const event of events) {
        if (roll <= event.chance) {
            event.action();
            return;
        }
    }
}

export function getRandomImageUrl(imageArray) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return `url("${imageArray[randomIndex]}")`;
}

export function goField() {
  goToLocation("field");
  body.style.background = getRandomImageUrl(imagesField);
  styleImage();
}

export function goWin() {
  goToLocation("win");
  body.style.background = getRandomImageUrl(imagesWin);
  styleImage();
}

export function goBackWorld() {
  goToLocation("back World");
  hideButtons();
  body.style.background = getRandomImageUrl(imagesBackWorld);
  styleImage();
}

export function goFightDragon(monsterName){
  goFight(monsterName);
  goToLocation("fight Dragon");
}

export function goFightField(monsterName) { 
  goFight(monsterName);
  goToLocation("fight Field");
}
export function goFightDungeon(monsterName) { 
  goFight(monsterName);
  goToLocation("fight Dungeon");
}

export function lose() {
  goToLocation("lose");
  uiElements.monsterStats.style.display = "none";
}
  