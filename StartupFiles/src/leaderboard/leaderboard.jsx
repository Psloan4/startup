import React from 'react';
import '../app.css';

export function LeaderBoard() {
    return (
      <main>
        <h2>Leaderboards</h2>
        <span>Enter an exercise: </span>
        <select>
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
        <h3>Best Performers</h3>
        <table id="table-element">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>10</td>
                <td>1/1/2000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>James Doe</td>
                <td>9</td>
                <td>1/1/2000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jill Doe</td>
                <td>8</td>
                <td>1/1/2000</td>
              </tr>
            </tbody>
          </table>
          <br />
      </main>
    );
}