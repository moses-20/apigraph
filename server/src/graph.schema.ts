import {
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
} from "graphql";
import {
  getAllActions,
  getActionsByLogId,
  getFilteredActions,
  getActionsBySearch,
  getAllLogs,
  getLogById,
} from "controllers";

const ActionType: GraphQLObjectType = new GraphQLObjectType({
  name: "Action",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    ref: { type: GraphQLString },
    trxn: { type: GraphQLString },
    status: { type: GraphQLString },
    amount: { type: GraphQLString },
    party: { type: GraphQLString },
    narrative: { type: GraphQLString },
    log: {
      type: LogType,
      async resolve(parent) {
        return getLogById(parent.logId);
      },
    },
  }),
});

const LogType: GraphQLObjectType = new GraphQLObjectType({
  name: "Log",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLString },
    actions: {
      type: new GraphQLList(ActionType),
      args: {
        type: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      async resolve(parent, args) {
        if (args.type || args.status) {
          return await getFilteredActions(parent.id, args.type, args.status);
        }

        return await getActionsByLogId(parent.id);
      },
    },
  }),
});

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    actions: {
      type: new GraphQLList(ActionType),
      async resolve() {
        return await getAllActions();
      },
    },
    logs: {
      type: new GraphQLList(LogType),
      async resolve() {
        return await getAllLogs();
      },
    },
    actionsBySearch: {
      type: new GraphQLList(ActionType),
      args: {
        query: { type: GraphQLString },
      },
      async resolve(parent, args) {
        return await getActionsBySearch(args.query);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
