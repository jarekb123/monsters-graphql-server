import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql';

import {UserResolver} from './user/user-resolvers'

const resolvers = buildSchema({
    resolvers: [UserResolver]
})

const server = new ApolloServer({
    resolvers
})

server.listen(3000).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})