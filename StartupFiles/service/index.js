const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const authCookieName = 'token';

const uuid = require('uuid');
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

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
    console.log("creating user: ", req.body.email)
    if (await DB.getUser(req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        console.log("got here")
        const user = await DB.createUser(req.body.email, req.body.password);
    
        // Set the cookie
        setAuthCookie(res, user.token);
    
        res.send({
        id: user._id,
        });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

    // DeleteAuth logout a user
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});

apiRouter.get('/leaders', (req, res) => {
    console.log("in leaders")
    res.send(leaderboards[req.body.leaderboard]);
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
    console.log("cookies: ", req.cookies)
    const authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
});

secureApiRouter.post('/progress', (req, res) => {
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

secureApiRouter.post('/goals', async (req, res) => {
    console.log("in goals")
    const authToken = req.cookies[authCookieName];
    let newGoal = {
        goal: req.body.goal,
        date: req.body.date,
    }
    DB.addItemToArray(authToken, 'goals', newGoal)
    // const user = Object.values(users).find((u) => u.token === req.body.token);
    // if (user) {
    //     let newGoal = {
    //         goal: req.body.goal,
    //         date: req.body.date,
    //     }
    //     user.goals.push(newGoal)
    // }
    // console.log(user.goals)
    // let goal_report = user.goals
    // res.status(204).send(goal_report);
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

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'})
})

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});