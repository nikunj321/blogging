require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const PROJECT_NAME = process.env.PROJECT_NAME;
const adapterConfig = { knexOptions: { connection: process.env.DATABASE_URL } };


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

/**
 * importing schema
 */

const userSchema = require('./lists/User');


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('User', userSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};
