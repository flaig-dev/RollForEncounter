import R4Elogo from './R4Elogo.png'
import './App.css';
import EncounterGenerator from './EncounterGenerator.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={R4Elogo} className="App-logo" alt="logo" />
        <h1>Roll for Encounter</h1>
        <h5>D&D 5e Random Encounter Generator</h5>
      </header>
      <body className="App-body">
        <h6>
          <br />
          Roll for Encounter generates random Dungeons and Dragons 5th Edition encounters to be used during your party's campaign travels. <br />
          To use this application, select the total travel time in hours, terrain the party is travelling through, and the average party member's level range. 
          The resulting encounter (should one occur) will be displayed below.
          <br /> <br />
         </h6>
        <EncounterGenerator />     
      </body>
    </div>
  );
}

export default App;
