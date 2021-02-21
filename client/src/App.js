import R4Elogo from './R4Elogo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={R4Elogo} className="App-logo" alt="logo" />
        <h1>Roll for Encounter</h1>
        <h5>D&D 5e Random Encounter Generator</h5>
      </header>
      <body className="App-body">
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar diam in sapien feugiat iaculis. Nam fringilla sit amet ipsum nec feugiat. Ut vel faucibus enim, sed pulvinar nibh. Aliquam erat volutpat. Duis commodo libero eu condimentum rutrum. Vestibulum ut varius velit, et maximus neque. Vestibulum ut lorem accumsan, dignissim nunc sit amet, consequat leo. Sed neque tellus, eleifend quis ligula facilisis, accumsan vulputate felis. Donec vel elit nec ligula fermentum fringilla. Cras sed magna at mauris porta tristique. Ut semper ligula mi, nec iaculis ex hendrerit convallis.
         </p>
        <div className="App-user-input">
          <p>
            Length of Travel Time:
              <input type="range" min="1" max="8" className="App-slider"></input>
              <br></br>
            Location Terrain Type: 
              <select id="selectTerrain">
                <option value="value">Test Value</option>
                <option value="value2">Test Value 2</option>
              </select>
              <br></br>
            Level Range: 
              <select id="selectRange">
                <option value="value">Test Value</option>
                <option value="value2">Test Value 2</option>
              </select>
            <br></br>
            <input type="submit" value="Submit"></input>
            <br></br>
            </p>
          <hr></hr>
          <p>
            Resulting Encounter:
          </p>
          </div>
      </body>
    </div>
  );
}

export default App;
