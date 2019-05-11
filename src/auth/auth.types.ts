import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType({ description: 'Model of the authorization credentials' })
export class AuthCredentials {
	@Field((type) => ID)
	userId: string;

	@Field() jwt: string;

	@Field() expireIn: number;
}
