# Use cases

## New user
* register account
* login
* browse the list of scoreboard (count of heros)

## User
* buy new hero
* buy upgrades for heros
* browse the store (with heros and upgrades)
* sell a hero to the store

# GraphQL
## Types/models
```graphql
type AuthCredentials {
    userId: ID!
    jwt: String!
    expireInHours: Int
}

type User {
    _id: ID!
    name: String!
    email: String!
    purchasedHeros: [PurchasedHero!]!
    money: Int!
}

type Hero {
    _id: ID!
    name: String!
    description: String!
    imageUrl: String!
    defaultStats: Stats!
}

type Upgrade {
    _id: ID!
    name: String!
    description: String!
    stats: Stats!
    imageUrl: String
}

type Store {
    heros: [Hero!]!
    upgrades: [Upgrade!]!
}

type Stats {
    strength: Int!
    speed: Int!
    armor: Int!
}

type PurchasedHero {
    hero: Hero!
    stats: Stats!
    upgrades: [Upgrades!]!
}

type Score {
    username: String!
    herosCount: Int!
}
```
## Resolvers
### Queries
```
login(email: String!, password: String!): AuthCredentials!
me: User!

store: Store!

scoreboard: [Score!]!
```

### Mutations
``` 
register(name: String!, email: String!, password: String!): User!
logout(): Boolean!



buyHero(heroId: ID!): User!
sellHero(heroId: ID!): User!
upgradeHero(purchasedHeroId: ID!, upgradeId: ID!): PurchasedHero!


```