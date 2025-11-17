/* Writing React code by creating elements through the React library */
// {} is where we specify attributes for the element
// const heading = React.createElement("h1", {}, "Hello World From React!");
const heading = React.createElement(
    "h1", 
    {id : "heading",               // Props → element attributes
        xyz : "abc"
    }, 
    "Hello World from React!");    // Props → child content



// 'heading' becomes a normal JavaScript object
// It contains properties
// It contains child elements/text
console.log(heading);

/* Now we need to update the DOM using the ReactDOM library */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* Take the React element object and display it inside the root */
root.render(heading);


// Whenever something happens on a webpage, the DOM changes
// Changing the DOM is one of the most expensive tasks for the browser

// React follows the idea that instead of writing a lot of HTML manually,
// we should let JavaScript handle DOM updates efficiently