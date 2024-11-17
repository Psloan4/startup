const express = require('express');
const app = express();

const uuid = require('uuid');
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.use(express.static('public'));

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
    console.log("creating user")
    const user = users[req.body.email];
    if (user) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = { email: req.body.email, password: req.body.password, token: uuid.v4(), progress: [], goals: []};
        users[user.email] = user;
        console.log("successfully created user")
        res.status(200).send({ token: user.token });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    console.log("in login")
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.status(200).send({ token: user.token });
        console.log(users)
        return;
        }
    }
    console.log(users)
    res.status(401).send({ msg: 'Unauthorized' });
    });

    // DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    console.log(users)
    res.status(204).end();
});

apiRouter.get('/leaders', (req, res) => {
    console.log("in leaders")
    res.send(leaderboards[req.body.leaderboard]);
});

// SubmitScore
apiRouter.post('/progress', (req, res) => {
    console.log("in progress: ")
    console.log("token = ", req.body.token)
    const user = Object.values(users).find((u) => u.token === req.body.token);
    console.log("got user")
    if (user) {
        let newLeaderboard = {
            score: req.body.score,
            email: user.email,
            date: req.body.date,
        }
        let newProgress = {
            score: req.body.score,
            date: req.body.date,
        }
        console.log("created objects")
        user.progress.push(newProgress)
        leaderboards[req.body.lift_type] = updateLeaderboard(newLeaderboard, leaderboards[req.body.lift_type]);
        console.log(user.progress)
        let progress_report = user.progress
        res.status(204).send(progress_report);
    }
});

apiRouter.post('/goals', (req, res) => {
    console.log("in goals")
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        let newGoal = {
            goal: req.body.goal,
            date: req.body.date,
        }
        user.goals.push(newGoal)
    }
    console.log(user.goals)
    let goal_report = user.goals
    res.status(204).send(goal_report);
});

function updateLeaderboard(newLeader, leaderboard) {
    let found = false;
    for (const [i, prevScore] of leaderboard.entries()) {
        if (newLeaderboard.score > leaderboard.score) {
        scores.splice(i, 0, newLeaderboard);
        found = true;
        break;
        }
    }

    if (!found) {
        leaderboard.push(newLeader);
    }

    if (leaderboard.length > 5) {
        leaderboard.length = 5;
    }

    return leaderboard;
}

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'})
})