const foodDatabase = [
    { name: "Apple (1 medium)", cal: 95 },
    { name: "Banana (1 medium)", cal: 105 },
    { name: "Orange (1 medium)", cal: 62 }
];

let food = { name: "Chicken(1 piece)", cal: 150 };
foodDatabase.push(food)
console.log(food.foodDatabase);
// add one more foood
let food1 = { name: "Burger", cal: 451 };
foodDatabase.push(food1)
console.log(food1.foodDatabase);
foodDatabase.forEach(food => console.log(food));
for (let i in foodDatabase) {
    let name = foodDatabase[i].name;
    let cale = foodDatabase[i].cal;
    if (cal < 100) {
        console.log("index " + i + "name: " + name + "cal: " + cal);
    }
}
/// hotel
let reservationList = [];
// event --> action
function saveReservation() {
    let reversation = {
        name: document.querySelector('#guestname').value,
        checkin: document.getElementById('checkin').value,
        roomtype: document.getElementById('room').value
    }; // store all of information of on reservation
    console.log("We get a reservation --" + reservationList);
    console.log(reservationList);
}
const sE = document.querySelector('#submit');
sE.addEventListener('click', saveReservation);

// implenent list reservation
function displayR() {
    let result = "";
    result += " <table>";
    let name = reservationList[0].name;
    let roomtype = reservationList[0].roomtype;
    result += "<tr> <td>" + name + "</td><td>" + roomtype + "</td><tr>";
    result += "</table>";
    // display the table 
    document.querySelector('#completelist').innerHTML = result;
}


