import React from "react";
import ReactDOM from "react-dom/client";


// -------------------------- Nested Div --------------------------------
const parent = React.createElement(
    "div",
    { id: "parent" , key: "parent"},
    React.createElement(
        "div",
        { id: "child" , key: "child"},
        React.createElement(
            "h1",
            {key: "h1"},
            "I am H1 Tag"
        )
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// ---------------------- Array of Children ------------------------------
const parent1 = React.createElement(
    "div",
    { id: "parent1" , key: "parent-1"},
    React.createElement(
        "div",
        { id: "child1" , key: "child-1"},
        [React.createElement("h1", {key : "h1 -1"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-2"}, "I am H2 Tag")
        ]
    )
);


const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent1);


// ---------------------- Array of Children ------------------------------
const parent2 = React.createElement(
    "div",
    { id: "parent2" , key: "parent-2"},
    [React.createElement("div", { id: "child2" , key: "child-2"},
        [React.createElement("h1", {key : "h1-3"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-4"}, "I am H2 Tag")]
    ),
    React.createElement("div", { id: "child3" , key: "child-3"},
        [React.createElement("h1", {key : "h1-5"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-6"}, "I am H2 Tag")]
    )
    ]
);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent2);

// JSX is there to make our life much better