// OBJECT DESTRUCTURING
const person = {
    name: 'Venice',
    age: 25,
    location: {
        city: 'Miami',
        temp: 95
    }
};

var payload = {
    incrementBy: 7
}
console.log(payload.incrementBy);

const { incrementBy } = payload;
console.log(incrementBy);

const { temp, city } = person.location;
// console.log(temp);
// console.log(city);

// ARRAY DESTRUCTURING
const address = ['1000 Juniper St', 'Berlin', 'Germany', '191AT'];
// console.log(address[1]);

const [ street, myspot, place, code ] = address;
console.log(myspot);
