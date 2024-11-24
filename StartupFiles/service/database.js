const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const squatLeaderboardCollection = db.collection('squatLeaderboards');
const benchLeaderboardCollection = db.collection('benchLeaderboards');
const deadliftLeaderboardCollection = db.collection('deadliftLeaderboards');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    console.log("in get user")
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    // Hash the password before we insert it into the database
    console.log("in database create user")
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
        progress: {
            squat: [],
            bench: [],
            deadlift: [],
        },
        goals: {
            squat: [],
            bench: [],
            deadlift: [],
        },
    };
    await userCollection.insertOne(user);
    console.log("Successfully created user")
    return user;
}

async function addItemToArray(authToken, arrayName, liftType, newItem) {
    try {
        const fieldPath = `${arrayName}.${liftType}`;
        // Dynamic update using arrayName
        const result = await userCollection.updateOne(
        { token: authToken }, // Filter by authToken
        { $push: { [fieldPath]: newItem } } // Dynamically set the array to update
        );

        // Check if a user was updated
        if (result.modifiedCount === 0) {
        return { success: false, message: "User not found or no changes made." };
        }

        return { success: true, message: `Item added to ${arrayName} successfully.` };
    } catch (error) {
        console.error(`Error adding item to ${arrayName}:`, error);
        return { success: false, message: "An error occurred." };
    }
}


async function addSquatLeaderboard(score) {
    return squatLeaderboardCollection.insertOne(score);
}

async function addBenchLeaderboard(score) {
    return benchLeaderboardCollection.insertOne(score);
}

async function addDeadliftLeaderboard(score) {
    return deadliftLeaderboardCollection.insertOne(score);
}

function getSquatLeaderboard() {
    const cursor = squatLeaderboardCollection.find(); // No query, no options
    return cursor.toArray(); // Converts the cursor to an array of documents
}

function getBenchLeaderboard() {
    const cursor = benchLeaderboardCollection.find(); // No query, no options
    return cursor.toArray(); // Converts the cursor to an array of documents
}

function getDeadliftLeaderboard() {
    const cursor = deadliftLeaderboardCollection.find(); // No query, no options
    return cursor.toArray(); // Converts the cursor to an array of documents
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addItemToArray,
    addSquatLeaderboard,
    addBenchLeaderboard,
    addDeadliftLeaderboard,
    getSquatLeaderboard,
    getBenchLeaderboard,
    getDeadliftLeaderboard,
  };