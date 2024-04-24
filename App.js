// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From react"
// );
// console.log(heading);

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am H1 Tag"),
    React.createElement("h2", { id: "heading4" }, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading2" }, "I am H1 Tag"),
    React.createElement("h2", { id: "heading3" }, "I am H2 Tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root11"));

root.render(parent);
