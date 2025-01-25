
// Demo4
const parent = React.createElement("div", {id:"parent" }, 
React.createElement("div", {id: "chaild0"})[
    [React.createElement("h1", {id: "chaild"}, "I Am h1"),
     React.createElement("h2", {id: "chaild1"}, "I Am h2")
    ]
]
);  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);