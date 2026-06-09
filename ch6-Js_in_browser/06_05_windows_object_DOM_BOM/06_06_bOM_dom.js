console.log(window); // can also be a window.console.log(window); since window is the global object in browsers

// DOM - entire HMTL made to JS Object and named to Document Object Model (DOM)
console.log(document); // document is a property of window object and it represents the DOM
console.log(document.body); // body is a property of document object and it represents the body of the HTML document

document.body.style.backgroundColor = 'lightblue'; // changing the background color of the body using DOM. we use it to based on user interactions or to create dynamic content on the webpage.

// BOM - Browser Object Model - it represents the browser and its components like history, location, navigator, screen, etc. It allows us to interact with the browser and its features. Represents additional objects provided the browswer(host environment).However, its not manadatory that host enviroment is always a browser. it can be any that runs JavaScript.