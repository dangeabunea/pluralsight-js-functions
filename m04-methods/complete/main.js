class FlightPlan {
    #internalArrivalTime = null;

    constructor(callsign = '', departure = '', destination = ''){
        this.callsign = callsign;
        this.departure = departure;
        this.destination = destination;
    }

    set arrivalTime(date){
        if(date){
            this.#internalArrivalTime = date;
        }
    }

    get arrivalTime(){
        return this.#internalArrivalTime;
    }

    print(){
        let info = `Flight ${this.callsign} departs from ${this.departure} and lands at ${this.destination}`;

        if(this.#internalArrivalTime){
            info += ` at ${this.#internalArrivalTime.toLocaleString()}`;
        }

        console.log(info);
    }

    // CallSign;Departure;Destination
    static fromString(flightPlanString){
        const components = flightPlanString.split(';');
        return new FlightPlan(...components);
    }

}


const berlinToParis = new FlightPlan('AF123456', 'Berlin', 'Paris');

berlinToParis.arrivalTime = new Date(2023, 11, 1, 22, 5);

berlinToParis.print();

let londonToTokyo = FlightPlan.fromString('BA345657;London;Tokyo');
londonToTokyo.print();


