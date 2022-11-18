// Uncomment the relevant sections to see how they behave

let callSign = 'KLM346';
console.log(callSign);

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
changeAltitude(5000);

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
