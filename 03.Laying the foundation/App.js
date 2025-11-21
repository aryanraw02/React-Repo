import React from "react";
import ReactDOM from "react-dom/client";

//React .createElement => ReactElement-JS Object => HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//JSX -is not html in javascript. JSX is HTML like syntax
//JSX (transpiled before it reaches the JS) - Parcel - Babel
//Jsx => React.createElement => ReactElement-JS Object => HTMLElement (render)
const jsxHeading = <h1 className="heading">Hello World from JSX</h1>;

root.render(jsxHeading);

//React Component
//Class based component -- Old way
//Functional component -- new way

//--------------------------------------------------------------------------------------------------//

const Title = () => (
  <h1 className="heading" tabIndex="5">
    This is Title Component
  </h1>
);

//Functional Component
const HeadingComponent = () => {
  return <h1>This is a Functional component</h1>;
};

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> This is another Functional component</h1>
  </div>
);
root.render(<HeadingComponent2 />);

// THis is Component Composition below

//--------------------------------------------------------------------------------------------------//
const Title1 = () => {
  return (
    <h1 className="heading" tabIndex={5}>
      This is Title2 Component
    </h1>
  );
};

const HeadindComponent3 = () => {
  return (
    <div>
      <Title1 />
      <h1 className="heading">This is Heading Component 3</h1>
    </div>
  );
};

root.render(<HeadindComponent3 />);
//--------------------------------------------------------------------------------------------------//
const element = <span>This is a span element</span>;

const ComponentWithElement = () => (
  <div>
    {element}
    <h1>This is Component with Element</h1>
  </div>
);

const number = 8000;

const HeadindComponent4 = () => (
  <div id="container">
    {number}
    <br></br>
    {100 + 200}
    {console.log("hello")}
    {ComponentWithElement()}

    <h1>This is Heading Component 4</h1>
  </div>
);
root.render(<HeadindComponent4 />);

//--------------------------------------------------------------------------------------------------//
