// This is the app.tsx file

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

interface CollegeTeams {
  school: string;
  name: string;
  pop: number;
  city: string;
  state: string;
}

// This is a FUNCTION
function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

// This is a COMPONENT
class Team extends React.Component<CollegeTeams> {
  render() {
    const oneTeam = this.props;

    return (
      <div
        style={{
          border: '3px solid black',
          borderRadius: '10px',
          width: '300px',
          textAlign: 'center',
          margin: '0 auto',
          marginBottom: '10px',
        }}
      >
        <br />
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br />
      </div>
    );
  }
}

// ... Is the spread which takes all of the elements of the band names and spreading them out into an array or class to access the individual ElementFlags.
function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

// This is the app function that we are calling in the index

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
