// Uncomment the relevant sections to see how they behave

/* global scope
let callSign = 'KLM346';
 */

/* function scope
const changeAltitude = (altitudeMeters) => {
    let maxAltitudeMeters = 10000;
    let minAltitudeMeters = 0;

    if (altitudeMeters < maxAltitudeMeters &&
        altitudeMeters > minAltitudeMeters) {
        console.log(`Changing altitude to ${altitudeMeters}`);
        return;
    }

    console.log('Can not change altitude');
}

//console.log(maxAltitudeMeters);
changeAltitude(5000);
 */

/* block scope
const changeAltitude = (altitudeMeters) => {
    let maxAltitudeMeters = 10000;
    let minAltitudeMeters = 0;

    if (altitudeMeters < maxAltitudeMeters &&
        altitudeMeters > minAltitudeMeters) {

        let altitudeMeters = 1000;

        console.log(`Changing altitude to ${altitudeMeters}`);
        return;
    }

    console.log('Can not change altitude');
}

changeAltitude(7000);

 */

/* closure
(initFlight = () => {
    let nbPassengers = 100;

    const addPassenger = () => {
        nbPassengers++;
        console.log(nbPassengers);
    }

    return addPassenger;
})();

const add = initFlight();
add();
add();

 */



/* this in global scope
console.log(this);
 */

/* this in function scope
const printThis = () => {
    console.log(this);
}

printThis();
 */

/* this in function scope -> strict mode
function printThis() {
    'use strict';
    console.log(this);
}

printThis();
 */

/* this in class function
class Aircraft {
    make = '';
    capacity = 0;

    constructor(make, capacity) {
        this.make = make;
        this.capacity = capacity;
        console.log(this);
    }

    print() {
        console.log(this);
    }
}

let boeing747 = new Aircraft('Boeing 747', 450);
boeing747.print();
 */

/* this in class function -> function reference
class Aircraft {
    make = '';
    capacity = 0;

    constructor(make, capacity) {
        this.make = make;
        this.capacity = capacity;
        console.log(this);
    }

    print() {
        console.log(this);
    }
}

let boeing747 = new Aircraft('Boeing 747', 450);
const print = boeing747.print;

print();
*/

/* this in object context -> refers to the object the method is called on
let boeing747 = {
    make: 'Boeing 747',
    capacity: 450,

    print(){
        console.log(this);
    }
}
boeing747.print();

 */


/* passing value of this using bind
function printAircraftInfo(message){
    console.log(`${message}: ${this.make}, ${this.capacity}`);
}

printAircraftInfo('Aircraft summary');
const boundPrint = printAircraftInfo.bind({make: 'Airbus A380', capacity: 500});
boundPrint('Aircraft summary');
 */

/* passing value of this using call
function printAircraftInfo(message){
    console.log(`${message}: ${this.make}, ${this.capacity}`);
}

const plane = {make: 'Embraer', capacity: 200}
printAircraftInfo.call(plane, 'Aircraft summary');
 */

