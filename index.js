require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const PROJECT_NAME = process.env.PROJECT_NAME;
const adapterConfig = { knexOptions: { connection: process.env.DATABASE_URL }, dropDatabase: true };


/**
 * importing schema
 */

const userFields = require('./lists/User')
const companyFields = require('./lists/Company')
const mobileFields = require('./lists/Mobile')
const affilateLinkField = require('./lists/utils/AffilateLink')
const imageField = require('./lists/utils/Image');
const { initializeAdmin } = require('./helper/initialiseAdmin');




const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: initializeAdmin,  
});

keystone.createList('User', userFields);
keystone.createList('Company', companyFields);
keystone.createList('Mobile', mobileFields);
keystone.createList('Image', imageField)
keystone.createList('AffilateLink', affilateLinkField)
// const authStrategy = keystone.createAuthStrategy({
//   type: PasswordAuthStrategy,
//   list: "User",
//   config: {
//     identityField: "email",
//     secretField: "password"
//   }
// })


module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      // authStrategy
    })
  ],
};
