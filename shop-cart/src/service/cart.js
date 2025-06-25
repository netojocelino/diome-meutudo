export async function addItem (userCart, item) {
    userCart.push(item)
}

export function deleteItem (userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

export function removeItem (userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart[index].quantity -= 1;

        if (userCart[index].quantity <= 0) {
            userCart.splice(index, 1)
        }

    }
}

export function listItems (userCart) {
    if (userCart.length === 0) {
        console.log('Empty cart, add some items')
        return;
    }

    console.log('\n\n\n=====================================')

    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - Valor unitário R\$${item.price}`)
        console.log(`\t${item.quantity} x R\$${item.price} = Subtotal R\$${item.subtotal()}`)
    });

    console.log('=====================================\n\n\n')



}

export function calculeTotal (userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);

}

export function CartService (userCart) {
    return ({
        addItem:  (item) => addItem(userCart, item),
        deleteItem:  (name) =>  deleteItem(userCart, name),
        removeItem:  (name) =>  removeItem(userCart, name),
        listItems:  () =>  listItems(userCart),
        calculeTotal:  () =>  calculeTotal(userCart),
    })
}

export default {
    addItem,
    calculeTotal,
}
