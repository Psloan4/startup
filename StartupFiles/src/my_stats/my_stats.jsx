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

    const handleSelectChange = (event) => {
      const newValue = event.target.value;
      setSelection(newValue); // Updates the state with the new selection
      console.log("New selection:", newValue); // Logs the newly selected value
    };

    function submitProgress() {
      fetch(`/api/auth/progress`, {
          method: 'POST', // Use uppercase for HTTP methods
          headers: {
              'Content-Type': 'application/json', // Specify the content type
          },
          body: JSON.stringify({ /* Add the data you want to send */ }),
      })
      .then((data) => {
          console.log('Response data:', data); // Process the data
          let date = data.progress_date
          let score = data.progress_score
      })

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
                <tr>
                    <td>Jan, 6, 2150</td>
                    <td>200</td>
                </tr>
            </tbody>
          </table>
          <br />
          <input type="text" placeholder="Date" onChange={(e) => setProgressDate(e.target.value)} />
          <input type="number" min="0" placeholder="Weight" onChange={(e) => setProgressScore(e.target.value)} />
          <button>Add</button>
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