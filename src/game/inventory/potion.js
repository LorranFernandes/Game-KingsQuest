import { items } from "../../data/index.js";
import { defenseText, descriptionXpText, powerText, text } from "../../game.js";
import { addGold, addHealth, addStrength, decreaseStockLifePotion, decreaseStrength, defense, health, maxHealth, setDefense, setHealth, stockLifePotion } from "../player/playerStats.js";
import { mostPowerfulWeaponInInventory } from "../Stores/weaponSystem.js";

export function lifePotion(){
    let potion = 50;
    if(stockLifePotion > 0){
        if(health + potion > maxHealth){
            setHealth(maxHealth);
        }else{
            addHealth(potion);
        }
        decreaseStockLifePotion()
        text.innerText = "You drank a health potion."
    }else{
        text.innerText = "You don't have a health potion."
    }


}

export function defensePotion(){
    setDefense()
    defensePotion.innerText = defense;
    defenseText.innerText = defense;
}


export function strengthPotion(){
    addStrength();
    let weapon = mostPowerfulWeaponInInventory()
    let oldPower = weapon.power;
    weapon.power += weapon.power * 0.20;
    powerText.innerText = weapon.power;

    setTimeout(function() {
        decreaseStrength();
        weapon.power = oldPower;
        powerText.innerText = weapon.power;
    },100000);

}


export function luckPotion(){
    const chance = Math.random();

    addGold(-50);

    if (chance < 0.4) {
        items.forEach(item => {
            item.percent = 80;
        });

        text.innerText += "You got a luck potion";
        descriptionXpText.classList.add('aura');
    } else {
        text.innerText += "You didn't get a luck potion";
    }

    console.log(items);
}
