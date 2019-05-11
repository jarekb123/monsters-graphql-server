import { InputType, Field } from 'type-graphql';

@InputType({ description: 'New user data' })
export class RegisterInput {
	@Field() name: string;
	@Field() email: string;
	@Field() password: string;
}
