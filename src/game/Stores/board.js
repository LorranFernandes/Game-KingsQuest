import { text } from "../../game.js";
import { getKillsByMonsterName, reduceMonsterCount } from "../monsters/monsterSystem.js";
import { addGold, addXp, levelUp } from "../player/playerStats.js";

const quests = {
    "slime": { reward: 35, xpReward: 10, requiredCount: 5 },
    "wolf": { reward: 50, xpReward: 45, requiredCount: 3 },
    "fake pink bunny": { reward: 100, xpReward: 100, requiredCount: 1 }
};

function applyRewards(totalGold, totalXp) {
    addXp(totalXp);
    addGold(totalGold)
    levelUp();
}

export function giftsBoard(monsterName) {

    const quest = quests[monsterName];
    if (!quest) {
        return;
    }

    let counter = getKillsByMonsterName(monsterName);

    if (counter >= quest.requiredCount) {
        const sets = Math.floor(counter / quest.requiredCount);
        const totalReward = sets * quest.reward;
        const totalXpReward = sets * quest.xpReward;

        reduceMonsterCount(monsterName, sets * quest.requiredCount);
        applyRewards(totalReward,totalXpReward);
        text.innerText = "You completed the quest.";
    } else {
        text.innerText = "You did not meet the requirements.";
    }
}