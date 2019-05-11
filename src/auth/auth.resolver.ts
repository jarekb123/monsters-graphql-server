import { Resolver, Arg, Mutation, Query } from 'type-graphql';
import { RegisterInput } from './auth.input';
import { User, UserModel } from '../user/user.types';
import bcrypt from 'bcryptjs';
import { AuthCredentials } from './auth.types';
import jwt from 'jsonwebtoken';

const hash = (password: string) => bcrypt.hash(password, 10);

@Resolver()
export class AuthResolver {
	@Mutation(() => User)
	async register(@Arg('data') newUserData: RegisterInput): Promise<User> {
		const { name, email, password } = newUserData;

		if (await UserModel.findOne({ email })) {
			throw new Error('User with provided email already exists');
		}
		const hashedPassword = await hash(password);
		const user = new UserModel({ name, email, password: hashedPassword });

		return user.save();
	}

	@Query(() => AuthCredentials)
	async login(@Arg('email') email: string, @Arg('password') password: string): Promise<AuthCredentials> {
		const user = await UserModel.findOne({ email });
		if (!user) {
			throw new Error('User not exists.');
		}
		const isPasswordCorrect = bcrypt.compareSync(password, user.password);
		if (!isPasswordCorrect) {
			throw new Error('Bad password');
		}
		const token = jwt.sign({ id: user._id }, process.env.APP_SECRET, { expiresIn: '1h' });

		return {
			userId: user._id,
			jwt: token,
			expireIn: 1
		};
	}
}
