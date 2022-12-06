class FlightPlan {
    #internalDepartureTime = null;

    constructor(callsign = '', departure = '', destination = '') {
        this.callsign = callsign;
        this.departure = departure;
        this.destination = destination;
    }

    print() {
        let info = `Flight ${this.callsign} departs from ${this.departure} and lands at ${this.destination}`;
        console.log(info);
    }


    get departureTime() {
        return this.#internalDepartureTime.toLocaleString();
    }

    set departureTime(date) {
        if(!date) {
            throw new Error('Date can not be null');
        }

        if(date - Date.now() < 0){
            throw new Error('Date is in the past');
        }

        this.#internalDepartureTime = date;
    }
}

const berlinToParis = new FlightPlan('AF123456', 'Berlin', 'Paris');
berlinToParis.print();
berlinToParis.departureTime = new Date(2024,1,1,18,00);
console.log(berlinToParis.departureTime);

berlinToParis.#internalDepartureTime = Date.now();