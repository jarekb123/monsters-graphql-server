import { ApolloServer } from 'apollo-server';

import { createSchema } from './utils/graphql-utils';
import { MikroORM } from 'mikro-orm';
import { User } from './user/user.types';

async function bootstrap() {
	const orm = MikroORM.init({
		dbName: 'monsters-dev',
		clientUrl: 'mongodb://localhost:27017',
		entities: [User],
	})
	const server = new ApolloServer({
		schema: await createSchema()
	});
	const { url } = await server.listen(5000);
	console.log(`Server is running at ${url}`);
}

bootstrap();
