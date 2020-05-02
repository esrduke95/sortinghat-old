// initial js test
// console.log('look at you go summer!');

// const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']; 

// const randomHouse = houses[Math.floor(Math.random() * houses.length)];

// console.log(randomHouse);

const nameSubmitEvent = (event) => {
    event.preventDefault();
    const studentName = document.querySelector('#nameSubmit').value;
    console.log(studentName);
    // get the value of the input (the name);
    // call a function to make a student card; 
};



const setupEvents = () => {
    document.querySelector('#nameSubmitBtn').addEventListener('click', nameSubmitEvent);
};

const init = () => {
    setupEvents();
};

init();

// const printToDom = (selector, textToPrint) => {
//     const selectedDiv = document.querySelector('#nameForm');
//     selectedDiv.innerHTML = textToPrint;
// };

//need click event
//need to click and then get the value of the form


// message from luke: 

// create a student object (what keys/properties does it have?) (does this live in a function? probably?)
// make a function to create a student card && push that student to the students collection/array THEN printToDom
// make sure we're randomly assigning a house
// make students collection where students get pushed to and print THAT to the dom
// option to expel students -> second pass/do this after adding students
     // for expel: find student in collection and remove from array then reprint collection to dom?