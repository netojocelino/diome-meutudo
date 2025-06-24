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

export {
    getRandomBlock,
    handlerTurn,
    leaderboard,
    rollDice,
}
