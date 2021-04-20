import React, { Component } from 'react';
import { useState } from "react";
import Select from 'react-select'
import {Form, FormGroup, Label, Button} from 'reactstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
//test start
//import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
//import { Query } from 'react-apollo'
//test end
library.add(faDiceD20)


const EncounterGenerator = (props) => {
  const [time, setTime] = useState({ label: '1', value: '1' })
  const [terrain, setTerrain] = useState({ label: 'Arctic', value: 'Arctic' })
  const [level, setLevel] = useState({ label: 'Levels 1-4', value: 'Levels 1-4' })
  const element = <FontAwesomeIcon icon="dice-d20" />

  return <div className="App-user-input">
    <Form className="Encounter-Form" style={{ display: 'flex', }}>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Time">Time</Label>
        <Select
          id="Time"
          isSearchable
          onChange={(e) => setTime(e)}
          options={[{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' },
          { label: '6', value: '6' }, { label: '7', value: '7' }, { label: '8', value: '8' }]}
          value={time}
        />
      </FormGroup>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Terrain">Terrain</Label>
        <Select
          id="Terrain"
          isSearchable
          onChange={(e) => setTerrain(e)}
          options={[{ label: 'Arctic', value: 'Arctic' }, { label: 'Coastal', value: 'Coastal' }, { label: 'Desert', value: 'Desert' }, { label: 'Forest', value: 'Forest' },
            { label: 'Grassland', value: 'Grassland' }, { label: 'Hill', value: 'Hill' }, { label: 'Mountain', value: 'Mountain' }, { label: 'Swamp', value: 'Swamp' },
            { label: 'Underdark', value: 'Underdark' }, { label: 'Urban', value: 'Urban' }]}
          value={terrain}
        />
      </FormGroup>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Level">Level</Label>
        <Select
          id="Level"
          isSearchable
          onChange={(e) => setLevel(e)}
          options={[{ label: 'Levels 1-4', value: 'Levels 1-4' }, { label: 'Levels 5-10', value: 'Levels 5-10' }, { label: 'Levels 11-16', value: 'Levels 11-16' }, { label: 'Levels 17-20', value: 'Levels 17-20' }]}
          value={level}
        />
      </FormGroup>
    </Form>
    <br />
    <Button color="primary" size="lg" block style={{ margin: 'auto', width: '50%' }}><FontAwesomeIcon icon="dice-d20" /> Generate Encounter <FontAwesomeIcon icon="dice-d20" /></Button>
    <hr />
    <p>
      Resulting Encounter:
    </p>
  </div>
}


//test start
//const client = new ApolloClient({
//  uri: 'http://localhost:4000/',
//  cache: new InMemoryCache(),
//});

//const SearchQuery = gql`
//      query Encounter($name: String, $minlvl: Int) {
//           encounter(name: $terrain, minlvl: 5) 
//          {
//            id
//            result
//            terrain
//          }
//      }
//    `;

//export default class Search extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      encounter: ''
//    }
//  }
//}

//updateSearch = (e) => {
//  this.setState({
//    encounter: e.target.value
//  })
//}

//submitSearch = (e) => {
//  e.preventDefault()
//  console.log(this.state)
//}

//render() {

//  const { encounter } = this.state;

//  return (
//    <form onSubmit={this.submitSearch}>
//      <input
//        type='text'
//        onChange={this.updateSearch}
//        value={encounter}
//        placeholder='Search'
//      />
//      <Query query={SearchQuery} skip={!encounter} variables={{ query: encounter }}>
//        {({ loading, error, data }) => {
//          if (loading) return null;
//          if (error) throw err;
//          console.log(data.encounter);
//          return {data.encounter}
//        }}
//      </Query>
//    </form>
//  )
//};


//test end

export default EncounterGenerator;