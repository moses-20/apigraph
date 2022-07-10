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
    party: { type: GraphQLString },
    narrative: { type: GraphQLString },
    log: {
      type: LogType,
      resolve(parent) {
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
      args: {
        type: { type: GraphQLString },
        status: { type: GraphQLString },
      },
      resolve(parent, args) {
        const type = _.filter(actions, { type: args.type });
        const status = _.filter(actions, { status: args.status });
        const combined = _.filter(_.union(type, status), { logId: parent.id });

        return combined.length > 0
          ? combined
          : _.filter(actions, { logId: parent.id });
      },
    },
  }),
});

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    actions: {
      type: new GraphQLList(ActionType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(actions, { id: args.id });
      },
    },
    logs: {
      type: new GraphQLList(LogType),
      resolve() {
        return logs;
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
