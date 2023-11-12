const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hare Krishna"), React.createElement("h2", {}, "Hare Krishna")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Hare Rama"), React.createElement("h2", {}, "Hare Rama")])
    ]
);

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Maha Mantar!"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);