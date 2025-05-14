'use strict';

// const bookings = [];

// const createBooking = function (flightnum, numPassengers = 1, price = 199 * numPassengers) {
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;


//     const booking = {
//         flightnum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('H123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH125', 5);

// createBooking('Lh123', 1000);

const flight = 'LH123'
const jascar = {
    name: 'Jascar Benish',
    passport: 2864839627,

}

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 2864839627) {
//         alert('Checked In');
//     } else {
//         alert('Wrong Passport!');
//     }
// }
// checkIn(flight, jascar);
// console.log(flight);
// console.log(jascar);

// const newPassport = function (person) {
//     person.passenger = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jascar);
// checkIn(flight, jascar);  

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher - order func

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string : ${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`)

};

transformer('JavaScript is the best !', upperFirstWord);
transformer('JavaScript is the best ! ', oneWord);


//JS callback func
const high5 = function () {
    console.log('Hi');
};
document.body.addEventListener('click', high5);
['Jascar', 'Benish', 'Jeba'].forEach(high5);

