// Import the prompt-sync library
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });
// Game variables
const enemies = ['Skeleton', 'Zombie', 'Warrior', 'Assassin'];
const maxEnemyHealth = 75;
const enemyAttackDamage = 25;
// Player variables
let health = 100;
let attackDamage = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50; // Percentage
let running = true;
console.log('Welcome to the Dungeon!');
GAME: while (running) {
    console.log('----------------------------------------------');
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth) + 1;
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(`\t# A ${enemy} has appeared! #\n`);
    while (enemyHealth > 0) {
        console.log(`\tYour HP: ${health}`);
        console.log(`\t${enemy}'s HP: ${enemyHealth}`);
        console.log("\n\tWhat would you like to do?");
        console.log("\t1. Attack");
        console.log("\t2. Drink health potion");
        console.log("\t3. Run!");
        let input = prompt('Your move: ');
        if (input === '1') {
            let damageDealt = Math.floor(Math.random() * attackDamage);
            let damageTaken = Math.floor(Math.random() * enemyAttackDamage);
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log(`\t> You strike the ${enemy} for ${damageDealt} damage.`);
            console.log(`\t> You receive ${damageTaken} in retaliation!`);
            if (health <= 0) {
                console.log("\t> You have taken too much damage, you are too weak to go on!");
                break GAME;
            }
        }
        else if (input === '2') {
            if (numHealthPotions > 0) {
                health += healthPotionHealAmount;
                numHealthPotions--;
                console.log(`\t> You drink a health potion, healing yourself for ${healthPotionHealAmount}.\n\t> You now have ${health} HP.\n\t> You have ${numHealthPotions} health potions left.\n`);
            }
            else {
                console.log("\t> You have no health potions left! Defeat enemies for a chance to get one.");
            }
        }
        else if (input === '3') {
            console.log(`\tYou run away from the ${enemy}!`);
            continue GAME;
        }
        else {
            console.log("\tInvalid command!");
        }
    }
    if (health <= 0) {
        console.log("You limp out of the dungeon, weak from battle.");
        break;
    }
    console.log('-----------------------------------------------');
    console.log(` # ${enemy} was defeated! # `);
    console.log(` # You have ${health} HP left. #`);
    if (Math.random() < healthPotionDropChance / 100) {
        numHealthPotions++;
        console.log(" # The enemy dropped a health potion! # ");
        console.log(` # You now have ${numHealthPotions} health potion(s). # `);
    }
    console.log('----------------------------------------------------');
    console.log("What would you like to do now?");
    console.log("1. Continue fighting");
    console.log("2. Exit dungeon");
    let input;
    input = prompt('Your move: ');
    while (input !== '1' && input !== '2') {
        console.log("Invalid command!");
        input = prompt('Your move: ');
    }
    if (input === '2') {
        console.log("You exit the dungeon, successful from your adventures!");
        break;
    }
}
console.log("###################################");
console.log("# THANKS FOR PLAYING! #");
console.log("###################################");
