import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../app.css';

export function MyStats() {
    return (
      <main>
        <h2>My Stats</h2>
        <span>Enter a category: </span>
        <select>
            <optgroup label="General">
                <option>Weight</option>
                <option>Calories Burned</option>
                <option>Calory Intake</option>
                <option>Exercise Frequency</option>
            </optgroup>
            <optgroup label="Strength">
                <option>Deadlift</option>
                <option>Squat</option>
                <option>Bench Press</option>
                <option>Incline Press</option>
                <option>Leg Press</option>
                <option>Strict Curl</option>
                <option>Barbell Row</option>
            </optgroup>      
            <optgroup label="Cardio">
                <option>100 Meter Dash</option>
                <option>Mile Run</option>
                <option>Marathon</option>
                <option>5K</option>
            </optgroup>
            <optgroup label="Calisthenics">
                <option>Push Ups</option>
                <option>Sit Ups</option>
                <option>Body Weight Squats</option>
                <option>Pull Ups</option>
                <option>Chin Ups</option>
            </optgroup>
        </select>
        <br />
        <h3>Progress</h3>
        <table id="table-element">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
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
          <h3>Goals</h3>
        <table id="table-element">
            <thead>
              <tr>
                <th>Completion Date</th>
                <th>Goal</th>
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
      </main>
    );
}