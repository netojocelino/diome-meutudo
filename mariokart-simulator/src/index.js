const characteres = require('./models/players');
const {roundTypes} = require('./models/actions');
const {
    getRandomBlock,
    handlerTurn,
    leaderboard,
    rollDice,
} = require('./utils');

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
    let playerId = await rollDice(characteres.length, 0)
    let computerId;
    const bowserId = characteres.findIndex(char => char.name == 'Bowser');

    while (playerId === bowserId)
    {
        playerId = await rollDice(characteres.length, 0);
    }

    while (typeof computerId === 'undefined' || computerId == playerId)
    {
        computerId = await rollDice(characteres.length, 0);
    }

    const player = characteres[playerId];
    const computer = characteres[computerId];

    console.log(`🏁🚥 Corrida entra ${player.name} e ${computer.name} començando`);

    await playRaceEngine(player, computer)

    await leaderboard (player, computer)

}

main();
