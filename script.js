const dishes = (recipe, available) => {
    let MaxDishes = Infinity;

    for (let ingred in recipe) {
        if (available[ingred] === undefined) {
            available[ingred] = 0;
        }
        MaxDishes = Math.min(MaxDishes, Math.floor(available[ingred] / recipe[ingred]));
    }

    return isFinite(MaxDishes) ? MaxDishes : 0;
}


console.log(dishes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));





