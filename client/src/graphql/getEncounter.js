import gql from 'graphql-tag'

export default gql`
query encounter($name: String, $minlvl: Int) {
           encounter(name: $terrain, minlvl: 5) 
          {
            id
            result
            terrain
          }
      }
`