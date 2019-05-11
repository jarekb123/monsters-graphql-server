import { Resolver, Query } from 'type-graphql';
import 'reflect-metadata';
import { User, UserModel } from './user.types';
import { MikroORM } from 'mikro-orm';

@Resolver(() => User)
export class UserResolver {
	@Query(() => [ User ])
	async users(): Promise<User[]> {
		return await UserModel.find();
	}
}
