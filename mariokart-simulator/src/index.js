// parou em 02:15 em 41 14 Log Roll

// setup
// import characteres from "./models/players";
const characteres = [
    {
        name    : 'Mario',
        icon: '🍄🔴',
        velocity: 4, // velocidade
        moviment: 3, // manobrabilidade
        power   : 3, // poder
        points  : 0,
    },

    {
        name    : 'Luigi',
        icon: '🍄🟢',
        velocity: 3, // velocidade
        moviment: 4, // manobrabilidade
        power   : 4, // poder
        points  : 0,
    },
];

const roundTypes = [
    { type: 'row', attribute: 'velocity' },
    { type: 'corner', attribute: 'moviment' },
    { type: 'battle', attribute: 'power' },
];

// functions
// import { rollDice } from "./utils";
async function rollDice (sides = 6, increment = 1)
{
    return increment + Math.floor(Math.random() * sides)
}

async function handlerTurn (char1, char2, resultPlayer, resultComputer, turnType)
{
    if (turnType === 'row' || turnType === 'corner') {
        if (resultPlayer > resultComputer) {
            char1.points++;
            console.log (`${char1.icon} ${char1.name} points`);
        }else if(resultComputer > resultPlayer) {
            char2.points++;
            console.log (`${char2.icon} ${char2.name} points`);
        }
    }else if (turnType ===  'battle') {
        if (resultPlayer < resultComputer && char1.points > 0) {
            char1.points--;
            console.log (`🥊 ${char1.name} loss a point`);
        }else if(resultComputer < resultPlayer && char2.points > 0) {
            char2.points--;
            console.log (`🥊 ${char2.name} loss a point`);
        }
    }
}

async function leaderboard(char1, char2)
{
    console.log('=======================')
    console.log('Resultado da partida')
    console.log(`${char1.icon} ${char1.name} has ${char1.points}`)
    console.log(`${char2.icon} ${char2.name} has ${char2.points}`)

    if (char1.points > char2.points) {
        console.log(`🏆 ${char1.name} wins!`)
    } else if (char2.points > char1.points) {
        console.log(`🏆 ${char2.name} wins!`)
    } else {
        console.log(`🏆 Draws!`)

    }

    
}

async function getRandomBlock (roundTypes = [])
{
    const items = roundTypes.map(i => i.type)
    const random = await rollDice(items.length, 0);
    const result = roundTypes[random % items.length];
    return result;
}

async function handlerBlock (type, charWon, charLose)
{
    if (type === 'row' || type === 'corner') {}
    else if (type === 'battle') {
        charLose.points = Math.max(charLose.points - 1, 0);
        charWon.points = Math.max(charLose.points + 1, 0);
    }
}

async function playRaceEngine(char1, char2)
{
    for(let lap = 0; lap < 5; lap++)
    {
        console.log(`🏁 Lap ${lap+1} =====================`)

        const block = await getRandomBlock(roundTypes)
        console.log(`Round: ${block.type}`)

        const resultPlayer = await rollDice(6) + char1[block.attribute];
        const resultComputer = await rollDice(6) + char2[block.attribute];
        console.log(`Player ${char1.name} on ${block.attribute} (+${char1[block.attribute]}) get ${resultPlayer} `)
        console.log(`Player ${char2.name} on ${block.attribute} (+${char2[block.attribute]}) get ${resultComputer} `)

        handlerTurn(char1, char2, resultPlayer, resultComputer, block.type)

    }
}

async function main ()
{
    const player = characteres[0];
    const computer = characteres[1];
    

    console.log(`🏁🚥 Corrida entra ${player.name} e ${computer.name} començando`);
    // console.log(`Rolou: ${result}`)
    await playRaceEngine(player, computer)

    await leaderboard (player, computer)

}

main();
