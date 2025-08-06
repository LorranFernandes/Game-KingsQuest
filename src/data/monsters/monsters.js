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
];
  
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
    { name: "fake pink bunny", image: ["src/assets/images/fakePinkbunny.jpeg"], damage: 20, xp: 50, health: 100, items: [], counter: 0 },
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

export const imagesDragonAttack = [
  'src/assets/images/dragonAttack1.jpeg',
  'src/assets/images/dragonAttack2.jpeg',
  'src/assets/images/dragonAttack3.jpeg',
  'src/assets/images/dragonAttack4.jpeg',
  'src/assets/images/dragonAttack5.jpeg'
];