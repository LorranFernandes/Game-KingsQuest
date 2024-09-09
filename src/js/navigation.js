
import { uiElements, gameState, styleImage, body, text, goToLocation,randomImage,
  buyDandelionBow,buyFlameBow,buyObsidianDagger,buyPrismaDagger,buyLigthBow,
  buyRaisorSword,buyFakeHeroSword,buySilverSword} from './game.js';
import { monsters, locations, imagesField } from './data.js';


export function goTown() {
    goToLocation("town square");
    body.style.background = 'url("src/assets/images/townsquare.jpeg")';
    styleImage();
    uiElements.monsterStats.style.display = "none";
    text.innerText = "You are in the town square.";

  }

  export function goCity() {
    goToLocation("town square");
    body.style.background = 'url("src/assets/images/cidadeAmpliada.jpg")';
    styleImage();
    body.style.backgroundSize = "cover";
    uiElements.monsterStats.style.display = "none"
  }
  
  export function goGuilda() {
    goToLocation("guilda");
    body.style.background = 'url("src/assets/images/guilda5.jpeg")';
    styleImage();
  }
  
  export function goField() {
    goToLocation("field");
    const randomIndex = Math.floor(Math.random() * imagesField.length);
    const imageUrl = `url("${imagesField[randomIndex]}")`;

    body.style.background = imageUrl;
    styleImage();
  }
  
  export function goDangeon1() {
    goToLocation("dangeon1");
      body.style.background = 'url("src/assets/images/dungeon1.jpeg")';
      styleImage();
  }
  
  export function goDangeon2() {
    goToLocation("dangeon2");
      body.style.background = 'url("src/assets/images/dungeon2.jpeg")';
      styleImage();
  }
  
  export function goDangeon3() {
    goToLocation("dangeon3");
      body.style.background = 'url("src/assets/images/dungeon3.jpeg")';
      styleImage();
  }
  
  export function goDangeon4() {
    goToLocation("dangeon4");
      body.style.background = 'url("src/assets/images/dungeon4.jpeg")';
      styleImage();
  }
  
  export function goStores(){
    goToLocation("stores");
      body.style.background = 'url("src/assets/images/stores.jpeg")';
      styleImage();
  }

export function goBoard(){
    goToLocation("board");
    body.style.background = 'url("src/assets/images/board3.jpeg")';
    styleImage();
}

export function buyPotions(){
    goToLocation("potions");
    body.style.background = 'url("src/assets/images/potionStore2.jpeg")';
    styleImage();
}

export function buyWeapons(){
    goToLocation("weapons");
    body.style.background = 'url("src/assets/images/weaponsStore.jpeg")';
    styleImage();
}

export function goFightField(nameMonster) { 
    const monster = monsters.find(mon => mon.name === nameMonster);
    const monsterIndex = monsters.indexOf(monster);
    if (monster) {
        console.log("Found monster:", monster);
        uiElements.monsterStats.style.display = "block";
        gameState.monsterHealth = monster.health;
        gameState.fighting = monsterIndex;

        const cleanName = monster.name.replace(/^(field |dungeon )/, '');
        uiElements.monsterName.innerText = cleanName;        
        uiElements.monsterHealthText.innerText = gameState.monsterHealth;
        randomImage(monster);

        if (monster.name === "celestial dragon"){
          goToLocation("fight Dragon");
        }else{
          goToLocation("fight Field");
        }
        console.log(monster.name)
    } else {
        console.error(`Monster with name ${monsterName} not found.`);
    }
}

export function goFightDungeon(monsterName) { 
    const monster = monsters.find(mon => mon.name === monsterName);
    const monsterIndex = monsters.findIndex(mon => mon.name === monsterName);
    if (monster) {
        console.log("Found monster:", monster);
        uiElements.monsterStats.style.display = "block";
        gameState.monsterHealth = monster.health;
        gameState.fighting = monsterIndex;

        const cleanName = monster.name.replace(/^(field |dungeon )/, '');
        uiElements.monsterName.innerText = cleanName;
        uiElements.monsterHealthText.innerText = gameState.monsterHealth;
        randomImage(monster);
        goToLocation("fight Dungeon");
    } else {
        console.error(`Monster with name ${monsterName} not found.`);
    }
}

export function upgradeWeaponShop1() {
  const weaponShop = locations.find(location => location.name === "weapons");
  if (weaponShop) {
      weaponShop["button text"] = ["Raisor sword (60 golds)", "Ligth bow (80 golds)", "Obsidian dagger (95 golds)", "Return to stores"];
      weaponShop["button functions"] = [buyRaisorSword, buyLigthBow, buyObsidianDagger, goStores];
      weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
  }
}

export function upgradeWeaponShop2() {
  const weaponShop = locations.find(location => location.name === "weapons");
  if (weaponShop) {
      weaponShop["button text"] = ["Silver sword (85 golds)", "Dandelion bow (90 golds)", "Prisma dagger (180 golds)", "Return to stores"];
      weaponShop["button functions"] = [buySilverSword, buyDandelionBow, buyPrismaDagger, goStores];
      weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
  }
}

export function upgradeWeaponShop3() {
  const weaponShop = locations.find(location => location.name === "weapons");
  if (weaponShop) {
      weaponShop["button text"] = ["Hero sword? (220 golds)", "Flame bow (225 golds)", "Prisma dagger (180 golds)", "Return to stores"];
      weaponShop["button functions"] = [buyFakeHeroSword, buyFlameBow, buyPrismaDagger, goStores];
      weaponShop.text = "You enter the weapons store. The gunsmith changed the weapons catalog.";
  }
}

export function fightGoblinCamp() {
    goToLocation("attack Goblin Camp");
    body.style.background = 'url("src/assets/images/goblinCamp1.jpeg")';
    styleImage();
}
    
export function fightPinkBunny(){
    goToLocation("fight pink bunny");
    body.style.background = 'url("src/assets/images/pinkBunny.jpeg")';
    styleImage();
  }

export function lose() {
    goToLocation("lose");
    uiElements.monsterStats.style.display = "none";
  }
  

  
