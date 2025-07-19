location.hostname; // "yourapp.com"
location.pathname; // "/about"
location.protocol; // "https:"
location.origin; // "https://yourapp.com"
location.port; // "3000" (if any)
location.search; // "?foo=bar"
location.hash; // "#anchor"

console.log(window.location.href); // e.g. https://yourapp.com/about

// window.open(url, name, features, replace);

// Timers
setTimeout(() => console.log("After 2s"), 2000);
const id = setInterval(() => console.log("Every 1s"), 1000);
clearInterval(id); // Stop it

// Local Storage
localStorage.setItem("name", "Dhiraj");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

// Session Storage
sessionStorage.setItem("name", "Dhiraj");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();

// Cookies
document.cookie = "name=Dhiraj; expires=Fri, 31 Dec 9999 23:59:59 GMT";

//History
history.back();
history.forward();
history.go(-1);

//browser info
navigator.userAgent; // Browser + OS info
navigator.language; // e.g., "en-US"
navigator.onLine; // true / false

//Dom Access
document.getElementById("myId");
document.querySelector(".myClass");
document.title = "New Page Title";
