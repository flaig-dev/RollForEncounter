const Encounters = require('./datasources/encounters.json');
const Monsters = require('./datasources/monsters.json');

module.exports = ({ req, res }) => ({
  encounter: (time, terrain, level) => {
    const Time = time
    const Terrain = Encounters.encounter.filter(encounter => encounter.name === terrain)
    const Level = Terrain[0].tables.filter(table => table.minlvl === level)
    console.log(Level)
    function getRandomInt(min, max) { //Creates the random number for the encounter
      min = Math.ceil(1);
      max = Math.floor(15);
      return Math.floor(Math.random() * (max - min) + min); 
    }
    const RandomInt = getRandomInt();
    const RandomNumber = Math.random() * 100
    if (RandomNumber < (Time * 10))
      return {
        id: 1,
        terrain: Terrain[0].name,
        result: Level[0].table[RandomInt].result,
      }
    else
      return {
        id: 1,
        terrain: Terrain[0].name,
        result: "No encounter occured during this time."
      }
  }
})