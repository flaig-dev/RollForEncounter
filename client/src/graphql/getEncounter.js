import gql from 'graphql-tag'

export default gql`
query encounter($terrain: String, $minlvl: Int) {
           encounter(terrain: $terrain, minlvl: $level) 
          {
            id
            result
            terrain
          }
      }
`