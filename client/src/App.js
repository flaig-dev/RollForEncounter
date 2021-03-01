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
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar diam in sapien feugiat iaculis. Nam fringilla sit amet ipsum nec feugiat. Ut vel faucibus enim, sed pulvinar nibh. Aliquam erat volutpat. Duis commodo libero eu condimentum rutrum. Vestibulum ut varius velit, et maximus neque. Vestibulum ut lorem accumsan, dignissim nunc sit amet, consequat leo. Sed neque tellus, eleifend quis ligula facilisis, accumsan vulputate felis. Donec vel elit nec ligula fermentum fringilla. Cras sed magna at mauris porta tristique. Ut semper ligula mi, nec iaculis ex hendrerit convallis.
         </p>
        <EncounterGenerator />     
      </body>
    </div>
  );
}

export default App;
