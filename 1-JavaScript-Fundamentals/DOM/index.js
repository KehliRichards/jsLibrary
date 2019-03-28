// let x = 10;
// console.log(x);

document.getElementById('testParagraph').style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass')[0].innerText); // This paragraph has the class of 'sampleClass'.

console.log(document.querySelectorAll('p.sampleClass')[1].innerText); // This is a different paragraph.

console.log(document.querySelectorAll('p')[0].innerText); // Sample Text

let arr = document.querySelectorAll('p');
for(let i = 0; i < 3; i++){
    console.log(arr[i].innerText);
}

for(a of arr){
    console.log(a.innerText);
}

document.getElementById('clickThisButton').addEventListener('click', (details) => {
    document.querySelectorAll('p.sampleClass')[1].innerHTML='<i>My text has changed</i>'; // My text has changed
})
//     // document.querySelectorAll('p.sampleClass')[0].innerText='<i>My text has changed</i>'; //<i>My text has changed</i>
//     details.target.style.backgroundColor = 'blue';
//     // document.getElementById('clickThisButton').style.backgroundColor = 'blue';
//     // document.getElementById('clickThisButton').style.borderColor = 'blue';
//     console.log(details.target);
// })


// Challenge
// document.getElementById('clickThisButton').addEventListener('click', (details) => {
//     if(details.target.style.backgroundColor == 'red'){
//         console.log(details.target.style.backgroundColor = 'blue');
//     } else if (details.target.style.backgroundColor == 'blue'){
//         console.log(details.target.style.backgroundColor = 'red');
//     } else {
//         console.log(details.target.style.backgroundColor = 'blue');
//     }
// })

// Answer
document.getElementById('clickThisButton').addEventListener('click', (details) => {
    if(details.target.style.backgroundColor == 'blue'){
        details.target.style.backgroundColor = 'red';
    } else {
        details.target.style.backgroundColor = 'blue';
    }
})


document.getElementById('nameInput').addEventListener('keyup', (e) => {
    
    console.log(e.target.value);
    document.getElementsByTagName('p')[1].innerText = 'SOMETHING ELSE!!';
//     document.getElementsByTagName('p')[0].innerText = e.target.value;
//     document.getElementsByTagName('p')[0].innerText = `Hey everyone, say hello to ${e.target.value}!`;
})

document.getElementsByTagName('p')[0].innerText = 'NOTHING HAS BEEN TYPED';
document.getElementById('nameInput').addEventListener('keyup', (e) => {
    console.log(e.target.value);

    if (e.target.value == '' || e.target.value == ' '){
        document.getElementsByTagName('p')[0].innerText = 'NOTHING HAS BEEN TYPED';
    } else {
        document.getElementsByTagName('p')[0].innerText = `Everyone, say hello to ${e.target.value} right now!`;
    }
})



