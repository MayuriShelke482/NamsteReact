// Demo 1
const heading = document.createElement("h1");
heading.innerHTML= "Hellow word Javasecript!!!!!!!!!!!!!!!";
const root = document.getElementById("root");
root.appendChild(heading);



// Demo2
const headding1 = React.createElement("h1", {}, "hello my name is mayuri");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root.render(headding1);



// Demo3
const headding2 = React.createElement("h1", 
                                    {id:"frist", className:"may-be"},
                                     "This is React code");
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(headding2);



// Demo4
const parent = React.createElement("div", {id:"parent" }, 
    [React.createElement("h2", {id: "chaild"}, "i am h2")]
);  

const root5 = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// ortput:
<div id="root">
    <div id="parent">
        <h2 id="chaild">i am h2</h2>
    </div>
</div>