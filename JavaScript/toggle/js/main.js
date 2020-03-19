/* Named function */
function named(name) {
    var greeting = "Hi " + name + "! Welcome to my website.";
    return greeting;
}
console.log(named("Max"));

/* Anonymous function */
var anonymous = function(name) {
    var greeting = "Hi " + name + "! Welcome to my website.";
    return greeting;
}
console.log(anonymous("Nick"));

/* Immediately invokable expression */
(function() {
    var greeting = "Hi Noah! Welcome to my website.";
    console.log(greeting);
}())