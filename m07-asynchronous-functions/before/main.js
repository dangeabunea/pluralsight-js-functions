const createFlightEntry = (flight, from, status, ...args) => {
    console.log(args);

    const row = document.createElement("tr");
    if(args.length > 0){
        const color = args[0];
        row.style.color = color;
    }

    const flightCol = document.createElement('td');
    flightCol.innerText = flight;

    const fromCol = document.createElement('td');
    fromCol.innerText = from;

    const statusCol = document.createElement ('td');
    statusCol.innerText = status;

    row.appendChild(flightCol);
    row.appendChild(fromCol);
    row.appendChild(statusCol);

    const parent = document.getElementById('arrivalList');
    parent.appendChild(row);
}



createFlightEntry('RO12345', 'Paris', 'On time');
createFlightEntry('US67957', 'Berlin', 'On time');
createFlightEntry('AF89756', 'New York', 'Delayed', 'yellow');
createFlightEntry('UAL7897', 'Bucharest', 'Cancelled', 'red');
createFlightEntry('OS4782', 'Vienna', 'On time');

const displayTime = () => {
    const time = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = time;
}

displayTime();
setInterval(() => {
    displayTime();
}, 1*1000);
