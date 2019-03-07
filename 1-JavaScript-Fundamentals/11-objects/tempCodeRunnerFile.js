
let garden = {
    vegetable : 'zuccini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

console.log(garden.vegetable); // zuccini

let x = 'vegetable';

console.log(garden[x]); // zuccini


let baking = {};
baking['zuccini'] = 'better make some bread!';

console.log(baking);

// console.log(baking.garden.vegetable); // won't work, mixing objects

console.log(baking[garden['vegetable']]); // does inside first, first becomes (baking['zuccini']) then continues


let key = 'size';

Object.keys(garden).forEach(g => {
    // console.log(g);
    if (key === g) {
        console.log(garden[key]);
    }
})