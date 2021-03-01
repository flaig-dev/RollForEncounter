import React from 'react';
import { useState } from "react";
import Select from 'react-select'
import {Form, FormGroup, Label, Button} from 'reactstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

library.add(faDiceD20)

const EncounterGenerator = (props) => {
  const [time, setTime] = useState({ label: '1', value: '1' })
  const [terrain, setTerrain] = useState({ label: 'Arctic', value: 'Arctic' })
  const [level, setLevel] = useState({ label: 'Levels1-4', value: 'Levels1-4' })
  const element = <FontAwesomeIcon icon="dice-d20" />

  return <div className="App-user-input">
    <Form className="Encounter-Form" style={{ display: 'flex', }}>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Time">Time</Label>
        <Select
          id="Time"
          isSearchable
          onChange={(e) => this.updateTimeFilter(e)}
          options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
          value={time}
        />
      </FormGroup>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Terrain">Terrain</Label>
        <Select
          id="Terrain"
          isSearchable
          onChange={(e) => this.updateTerrainFilter(e)}
          options={[{ label: 'Arctic', value: 'Arctic' }, { label: 'Mountain', value: 'Mountain' }]}
          value={terrain}
        />
      </FormGroup>
      <FormGroup style={{ margin: 'auto', width: '30%' }}>
        <Label for="Level">Level</Label>
        <Select
          id="Level"
          isSearchable
          onChange={(e) => this.updateLevelFilter(e)}
          options={[{ label: 'Levels 1-4', value: 'Levels 1-4' }, { label: 'Levels 5-9', value: 'Levels 5-9' }]}
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
export default EncounterGenerator;