const baseURL = 'https://api.spacexdata.com/v2/rockets'; // endpoint where our data lives

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

// callback is when you use a function as a parameter, you call back to that function
// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault(); /*prevents page from re-rendering/refreshing*/
//     console.log('Event is working!');
// })

searchForm.addEventListener('submit', fetchSpace); // this is also a callback, just like above^

function fetchSpace(e) {
    e.preventDefault(); /*prevents page from re-rendering/refreshing*/
    
    fetch(baseURL) // fetch is a request that helps us get data from somewhere

    .then(results => {
        return results.json(); // (method)json = JavaScript Object Notation // json formats so we can read data
    })

    .then(json => {
        displayRockets(json);
    })
}

function displayRockets(data) {
    
    console.log(data);
    // for (let i = 0; i < 4; i++){
    // console.log(json[i].name);
    // }
    // for (let x of data){
    //     console.log(x.name); //x.name (dot notation) for objects
    //     console.log(x.cost_per_launch);
    // }
    // for (let x of data){
    //     console.log(x.name, x.cost_per_launch);
    // }
    
    // Challenge
    // let label = document.getElementById('label');
    // let rocket = document.createElement('th');// create a new element
    //     let cost = document.createElement('th');
    //     rocket.innerText = 'Rocket';
    //     label.appendChild(rocket);
    //     cost.innerText = 'Cost';
    //     label.appendChild(cost);
    
    // let rockets = data.forEach(r => {
        
    //     let allRockets = document.getElementById('allRockets');
    //     let arocket = document.createElement('td');// create a new element
    //     let acost = document.createElement('td');
    //     arocket.innerText = r.name;
    //     allRockets.appendChild(arocket);
    //     acost.innerText = '$' + r.cost_per_launch;
    //     allRockets.appendChild(acost);
    // })

    // Answer
    let tabRow = document.createElement('tr');
    let tabName = document.createElement('th');
    let tabCost = document.createElement('th');
    tabCost.innerText = 'Cost';
    tabName.innerText = 'Name';
    tabRow.appendChild(tabName);
    tabRow.appendChild(tabCost);
    spaceShips.appendChild(tabRow);

    let rockets = data.forEach(r => {
        let tabRowe = document.createElement('tr');
        let rocket = document.createElement('td');
        let cost = document.createElement('td');
        rocket.innerText = r.name;
        cost.innerText = '$' + r.cost_per_launch;
        tabRowe.appendChild(rocket);
        tabRowe.appendChild(cost);
        spaceShips.appendChild(tabRowe);
    })

    // Example with Weight
    // let tabRow = document.createElement('tr');
    // let tabLbs = document.createElement('th');
    // let tabKg = document.createElement('th');
    // tabKg.innerText = 'Kg';
    // tabLbs.innerText = 'Lbs';
    // tabRow.appendChild(tabLbs);
    // tabRow.appendChild(tabKg);
    // spaceShips.appendChild(tabRow);

    // let weight = data.forEach(r => {
    //     let tabRowe = document.createElement('tr');
    //     let lbs = document.createElement('td');
    //     let kg = document.createElement('td');
    //     lbs.innerText = r.mass.lb;
    //     kg.innerText = r.mass.kg;
    //     tabRowe.appendChild(lbs);
    //     tabRowe.appendChild(kg);
    //     spaceShips.appendChild(tabRowe);
    // })
}

const wait1 = () => {
    return new Promise(resolve => setTimeout(resolve, 2000), console.log('working...'))
}
const wait2 = () => {
    return new Promise(resolve => setTimeout(resolve, 4000), console.log('still working...'))
}
const wait3 = () => {
    return new Promise(resolve => setTimeout(resolve, 6000), console.log('a little longer...'))
}
 
wait1()
    .then(wait2)
    .then(wait3)
    .then(function() {
        console.log('all done!');
    })