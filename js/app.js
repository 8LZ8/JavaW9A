// Creating 2 Arrays
var userAges = [14, 18, 21];
var subscriptionStatuses = [false, true, true];

// Looping userAges and subscriptionStatuses 3 times
for (var counter = 0; counter < 3; counter++) {
    // Setting the age from the userAges 
    var age = userAges.pop();
    // Setting the is_subscribed from the subscriptionStatuses
    var is_subscribed = subscriptionStatuses.pop();

    if (age < 18 && is_subscribed === false) {
        console.log("The user is younger than 18 and is not subscribed");
    } else if (age >= 18 && is_subscribed === false) {
        console.log("The user is 18 or older and is not subscribed");
    } else if (age < 18 && is_subscribed === true) {
        console.log("The user is younger than 18 and is subscribed");
    } else if (age >= 18 && is_subscribed === true) {
        console.log("The user is 18 or older and is subscribed");
    } else {
        console.log("User is an Alien");
    }    
}
