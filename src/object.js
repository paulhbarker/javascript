// JavaScript Document
function createAddress() {
    const name = document.querySelector('#name').value;
    const firstLine = document.querySelector('#firstLine').value;
    const secondLine = document.querySelector('#secondLine').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const zip = document.querySelector('#zip').value;

    const address = new Address({ name, firstLine, secondLine, city, state, zip });

    if(!address) {
        return false;
    } else {
        console.log( address );
        document.querySelector('#output').innerHTML = address.display();
    }
}

class Address {
    constructor(options) {
        this.name = options.name;
        this.firstLine = options.firstLine;
        this.secondLine = options.secondLine;
        this.city = options.city;
        this.state = options.state;
        this.zip = options.zip;
    }

    display() {
        return this.name + '<br>' +
            this.firstLine + '<br>' +
            this.secondLine + '<br>' +
            this.city + ', ' + this.state + ' ' + this.zip;
    }
}
