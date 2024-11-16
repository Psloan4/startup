import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../app.css';

export function MyStats() {
    return (
      <main>
        <h2>My Stats</h2>
        <span>Enter a category: </span>
        <select>
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