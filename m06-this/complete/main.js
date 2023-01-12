// Uncomment the relevant sections to see how they behave

console.log(this);

const printThis = () => {
    console.log(this);
}
printThis();

/* this in function scope -> strict mode
function printThis() {
    'use strict';
    console.log(this);
}

printThis();
 */

function Helicopter(speed) {
    this.speed = speed;
}

/* Constructor

function Helicopter(speed) {
    this.speed = speed;
}
let h = new Helicopter(200);
console.log(h.speed);

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


/* ARROW

let boeing747 = {
    make: 'Boeing 747',
    capacity: 450,

    print: () => {
        console.log(this);
    }
}

boeing747.print();

*/


/* passing value of this using call & bind
function alertPassenger(name){
    console.log(`${name}: ${this.message}`);
}

const presentToGateWarning = {message: 'Please present to boarding gate 3', priority: 1}

alertPassenger.call(presentToGateWarning, 'John Doe');

const alertJohnDoe = alertPassenger.bind(presentToGateWarning, 'John Doe');
alertJohnDoe();
 */


/* bind with callback
class Aircraft {
    engineStarted = false;

    constructor() {
    }

    start() {
        setTimeout(this.startEngine.bind(this), 1000);
    }

    startEngine(){
        console.log(this);
        console.log(this.engineStarted);
        this.engineStarted = true;
    }
}

const a = new Aircraft();
a.start();

 */
