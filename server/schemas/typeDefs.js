const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Tech {
    name: String
}
type Matchup{
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}
input IMatchup {
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}
type Query {
getAllMatchups:[Matchup]
getMatchup(id: ID!):Matchup
}
type Mutation {
createMatchup(matchup: IMatchup):Matchup
createVote(id: ID!, techNum: Int): Matchup
}
`;

module.exports = typeDefs;