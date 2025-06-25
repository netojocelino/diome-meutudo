import createItem from './service/item.js'
import{ addItem, deleteItem, calculeTotal, removeItem, listItems } from './service/cart.js'

const cart = [];

async function main ()
{
    console.log(`Welcome to your personal cart`)
    const bookSkyward = await createItem('Skyward: Conquiste as estrelas: 1', 72.90, 1);
    const bookStarsight = await createItem('Starsight: Veja além das estrelas: 2', 52.90, 3);

    console.log(`${bookSkyward.name} has price R\$${bookSkyward.subtotal()}`)
    console.log(`${bookStarsight.name} has price R\$${bookStarsight.subtotal()}`)

    await addItem(cart, bookSkyward)
    await addItem(cart, bookStarsight)

    let total = await calculeTotal(cart)
    console.log(`Total  R\$${total}`)

    await deleteItem(cart, bookSkyward.name);

    total = await calculeTotal(cart)
    console.log(`Total  R\$${total}`)


    await removeItem(cart, bookStarsight.name);
    total = await calculeTotal(cart)
    console.log(`Total  R\$${total}`)

    await listItems(cart)
}

main()
