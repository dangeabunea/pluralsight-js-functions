// Uncomment the relevant sections to see how they behave

let maxAltitudeMeters = 10000;
console.log(maxAltitudeMeters);

const changeAltitude = (altitudeMeters) => {
    let minAltitudeMeters = 0;  // local variable

    if (altitudeMeters < maxAltitudeMeters &&
        altitudeMeters > minAltitudeMeters) {
        console.log(`Changing altitude to ${altitudeMeters}`);
        return;
    }
    console.log('Can not change altitude: out of bounds');
}

console.log(changeAltitude(5000));

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
