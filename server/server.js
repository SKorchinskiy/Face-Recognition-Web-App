const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const PORT = 3001;

const app = express();

let users = [];
let id = 0;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const hashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

const comparePasswords = async (typedPassword, hashedPassword) => {
  return await bcrypt.compare(typedPassword, hashedPassword);
};

const getUserByUsername = (username) => {
  const user = users.find((user) => username === user.username);
  if (user) {
    return user;
  }
  return;
};

const createUser = (user) => {
  users.push(user);
  const { id, username, email, entries } = user;
  return {
    id,
    username,
    email,
    entries,
  };
};

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => id === user.id);
  if (user) {
    res.json(user);
  } else {
    res.json(null);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = getUserByUsername(username);
  if (user) {
    try {
      const isMatching = await comparePasswords(password, user.hashedPassword);
      if (isMatching) {
        const { id, entries } = user;
        console.log("login", user);
        res.json({
          id,
          username,
          entries,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  } else {
    res.json(null);
  }
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const alreadyExists = getUserByUsername(username) ? true : false;
  if (alreadyExists) {
    console.log("dropped here");
    res.status(400).json(null);
  } else {
    const hashedPassword = await hashPassword(password, 10);
    id += 1;
    const user = createUser({
      id,
      username,
      email,
      hashedPassword,
      entries: 0,
    });
    res.status(200).json({
      ...user,
    });
  }
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  users = users.map((user) => {
    if (user.id == id) {
      user.entries += 1;
    }
    return user;
  });
  const user = users.find((user) => id == user.id);
  const { username, entries } = user;
  res.json({ id, username, entries });
});

app.listen(PORT, () => {
  console.log(`The server has successfully started on port ${PORT}`);
});
