module.exports = {
  Query: {
    encounter: (obj, args, context, info) => {
      return context.encounter(args.name, args.minlvl)
    },
  },
}