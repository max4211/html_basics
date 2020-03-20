let getBody = document.querySelector("body");
let newElement = document.createElement("h1");

/* Function to determine date */
let welcomeMessage = function(hour) {
    if (hour < 12) {
        return "Good Morning!";
    } else if (hour >= 12 && hour < 16) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

/* Create a date object to determine time of day */
let date = new Date();
let hour = date.getHours();
console.log("hour: %i", hour);
let message = welcomeMessage(hour);
console.log("messsage: %s", message);

/* Append message to website */
let newText = document.createTextNode(message);
newElement.appendChild(newText);
getBody.appendChild(newElement);

/* Add styling to the element */
newElement.setAttribute("class", "welcome");
newElement.style.color = "red";
newElement.style.fontSize = "24px";
newElement.style.textTransform = "uppercase";
newElement.style.textAlign = "center";

