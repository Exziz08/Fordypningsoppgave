const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "eksamen_db",
    password: "2008",
    port: 5432,
});


app.get("/devices", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM devices");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});