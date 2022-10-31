const createFlightEntry = (flight, from, status, ...args) => {
    const row = document.createElement("tr");
    if (args.length > 0) {
        const color = args[0];
        row.style.color = color;
    }

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

/* Promise API
const getFlights = () => {
    return fetch('flight-summary.json');
};

getFlights()
    .then(response => response.json())
    .then(data => {
        data.forEach(f => createFlightEntry(f.flight, f.from, f.status));
    });
 */

/* Nested Promises
const getFlights = () => {
    return fetch('flight-summary.json');
};

const getFlightDetails = (flightNumber) => {
    return fetch('flight-details.json')
        .then(res => res.json())
        .then(data => data.find(f => f.flight === flightNumber))
};

getFlights()
    .then(response => response.json())
    .then(data => {
        data.forEach(flightSummary => {
            getFlightDetails(flightSummary.flight)
                .then(flightDetails => createFlightEntry(
                    flightSummary.flight,
                    flightSummary.from,
                    flightDetails.status)
                )
        });
    });
 */

const getFlightDetails = async (flightNumber) => {
    const res = await fetch('flight-details.json');
    const detailedFlights = await res.json();
    return detailedFlights.find(f => f.flight === flightNumber);
};

const getFlights = async () => {
    const res = await fetch('flight-summary.json');
    const flights = await res.json();
    for (let flightSummary of flights) {
        const flightDetails = await getFlightDetails(flightSummary.flight);
        createFlightEntry(
            flightSummary.flight,
            flightSummary.from,
            flightDetails.status);
    }
};
getFlights();

