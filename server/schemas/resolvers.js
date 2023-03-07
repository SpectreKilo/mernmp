const { AuthenticationError } = require('apollo-server-express');
const { Tech, Matchup } = require('../models');

const resolvers = {
Query: {
    getAllMatchups: async(parent, args, context) => {
        const allMatchups = await Matchup.find({});
        return allMatchups;
    },

    getMatchup: async(parent, args, context) => {
        const getMatchup = await Matchup.findOne({_id: args.id})
        return getMatchup;
    },
},
Mutation: {
    createMatchup: async(parent, args, context) => {
        const matchup = await Matchup.create(args.matchup);
        return matchup
    },

    createVote: async(parent, args, context) => {
        const vote = await Matchup.findOneAndUpdate(
            {_id: args.id},
            { $inc: { [`tech${args.techNum}_votes`]: 1 } },
            {new: true}
        );
        return vote
    },
    
}
}







module.exports = resolvers;