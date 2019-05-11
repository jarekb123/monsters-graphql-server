import { buildSchema } from 'type-graphql';
import { UserResolver } from '../user/user.resolver';
import path from 'path'
import { Container } from 'typedi';
import { AuthResolver } from '../auth/auth.resolver';

export const createSchema = async () => {
    return buildSchema({
        resolvers: [UserResolver, AuthResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
        validate: false,
        container: Container
    })
} 