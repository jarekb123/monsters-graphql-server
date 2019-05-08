import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType({description: 'User model'})
export class User {
    
    @Field(type => ID)
    _id: string
    
    @Field()
    name: string

    @Field()
    email: string

    // purchasedHeros: []

    @Field()
    money: number
}

@ObjectType({ description: 'Model of the authorization credentials' })
export class AuthCredentials {
    @Field(type => ID)
    userId: string

    @Field()
    jwt: string
    
    @Field()
    expireIn: number
}

const UserTypes = [User, AuthCredentials]

export { UserTypes }