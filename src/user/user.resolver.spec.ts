import faker from 'faker';
import { Connection } from 'mongoose';
import { gCall, testConn } from '../test-utils';
import { UserModel } from './user.types';
import { expect } from 'chai';

const createFakeUser = () => {
	return new UserModel({
		name: faker.name.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		money: faker.random.number()
	});
};

const usersQuery = `
    query {
        users {
            _id
            name
            email
            money
        }
    }
`;

describe('user.resolvers', async () => {
	let conn: Connection;

	before(async () => (conn = await testConn()));
	afterEach(async () => await conn.dropDatabase());
	after(async () => await conn.close());

	it('Query users -> should return all users', async () => {
		const user1 = await createFakeUser().save();
		const user2 = await createFakeUser().save();

		const result = await gCall({
			source: usersQuery
		});
		expect(result.data.users.length).to.eq(2);
		expect(result.errors).is.undefined;
		expect(result.data.users[0]._id).to.eq(user1._id.toString());
		expect(result.data.users[0].name).to.eq(user1.name);
		expect(result.data.users[1].email).to.eq(user2.email);
		expect(result.data.users[1].money).to.eq(user2.money);
	});
});
