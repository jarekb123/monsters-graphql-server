import { graphql, GraphQLSchema } from 'graphql';
import { createSchema } from './utils/graphql-utils';
import Maybe from 'graphql/tsutils/Maybe';
import mongoose from 'mongoose';

export const testConn = async () => {
	const { connection } = await mongoose.connect('mongodb://localhost:27017/monsters-test');
	return connection;
};


interface Options {
	source: string;
	variableValues?: Maybe<{ [key: string]: any }>;
}

let schema: GraphQLSchema;

export const gCall = async ({ source, variableValues }: Options) => {
	if (!schema) {
		schema = await createSchema();
	}
	return graphql({
		schema,
		source,
		variableValues
	});
};
