import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', 
  cache: new InMemoryCache(),
});


client // This works but is needs varriables
  .query({
    query: gql`
      query {
        encounter(name: "Coastal", minlvl: 5) 
        {
          id
          result
          terrain
        }
      }
    `
  })
  .then(result => console.log(result));


//Trying to figure out if this is the solution with varriables 

const GET_ENCOUNTER = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  variables: { name: 'Coastal' },
  query: gql`
      query Encounter($name: String, $minlvl: Int) {
        encounter(name: $name, minlvl: 5) {
          id
          result
          terrain
        }
    }
    `
})


export default function EncounterDetails () {
  const { loading, error, data } = useQuery(GET_ENCOUNTER, {
    variables: {name: 'Coastal'},
  })

  if (loading) return null
  if (error) return `Error! ${error}`

  console.log(data.encounter)
  return (data.encounter)
}

//end testing


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
