import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import _ from "lodash";
import { actions, logs } from "history";

const ActionType: GraphQLObjectType = new GraphQLObjectType({
  name: "Action",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
    amount: { type: GraphQLString },
    narrative: { type: GraphQLString },
    log: {
      type: LogType,
      resolve(parent, args) {
        return _.find(logs, { id: parent.logId });
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
      resolve(parent, args) {
        return _.filter(actions, { logId: parent.id });
      },
    },
  }),
});

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    actions: {
      type: new GraphQLList(ActionType),
      resolve() {
        return actions;
      },
    },
    logs: {
      type: new GraphQLList(LogType),
      resolve() {
        return logs;
      },
    },
    action: {
      type: ActionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(actions, { id: args.id });
      },
    },
    log: {
      type: LogType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(logs, { id: args.id });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
