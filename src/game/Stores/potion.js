import { text } from "../../game.js";
import { defensePotion, strengthPotion } from "../inventory/potion.js";
import { addStockLifePotion, gold, setGold, strength } from "../player/playerStats.js";

export function buyLifePotion(){
    const potion = 50;
    if(gold >= potion){
        addStockLifePotion();
        setGold(-potion);
    }else{
        text.innerText = "Not enough gold."
    }

}

export function buyDefensePotion(){
    const potion = 35;
    if(gold >= potion){
        setGold(-potion);
        defensePotion();
        text.innerText = "You bought a defense potion."
    }else{
        text.innerText = "Not enough gold."
    }
    
}

export function buyStrengthPotion(){
    const potion = 70;
    if(strength === 0){
        if(gold >= potion){
            setGold(-potion);
            strengthPotion();
            text.innerText = "You bought a strength potion."
        }else{
            text.innerText = "Not enough gold."
        }
    }else{
        text.innerText = "You are already using this potion."
    }

}