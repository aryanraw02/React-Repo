/**
 * 
 * <div id="parent">
 *     <div id="child">
 *        <h1>I'm a h1 tag</h1>
 *     </div>
 * </div>
 * 
 * 
 */

/*
*  parent is a ReactElement, which is basically an object
*  A ReactElement is just a JavaScript object that the browser can interpret
*  ReactElement (object) → gets converted into HTML that the browser can read
*/


// ------Nested div example-------
const parent = React.createElement(
    "div", 
    {id : "parent"},
    React.createElement(
        "div", 
        {id : "child"},
        React.createElement(
            "h1", 
            {}, 
            "I'm a h1 tag")
    )
);

console.log(parent);   //Object


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

// -----Array of Children Example-----
const parent1 = React.createElement(
    "div",
    { id: "parent1" },
    React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
        ]
    )
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent1);


// -----Array of Chideren Example2-----

const parent2 = React.createElement(
    "div",
    { id: "parent2" },
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
        ]
    ),
    React.createElement("div", { id: "child3" },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")]
    )
    
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent2);

// Jsx make it easier to write React code
