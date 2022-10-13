const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config()


app.get("/",  (req,resp)=> {
    resp.send("Api running...!")
});

app.get("/api/notes",  (req,resp)=> {
    resp.json(notes);
});

app.get("/api/notes/:id",  (req,resp)=> {
    const note = notes.find((n)=> n._id === req.params.id)
    resp.send(note);
});


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server Started on PORT: ${PORT} `))