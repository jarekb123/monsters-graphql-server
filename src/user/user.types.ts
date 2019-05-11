import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Typegoose, prop as Property } from 'typegoose';

@ObjectType({ description: 'User model' })
export class User extends Typegoose {
	@Field() _id: string;

	@Property({ required: true })
	@Field()
	name: string;

	@Property({ required: true })
	@Field()
	email: string;

	@Property({ required: true })
	password: string;

	// purchasedHeros: []

	@Property({ required: true, default: 0.0 })
	@Field()
	money: number;
}

export const UserModel = new User().getModelForClass(User);