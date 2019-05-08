import { Resolver, Query } from 'type-graphql'

import { User } from './user-types'

@Resolver(of => User)
export class UserResolver {

    @Query(returns => [User])
    async users() {
        // TODO: Replace mock resolver
        let user: User = {
            _id: 'user_id',
            name: 'user_name',
            email: 'user@email.com',
            money: 1000.0
        }
        return [user]
    }

}