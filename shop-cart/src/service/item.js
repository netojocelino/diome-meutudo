async function createItem (name, price, quantity = 1)
{
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

export default createItem;
