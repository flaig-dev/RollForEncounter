import React, { Component } from 'react';
import { useState } from "react";
import Select from 'react-select'
import {Form, FormGroup, Label, Button} from 'reactstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@apollo/client'
import { GET_ENCOUNTER } from './graphql'
library.add(faDiceD20)


const EncounterGenerator = (props) => {
  const [time, setTime] = useState({ label: '1', value: '1' })
  const [terrain, setTerrain] = useState({ label: 'Arctic', value: 'Arctic' })
  const [level, setLevel] = useState({ label: 'Levels 1-4', value: 1 })
  const element = <FontAwesomeIcon icon="dice-d20" />

  const GetEncounter = (time, terrain, level) => {
    const { loading, error, data } = useQuery(GET_ENCOUNTER, {
      variables: { terrain: terrain, minlvl: level },
    })
    console.log(data)
    if (loading) return null
    if (error) {
      console.log(error)
      return <p>There was an error, please refresh and try again</p>
    }
    return data.encounter.result
  }

  const result = GetEncounter(time, terrain, level)

  const GetMonsters = () => {
    //version 2.0
    //parse things out
    //run multiple queries for monsters
  }

  const monsters = GetMonsters(result)

  return (<div className="App-user-input">
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
          options={[{ label: 'Levels 1-4', value: 1 }, { label: 'Levels 5-10', value: 5 }, { label: 'Levels 11-16', value: 11 }, { label: 'Levels 17-20', value: 17 }]}
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
    {result}
  </div>
  );
}

export default EncounterGenerator;