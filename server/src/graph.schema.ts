import {
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
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
        param: { type: GraphQLString },
      },
      resolve(parent, args) {
        const paramTypes = {
          debit: "Debit",
          credit: "Credit",
          reversal: "Reversal",
          success: "Success",
          failed: "Failed",
          pending: "Pending",
        };

        switch (args.param) {
          case paramTypes.credit:
            return _.filter(actions, {
              logId: parent.id,
              type: paramTypes.credit,
            });
          case paramTypes.debit:
            return _.filter(actions, {
              logId: parent.id,
              type: paramTypes.debit,
            });
          case paramTypes.reversal:
            return _.filter(actions, {
              logId: parent.id,
              type: paramTypes.reversal,
            });
          case paramTypes.success:
            return _.filter(actions, {
              logId: parent.id,
              status: paramTypes.success,
            });
          case paramTypes.failed:
            return _.filter(actions, {
              logId: parent.id,
              status: paramTypes.failed,
            });
          case paramTypes.pending:
            return _.filter(actions, {
              logId: parent.id,
              status: paramTypes.pending,
            });
          default:
            return _.filter(actions, { logId: parent.id });
        }
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
        return actions;
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
