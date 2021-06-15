# homelike-gql

## Description

A sample GraphQL API

## Installation

```bash
# install deps
$ npm install
```

## Configuration

1. Copy .env.example to .env under root
2. Update keys in .env file to reflect your setup

## Seed the database

```bash
# run migrations
$ npx prisma migrate dev --name {your-migration-name}
# run seeds
$ npx prisma db seed --preview-feature
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Onboarding

- Resources are split into protected and unprotected
- To use the protected resources one must first register/login to get a token
- Strictly protected resources include but are not limited to apartments and users

## TODO

- Migrate apartment location to native database spatial types
- Create a spatial index on the apartment locations
- Migrate distance querying to use built-in geometric operations
