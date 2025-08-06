import { weapons } from "../../data/index.js";
import { descriptionPowerText, powerText, text } from "../../game.js";
import { addGold, gold, inventory, power, updatePower } from "../player/playerStats.js";

export function getWeaponIndexByName(weaponName) {
    return weapons.findIndex(weapon => weapon.name === weaponName);
}


export function currentPower(){
    updatePower();
    powerText.innerText = power;
}

export function mostPowerfulWeapon() {
    let maxPower = -1;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
        }
    }
    return maxPower;
}

export function mostPowerfulNameWeapon() {
    let maxPower = -1;
    let morePowerfulWeapon = 0;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
            morePowerfulWeapon = weapon.name;
        }
    }
    return morePowerfulWeapon;
}

export function mostPowerfulWeaponInInventory() {
    let maxPower = -1;
    let morePowerfulWeapon;

    for (const weapon of inventory) {
        if (weapon.power > maxPower) {
            maxPower = weapon.power;
            morePowerfulWeapon = weapon;
        }
    }
    return morePowerfulWeapon;
}


export function weaponPurchaseChecker(index){
    if(!inventory.includes(weapons[index])){
        let goldWeapon = weapons[index].price;
        if(gold >= goldWeapon){
            addGold(-goldWeapon)
            inventory.push(weapons[index]);
            let nameWeapon = indexNameWeapon(index);
            text.innerText += " You bought a "+ nameWeapon+ ".";
            currentPower();
            descriptionPowerText.setAttribute('title', "The power of your "+mostPowerfulNameWeapon()+".");
        }else{
            text.innerText = "Not enough gold."
        }
    }else{
        text.innerText = "You already have this weapon."
    }
}

export function indexNameWeapon(index) {
    if (index >= 0 && index < weapons.length) {
        return weapons[index].name;
    } else {
        console.error('Index out of bounds');
        return null;
    }
}


export function buyWeapon(nameWeapon){
    let index = getWeaponIndexByName(nameWeapon);;
    if (index !== -1) {
        weaponPurchaseChecker(index);
    } else {
        console.error('Weapon not found.');
    }
}

