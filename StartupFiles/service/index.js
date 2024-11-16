const express = require('express');
const app = express();

const uuid = require('uuid');
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

let users = {};
let leaderboards = {
    "squat": [],
    "bench": [],
    "deadlift": [],
};


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
  });

  apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
  
  // DeleteAuth logout a user
  apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
  });

  apiRouter.get('/scores', (req, res) => {
    res.send(leaderboards[req.body.leaderboard]);
  });
  
  // SubmitScore
  apiRouter.post('/score', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        leaderboards = updateLeaderboard(req.body, scores);
    }
    res.status(204).end();
    res.send({
        score: req.score,
        email: req.email,
        date: req.date,
    });
  });

  function updateLeaderboard(newLeaderboard, leaderboard) {
    let found = false;
    for (const [i, prevScore] of leaderboard.entries()) {
      if (newLeaderboard.score > leaderboard.score) {
        scores.splice(i, 0, {
            score: newLeaderboard.score,
            email: newLeaderboard.email,
            date: newLeaderboard.date,
        });
        found = true;
        break;
      }
    }
  
    if (!found) {
      scores.push(newScore);
    }
  
    if (scores.length > 5) {
      scores.length = 5;
    }
  
    return scores;
  }