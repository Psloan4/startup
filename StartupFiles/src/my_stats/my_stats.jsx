import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import { useState, useEffect } from 'react';
import { AuthState } from '../login/authState';

export function MyStats({authState}) {
    const [selection, setSelection] = useState("Squat"); // Initialize state with the default value
    const [progressDate, setProgressDate] = useState("");
    const [progressScore, setProgressScore] = useState("");
    const [goalDate, setGoalDate] = useState("");
    const [goalScore, setGoalScore] = useState("");
    const [progressEntries, setProgressEntries] = useState([]); // State to store progress entries
    const [goalEnttries, setGoalEntries] = useState([]); // State to store progress entries

    useEffect(getProgress, []);
    useEffect(getGoals, []);

    console.log("authstate ", authState)

    const handleSelectChange = (event) => {
      const newValue = event.target.value;
      setSelection(newValue); // Updates the state with the new selection
      console.log("New selection:", newValue); // Logs the newly selected value
      getProgress(newValue.toLowerCase())
      getGoals(newValue.toLowerCase())
    };

    function getProgress(liftType) {
      if (authState != AuthState.Authenticated) {return}
      if (!liftType) {
        liftType = 'squat'
      }
      const path = '/api/progress/' + liftType;
      console.log("path: ", path)
      fetch(path, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to get progress: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Data:", data); // Assuming `data` contains a `progress` property
        setProgressEntries(data.progress); // Set progress entries with the parsed data
      })
      .catch((error) => {
        console.error("Error fetching progress data:", error);
      });
    }

    function getGoals(liftType) {
      if (authState != AuthState.Authenticated) {return}
      if (!liftType) {
        liftType = 'squat'
      }
      const path = '/api/goals/' + liftType;
      fetch(path, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to get progress: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Data:", data); // Assuming `data` contains a `progress` property
        setGoalEntries(data.goals); // Set progress entries with the parsed data
      })
      .catch((error) => {
        console.error("Error fetching progress data:", error);
      });
    }

    function submitProgress() {
      const token = localStorage.getItem('token');
      fetch(`/api/progress`, {
        method: 'post',
        body: JSON.stringify({ token: token, score: progressScore, date: progressDate, liftType: selection.toLowerCase()}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to save progress: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Data:", data); // Assuming `data` contains a `progress` property
        setProgressEntries(data.progress); // Set progress entries with the parsed data
      })
    }

    function submitGoals() {
      const token = localStorage.getItem('token');
      fetch(`/api/goals`, {
        method: 'post',
        body: JSON.stringify({ token: token, goal: goalScore, date: goalDate, liftType: selection.toLowerCase()}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to save goal: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Data:", data); // Assuming `data` contains a `progress` property
        setGoalEntries(data.goals); // Set progress entries with the parsed data
      })
    }

    return (
      <main>
        <h2>My Stats</h2>
        <span>{authState === AuthState.Authenticated ? "Enter a category: " : "Log in to see your stats"}</span>
        {authState === AuthState.Authenticated && (
          <>
            <select value={selection} onChange={handleSelectChange}>
              <option>Squat</option>
              <option>Bench</option>
              <option>Deadlift</option>
            </select>
            <br />

            <h3>Progress</h3>
            <table id="table-element">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Weight (lbs)</th>
                </tr>
              </thead>
              <tbody>
                {progressEntries.map((entry, index) => (
                  <tr key={index}>
                    <td id='table-element'>{entry.date}</td>
                    <td id='table-element'>{entry.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <input type="text" placeholder="Date" onChange={(e) => setProgressDate(e.target.value)} />
            <input type="number" min="0" placeholder="Weight" onChange={(e) => setProgressScore(e.target.value)} />
            <button onClick={submitProgress} disabled={!progressDate || !progressEntries}>
              Add
            </button>
            <br />

            <h3>Goals</h3>
            <table id="table-element">
              <thead>
                <tr>
                  <th>Completion Date</th>
                  <th>Goal (lbs)</th>
                </tr>
              </thead>
              <tbody>
                {goalEnttries.map((entry, index) => (
                  <tr key={index}>
                    <td id='table-element'>{entry.date}</td>
                    <td id='table-element'>{entry.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <input type="text" placeholder="Completion Date" onChange={(e) => setGoalDate(e.target.value)} />
            <input type="number" min="0" placeholder="Goal" onChange={(e) => setGoalScore(e.target.value)} />
            <button onClick={submitGoals} disabled={!goalDate || !goalEnttries}>
              Add
            </button>
            <br />
          </>
        )}
      </main>
    );
  }