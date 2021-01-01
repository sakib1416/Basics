const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("Testing");
});

app.get("/start", (req,res) => {
    res.send("This is the starting page");
});

app.get("/end", (req,res) => {
    res.send("This is the ending page");
});


//for all other non-defined routes
app.get("*", (req,res) => {
    res.send("Page not found");
});



app.listen(process.env.PORT || 3000, () =>{
    console.log("Server has started");
});



