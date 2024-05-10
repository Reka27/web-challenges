console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const hours = new Date().getHours();
  if (hours > 5 && hours < 13) {
    return "Good Motning";
  } else if (hours > 12 && hours < 19) {
    return "Good Afternoon";
  } else if (hours > 18 && hours < 23) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
  // Code here
}

function getDayColor() {
  // Code here
  const day = new Date().getDay();
  if (day == "tuesday" || "thurday" || "friday") {
    return "lightblue";
  } else if ((day = "saturaday" || "sunday")) {
    return "hotpink";
  } else {
    return "darkgray";
  }
  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
