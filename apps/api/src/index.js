import express from "express";

const app = express();

app.get("/api/", (_req, res) => {
    res.status(200);
    res.send("Welcome to the API!");
});



import usersRouter from "./routes/users.js";
app.use("/api/users", usersRouter);

app.listen(3000, () => {
    console.log("API server is running on http://localhost:3000");
});