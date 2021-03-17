var age = 18;
var is_subscribed = true;

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
