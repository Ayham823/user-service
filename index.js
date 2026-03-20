const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
