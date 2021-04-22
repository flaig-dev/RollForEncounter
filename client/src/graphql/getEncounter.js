import gql from 'graphql-tag'

export default gql`
query encounter($time: Int, $terrain: String, $level: Int) {
           encounter(time: $time, terrain: $terrain, level: $level) 
          {
            id
            result
            terrain
          }
      }
`