import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import { useState } from 'react';

export function MyStats() {
    const [selection, setSelection] = useState("Squat"); // Initialize state with the default value
    const [progressDate, setProgressDate] = useState("");
    const [progressScore, setProgressScore] = useState("");
    const [goalDate, setGoalDate] = useState("");
    const [goalScore, setGoalScore] = useState("");
    const [progressEntries, setProgressEntries] = useState([]); // State to store progress entries

    const handleSelectChange = (event) => {
      const newValue = event.target.value;
      setSelection(newValue); // Updates the state with the new selection
      console.log("New selection:", newValue); // Logs the newly selected value
    };

    function submitProgress() {
      const token = localStorage.getItem('token');
      fetch(`/api/progress`, {
        method: 'post',
        body: JSON.stringify({ token: token, score: progressScore, date: progressDate, lift_type: selection}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((data) => {
        setProgressEntries((prevEntries) => [
          ...prevEntries,
          { date: data.date, weight: data.weight },
      ]);
      })
    }

    function submitGoals() {

    }

    return (
      <main>
        <h2>My Stats</h2>
        <span>Enter a category: </span>
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
                  <td>{entry.date}</td>
                  <td>{entry.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <input type="text" placeholder="Date" onChange={(e) => setProgressDate(e.target.value)} />
          <input type="number" min="0" placeholder="Weight" onChange={(e) => setProgressScore(e.target.value)} />
          <button onClick={submitProgress}>Add</button>
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
              <tr>
                  <td>Jan, 6, 3950</td>
                  <td>200</td>
              </tr>
          </tbody>
        </table>
        <br />
        <input type="text" placeholder="Completion Date" onChange={(e) => setGoalDate(e.target.value)} />
        <input type="number" min="0" placeholder="Goal" onChange={(e) => setGoalScore(e.target.value)} />
        <button>Add</button>
        <br />
      </main>
    );
  }