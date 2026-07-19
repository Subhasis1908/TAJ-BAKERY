// ===== TAJ BAKERY - STEP 3 (PART A) =====

let cart = [];

function addToCart(itemName, price) {
    cart.push({
        name: itemName,
        price: price
    });

    alert(itemName + " added to cart!");

    console.log(cart);
}
