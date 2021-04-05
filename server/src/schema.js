const { gql } = require('apollo-server');

const typeDefs = gql`
  #
  # Schema for Encounter
  #

  type Encounter {
    id: ID
    terrain: String
    result: String
    source: String
  }

  type LevelTables {
    minlvl: Int
    maxlvl: Int
    diceType: Int
    table: ResultTable
  }

  type ResultTable {
    min: Int
    max: Int
    result: String
  }

#
# Schema for Monster
#

  type Monster {
    name: String
    source: String
    page: Int
    size: String
    type: MonsterType
    alignment: [String]
    ac: [ArmorClass]
    hp: HealthPoints
    speed: Speed
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
    skill: Skills
    passive: Int
    languages: [String]
    cr: String
    trait: [Traits]
    action: [Actions]
    environment: [String]
  }

  type MonsterType {
    type: String
  }
  
  type ArmorClass {
    ac: Int
    from: [String]
  }

  type HealthPoints {
    average: Int
    formula: String
  }

  type Speed {
    walk: Int
    fly: Int
    climb: Int
    swim: Int
  }

  type Skills {
    perception: Int
  }

  type Traits {
    name: String
    entries: [String]
  }

  type Actions {
    name: String
    entries: [String]
  }

#
# Encounter related queries
#
  type Query {
    """
    Returns random encounter
    """
    encounter(name: String, minlvl: Int): Encounter

    """
    Returns monster
    """
    monster(name: String): [Monster]
  }
`;

module.exports = typeDefs;