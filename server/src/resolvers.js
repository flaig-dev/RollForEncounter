module.exports = {
  Query: {
    encounter: (obj, args, context, info) => {
      return context.encounter(args.time, args.terrain, args.level)
    },
  },
}