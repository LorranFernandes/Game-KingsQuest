import {goEast,goNorth,goWest,attackDungeon,attackField,dodge,attackGoblinCamp,
  buyCopperDagger,buyCopperSword,buyDefensePotion,buyLifePotion,buyShortBow,
  buyStrengthPotion,fightDragon,lifePotion,restart,runDungeon,runField,sellItems,
  shoutOut1,walk1,shoutOut2,walk2,shoutOut3,walk3,shoutOut4,walk4,sleep,
  attackDragon,luckPotion, fightFakePinkBunny, backWorld,giftsBord} from './game.js'
import {buyPotions,buyWeapons,goBoard,goDangeon1,goDangeon2,goDangeon3,goDangeon4,
  goField,goGuilda,goStores,goTown} from './navigation.js'

export const locations = [
  {
    name: "town square",
    "button text": ["Go to guilda", "Go to field", "Go to dangeon", "Fight dragon"],
    "button functions": [goGuilda, goField, goDangeon1, fightDragon],
    text: "Welcome new traveler, you are the hero called by the gods. Our king teleported you to our world to defeat the dragon, but to do so you need to increase your level, you can do this by killing monsters and taking the spoils to the guild in exchange for gold. Now go hero!"
  },
  {
    name: "guilda",
    "button text": ["Look at the board", "Go to stores", "Sleep", "Leave the guild"],
    "button functions": [goBoard, goStores, sleep, goTown],
    text: "You enter the guilda."
  },
  {
    name: "field",
    "button text": ["Go to west", "Go to north", "Go to east", "Return to the city"],
    "button functions": [goWest, goNorth, goEast, goTown],
    text: "You have arrived at the camp, a place to increase your level at the beginning of your journey."
  },
  {
    name: "dangeon1",
    "button text": ["To walk", "Shout out", "Return to the city", "Go up walk"],
    "button functions": [walk1, shoutOut1, goTown, goDangeon2],
    text: "You entered the dungeon and are on the first floor, go up the floors for better rewards."
  },
  {
    name: "dangeon2",
    "button text": ["To walk", "Shout out", "Go down walk", "Go up walk"],
    "button functions": [walk2, shoutOut2, goDangeon1, goDangeon3 ],
    text: "you are on the second floor, the difficulty has increased."
  },
  {
    name: "dangeon3",
    "button text": ["To walk", "Shout out", "Go down walk", "Go up walk"],
    "button functions": [walk3, shoutOut3, goDangeon2, goDangeon4],
    text: "you are on the third floor, watch out for the owl bear."
  },
  {
    name: "dangeon4",
    "button text": ["To walk", "Shout out", "Go down walk", "Go down walk"],
    "button functions": [walk4, shoutOut4, goDangeon3, goDangeon3],
    text: "You are on the fourth and top floor, don't die!"
  },
  {
    name: "stores",
    "button text": ["Sell your items", "Buy weapons", "Buy potions", "Leave the stores"],
    "button functions": [sellItems, buyWeapons, buyPotions, goTown],
    text: "You enter the store."
  },
  {
    name: "board",
    "button text": ["Kill 5 slimes (35 golds)", "Kill 3 wolfs (50 golds)", "Kill 1 pink bunny (100 golds)", "Return to guilda"],
    "button functions": [() => giftsBord("slime"), () => giftsBord("wolf"), () => giftsBord("fake pink bunny"), goGuilda],
    text: "You look at the rewards board."
  },
  {
    name: "potions",
    "button text": ["Life potion 50 (50 golds)", "Defense Potion (35 golds)", "Potion of strength 20% (70 golds)", "Return to stores"],
    "button functions": [buyLifePotion, buyDefensePotion, buyStrengthPotion, goStores],
    text: "You enter the potions store."
  },
  {
    name: "weapons",
    "button text": ["Copper sword (35 golds)", "Short bow (30 golds)", "Copper dagger (45 golds)", "Return to stores"],
    "button functions": [buyCopperSword, buyShortBow, buyCopperDagger, goStores],
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
    text: "You found a goblin camp, do you have the strength to face them?"
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
    "button functions": [attackDragon, dodge, lifePotion, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find items.'
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
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find items.'
  },
  { 
    name: "win", 
    "button text": ["Stay in the world", "Stay in the world", "Go back to your world", "Go back to your world"], 
    "button functions": [goTown, goTown, backWorld, backWorld], 
    text: "You killed the dragon! You can choose between returning to your world or staying in that world to live as an adventurer." 
  },
  { 
    name: "back World", 
    "button text": ["","","",""], 
    "button functions": [], 
    text: "You return to your old world, where everything was as before and that life of a hero that you once lived seemed like a dream." 
  }
];

export const weapons = [
    { name: 'rusty sword', power: 5 , price: 10},
    { name: 'goblin sword', power: 13, price: 75},
    { name: 'copper sword', power: 7 , price: 35},
    { name: 'raisor sword', power: 10 , price: 60},
    { name: 'silver sword', power: 15 , price: 85},
    { name: 'fake hero sword', power: 45 , price: 220},
    { name: 'hero sword', power: 100 , price: 500},
    { name: 'short bow', power: 6 , price: 30},
    { name: 'ligth bow', power: 14 , price: 80},
    { name: 'dandelion bow', power: 28 , price: 160},
    { name: 'flame bow', power: 42 , price: 225},
    { name: 'copper dagger', power: 9 , price: 45},
    { name: 'obsidian dagger', power: 18 , price: 95},
    { name: 'prisma dagger', power: 30 , price: 180}
  ];
  
export const items = [
      { monster: "skeleton", name: "bones", percent: 100, price: 15},
      { monster: "slime", name: "slime", percent: 100, price: 4},
      { monster: "skeleton", name: "antique ring", percent: 5, price: 30},
      { monster: "skeleton", name: "golden tooth", percent: 3, price: 50},
      { monster: "slime", name: "active nucleus", percent: 3, price: 20},
      { monster: "goblin", name: "piece of wood", percent: 23, price: 8},
      { monster: "beast", name: "beast horn", percent: 25, price: 10},
      { monster: "wolf", name: "wolf prey", percent: 25, price: 4},
      { monster: "goblin riding wolf", name: "piece of wood", percent: 23, price: 8},
      { monster: "goblin riding wolf", name: "wolf prey", percent: 25, price: 35},
      { monster: "goblin riding wolf", name: "wolf skin", percent: 70, price: 15},
      { monster: "wolf", name: "wolf skin", percent: 70, price: 15},
      { monster: "flaming gummen", name: "gummen's eye", percent: 80, price: 36},
      { monster: "flaming goat", name: "goat horn", percent: 65, price: 40},
      { monster: "pantera", name: "panther skin", percent: 70, price: 45},
      { monster: "litch", name: "staff", percent: 50, price: 40},
      { monster: "owl bear", name: "owl bear skin", percent: 100, price: 50},
      { monster: "balor", name: "ice sword", percent: 30, price: 55}
  ]

const exclusiveMimicItems = [
  {name: 'ruby', percent: 5, price: 150, power: 0},
  {name: 'emerald', percent: 7, price: 120, power: 0},
  {name: 'sapphire', percent: 10, price: 130, power: 0},
  {name: 'ancient artifact', percent: 3, price: 200, power: 0}
];
  
const commonAndIntermediateItems = [
  {name: 'mysterious gem', percent: 50, price: 60, power: 0},
  {name: 'ancient scroll', percent: 40, price: 50, power: 0},
  {name: 'golden idol', percent: 30, price: 75, power: 0},
  {name: 'silver coin', percent: 70, price: 15, power: 0},
  {name: 'bronze coin', percent: 80, price: 10, power: 0},
  {name: 'mystic powder', percent: 60, price: 25, power: 0}
];

  
export const chestGoblinCamps = [
  {name: 'goblin sword', percent: 10, price: 0, power: 13},
  {name: 'parchment', percent: 80, price: 20, power: 0},
  {name: 'antique cloth', percent: 90, price: 5, power: 0},
  {name: 'life potion', percent: 20, price: 0, power: 0},
  {name: 'defense potion', percent: 15, price: 0, power: 0},
  {name: 'strength potion', percent: 15, price: 0, power: 0},
  ...commonAndIntermediateItems
];

export const chestMimico1 = [
  {name: 'flame bow', percent: 20, price: 0, power: 42},
  {name: 'antique cloth', percent: 80, price: 20, power: 0},
  {name: 'life potion', percent: 35, price: 0, power: 0},
  {name: 'defense potion', percent: 30, price: 0, power: 0},
  {name: 'strength potion', percent: 25, price: 0, power: 0},
  ...commonAndIntermediateItems,
  {name: 'ruby', percent: 5, price: 150, power: 0},
  {name: 'emerald', percent: 7, price: 120, power: 0}
];

export const chestMimico2 = [
  {name: 'hero sword', percent: 10, price: 0, power: 100},
  {name: 'flame bow', percent: 20, price: 0, power: 42},
  {name: 'antique cloth', percent: 80, price: 20, power: 0},
  {name: 'life potion', percent: 35, price: 0, power: 0},
  {name: 'defense potion', percent: 30, price: 0, power: 0},
  {name: 'strength potion', percent: 30, price: 0, power: 0},
  ...commonAndIntermediateItems,
  {name: 'ruby', percent: 7, price: 150, power: 0},
  {name: 'emerald', percent: 9, price: 120, power: 0},
  {name: 'sapphire', percent: 5, price: 130, power: 0}
];

export const chestMimico3 = [
  {name: 'hero sword', percent: 15, price: 0, power: 100},
  {name: 'flame bow', percent: 30, price: 0, power: 42},
  {name: 'antique cloth', percent: 90, price: 20, power: 0},
  {name: 'life potion', percent: 40, price: 0, power: 0},
  {name: 'defense potion', percent: 40, price: 0, power: 0},
  {name: 'strength potion', percent: 40, price: 0, power: 0},
  ...commonAndIntermediateItems,
  {name: 'ruby', percent: 9, price: 150, power: 0},
  {name: 'emerald', percent: 11, price: 120, power: 0},
  {name: 'sapphire', percent: 7, price: 130, power: 0},
  {name: 'ancient artifact', percent: 3, price: 200, power: 0}
];

export const chestMimico4 = [
  {name: 'hero sword', percent: 25, price: 0, power: 100},
  {name: 'flame bow', percent: 40, price: 0, power: 42},
  {name: 'antique cloth', percent: 100, price: 20, power: 0},
  {name: 'life potion', percent: 50, price: 0, power: 0},
  {name: 'defense potion', percent: 50, price: 0, power: 0},
  {name: 'strength potion', percent: 50, price: 0, power: 0},
  ...commonAndIntermediateItems,
  {name: 'ruby', percent: 11, price: 150, power: 0},
  {name: 'emerald', percent: 13, price: 120, power: 0},
  {name: 'sapphire', percent: 9, price: 130, power: 0},
  {name: 'ancient artifact', percent: 5, price: 200, power: 0}
];

  
export const monsterNameMapping = {
    "field slime": "slime",
    "dungeon slime": "slime",
    "field skeleton": "skeleton",
    "dungeon skeleton": "skeleton",
    "goblin": "goblin",
    "field beast": "beast",
    "dungeon beast": "beast",
    "wolf": "wolf",
    "goblin riding wolf": "goblin riding wolf",
    "fake pink bunny": "fake pink bunny",
    "dungeon mimico": "mimico",
    "dungeon flaming gummen": "flaming gummen",
    "dungeon flaming goat": "flaming goat",
    "dungeon pantera": "pantera",
    "dungeon litch": "litch",
    "dungeon owl bear": "owl bear",
    "dungeon balor": "balor",
    "celestial dragon": "dragon"

};

  
export const monsters = [
    { name: "field slime", image: ["src/assets/images/slime1.jpeg","src/assets/images/slime2.jpeg","src/assets/images/slime3.jpeg"], damage: 10, xp: 4, health: 15, items: [], counter: 0 },
    { name: "dungeon slime", image: ["src/assets/images/slime4.jpeg","src/assets/images/slime5.jpeg"], damage: 10, xp: 4, health: 15, items: [], counter: 0 },
    { name: "field skeleton", image: ["src/assets/images/esqueleto1.jpeg"], damage: 10, xp: 8, health: 30, items: [], counter: 0 },
    { name: "dungeon skeleton", image: ["src/assets/images/esqueleto2.jpeg","src/assets/images/esqueleto3.jpeg","src/assets/images/esqueleto4.jpeg"], damage: 10, xp: 8, health: 30, items: [], counter: 0 },    
    { name: "goblin", image: ["src/assets/images/goblin1.jpeg","src/assets/images/goblin2.jpeg","src/assets/images/goblin3.jpeg","src/assets/images/goblin4.jpeg","src/assets/images/goblin5.jpeg","src/assets/images/goblin6.jpeg"], damage: 15, xp: 7, health: 40, items: [], counter: 0 },
    { name: "field beast", image: ["src/assets/images/beast1.jpeg","src/assets/images/beast2.jpeg"], damage: 20, xp: 25, health: 50, items: [], counter: 0 },
    { name: "dungeon beast", image: ["src/assets/images/beast3.jpeg","src/assets/images/beast4.jpeg"], damage: 20, xp: 25, health: 50, items: [], counter: 0 },    
    { name: "wolf", image: ["src/assets/images/wolf1.jpeg","src/assets/images/wolf2.jpeg","src/assets/images/wolf3.jpeg","src/assets/images/wolf4.jpeg"], damage: 13, xp: 20, health: 40, items: [], counter: 0 },
    { name: "goblin riding wolf", image: ["src/assets/images/goblinWolf1.jpeg","src/assets/images/goblinWolf2.jpeg","src/assets/images/goblinWolf3.jpeg","src/assets/images/goblinWolf4.jpeg"], damage: 28, xp: 45, health: 75, items: [], counter: 0 },
    { name: "fake pink bunny", image: ["src/assets/images/fakePinkbunny.jpeg"], damage: 5, xp: 50, health: 100, items: [], counter: 0 },
    { name: "dungeon mimico", image: ["src/assets/images/mimico1.jpeg","src/assets/images/mimico2.jpeg","src/assets/images/mimico3.jpeg","src/assets/images/mimico4.jpeg"], damage: 25, xp: 30, health: 80, items: [], counter: 0 },
    { name: "dungeon flaming gummen", image: ["src/assets/images/flamingGummen1.jpeg","src/assets/images/flamingGummen2.jpeg"], damage: 36, xp: 30, health: 150, items: [], counter: 0 },
    { name: "dungeon flaming goat", image: ["src/assets/images/flamingGoat1.jpeg","src/assets/images/flamingGoat2.jpeg","src/assets/images/flamingGoat3.jpeg"], damage: 28, xp: 28, health: 180, items: [], counter: 0 },
    { name: "dungeon pantera", image: ["src/assets/images/pantera1.jpeg","src/assets/images/pantera2.jpeg","src/assets/images/pantera3.jpeg","src/assets/images/pantera4.jpeg"], damage: 45, xp: 40, health: 200, items: [], counter: 0 },
    { name: "dungeon litch", image: ["src/assets/images/litch1.jpeg","src/assets/images/litch2.jpeg","src/assets/images/litch3.jpeg"], damage: 38, xp: 35, health: 160, items: [], counter: 0 },
    { name: "dungeon owl bear", image: ["src/assets/images/owlBear1.jpeg","src/assets/images/owlBear2.jpeg","src/assets/images/owlBear3.jpeg"], damage: 40, xp: 45, health: 250, items: [], counter: 0 },
    { name: "dungeon balor", image: ["src/assets/images/balor1.jpeg","src/assets/images/balor2.jpeg","src/assets/images/balor3.jpeg"], damage: 55, xp: 45, health: 240, items: [], counter: 0 },
    { name: "celestial dragon", image: ["src/assets/images/dragon1.jpeg","src/assets/images/dragon2.jpeg","src/assets/images/dragon3.jpeg","src/assets/images/dragon4.jpeg"], damage: 45, xp: 100, health: 1000, items: [], counter: 0 }
  ];
  
export const imagesMonsterDiedField = [
    'src/assets/images/monsterDiedField1.jpeg',
    'src/assets/images/monsterDiedField2.jpeg',
    'src/assets/images/monsterDiedField3.jpeg',
    'src/assets/images/monsterDiedField4.jpeg'
];

export const imagesDiedDungeon = [
    'src/assets/images/monsterDiedDungeon1.jpeg',
    'src/assets/images/monsterDiedDungeon2.jpeg',
    'src/assets/images/monsterDiedDungeon3.jpeg',
    'src/assets/images/monsterDiedDungeon4.jpeg'
];

export const imagesPlayerDiedField = [
  'src/assets/images/deadField1.jpeg',
  'src/assets/images/deadField2.jpeg',
  'src/assets/images/deadField3.jpeg'
];

export const imagesPlayerDiedDungeon = [
  'src/assets/images/deadDungeon1.jpeg',
  'src/assets/images/deadDungeon2.jpeg',
  'src/assets/images/deadDungeon3.jpeg',
];


export const imagesDragonAttack = [
  'src/assets/images/dragonAttack1.jpeg',
  'src/assets/images/dragonAttack2.jpeg',
  'src/assets/images/dragonAttack3.jpeg',
  'src/assets/images/dragonAttack4.jpeg',
  'src/assets/images/dragonAttack5.jpeg'
];

export const imagesNorth = [
  'src/assets/images/north1.jpeg',
  'src/assets/images/north2.jpeg',
  'src/assets/images/north3.jpeg'
];

export const imagesWest = [
  'src/assets/images/west1.jpeg',
  'src/assets/images/west2.jpeg',
  'src/assets/images/west3.jpeg'
];

export const imagesEast = [
  'src/assets/images/east1.jpeg',
  'src/assets/images/east2.jpeg',
  'src/assets/images/east3.jpeg'
];

export const imagesField = [
  'src/assets/images/field1.jpeg',
  'src/assets/images/field2.jpeg',
  'src/assets/images/field3.jpeg',
  'src/assets/images/field4.jpeg'
];

export const imagesGoblinCamp = [
  'src/assets/images/goblinCamp1.jpeg',
  'src/assets/images/goblinCamp2.jpeg',
  'src/assets/images/goblinCamp3.jpeg'
];

export const imagesWin = [
  'src/assets/images/win1.jpg',
  'src/assets/images/win2.jpg',
  'src/assets/images/win3.jpg'
];

export const imagesBackWorld = [
  'src/assets/images/backWorld1.jpg',
  'src/assets/images/backWorld2.jpg',
  'src/assets/images/backWorld3.jpg'
];

export const imagesChest = [
  {image: 'src/assets/images/chest1.jpeg', tier: 1},
  {image: 'src/assets/images/chest2.jpeg', tier: 2},
  {image: 'src/assets/images/chest3.jpeg', tier: 3},
  {image: 'src/assets/images/chest4.jpeg', tier: 4}
];

export const levelIntervals = [
    { min: 25, max: 50, health: 25, level: 1 },
    { min: 50, max: 75, health: 50, level: 2 },
    { min: 75, max: 100, health: 75, level: 3 },
    { min: 100, max: 125, health: 100, level: 4 },
    { min: 125, max: 150, health: 125, level: 5 },
    { min: 150, max: 200, health: 150, level: 6 },
    { min: 200, max: 250, health: 175, level: 7 },
    { min: 250, max: 250, health: 200, level: 8 },
    { min: 250, max: 280, health: 225, level: 9 },
    { min: 280, max: 300, health: 250, level: 10 },
    { min: 300, max: 325, health: 300, level: 11 },
    { min: 325, max: 350, health: 325, level: 12 },
    { min: 350, max: 450, health: 350, level: 13 },
    { min: 450, max: 650, health: 450, level: 14 },
    { min: 650, max: 850, health: 650, level: 15 },
    { min: 850, max: Infinity, health: 850, level: 16 }
];