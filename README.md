# Install packages

### express

`npm i -S express` `npm i -D @types/express`

### typescript

`npm i typescript`

### db-migrate

`npm install db-migrate`

### bcrypt

`npm -i bcrypt` `npm -i -D @types/bcrypt`

### jsonwebtoken

`npm install jsonwebtoken --save-dev` `npm -i -D @types/jsonwebtoken`

### jasmine

`npm install jasmine @types/jasmine @ert78gb/jasmine-ts ts-node --save-dev`

### supertest

`npm i supertest` `npm i --save-dev @types/supertest`

# Create Databases

Now , we should create the dev and test database.

connect to the default postgres database as the server's root user psql -U postgres In psql run the following to create the dev and test database `CREATE DATABASE storefront_db;` `CREATE DATABASE storefront_test;`

### Migration databse

To migrate the databse run this command:
`db-migrate up`

# Enviromental Variables Set up

Here are the environmental variables that is should be create in the .env file.

`NODE_ENV="dev"`

### database info

`PORT=3000`
`NODE_ENV=dev`

`POSTGRES_HOST=localhost`
`POSTGRES_PORT=5432`
`POSTGRES_DB=storefront_db`
`POSTGRES_DB_TEST=storefront_test`
`POSTGRES_USER=postgres`
`POSTGRES_PASSWORD=671973`
`BCRYPT_PASSWORD=bcrypt-pass`
`SALT_ROUNDS=10`
`TOKEN_SECRET=my-secret`

### Ports

the server port is **3000** , the database port is **5432**

# Testing

### build the project first:

`npm run build`

### Then test the project:

`npm run test`

# Run the server

`npm run dev`
