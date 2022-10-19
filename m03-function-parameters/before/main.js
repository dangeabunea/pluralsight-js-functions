const createFlightEntry = function(flight, from, status){
    const row = document.createElement("tr");

    const flightCol = document.createElement('td');
    flightCol.innerText = flight;

    const fromCol = document.createElement('td');
    fromCol.innerText = from;

    const statusCol = document.createElement('td');
    statusCol.innerText = status;

    row.appendChild(flightCol);
    row.appendChild(fromCol);
    row.appendChild(statusCol);

    const parent = document.getElementById('arrivalList');
    parent.appendChild(row);
}

createFlightEntry('RO12345', 'Paris', 'On time');
createFlightEntry('US67957', 'Berlin', 'On time');
createFlightEntry('AF89756', 'New York', 'Delayed');
createFlightEntry('UAL7897', 'Bucharest', 'Cancelled');
