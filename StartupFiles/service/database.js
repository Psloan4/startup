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

  async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
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