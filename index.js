require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const PROJECT_NAME = process.env.PROJECT_NAME;
const adapterConfig = { knexOptions: { connection: process.env.DATABASE_URL }, dropDatabase: true };


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

/**
 * importing schema
 */

const userSchema = require('./lists/User');
const companySchema = require('./lists/Company');
const mobileSchema = require('./lists/Mobile');
const networkSchema = require('./lists/mobile/Network');
const launchSchema = require('./lists/mobile/Launch');
const bodySchema = require('./lists/mobile/Body');
const displaySchema = require('./lists/mobile/Display');
const platformSchema = require('./lists/mobile/Platform');
const memorySchema = require('./lists/mobile/Memory');
const mainCameraSchema = require('./lists/mobile/MainCamera');
const selfieCameraSchema = require('./lists/mobile/SelfieCamera');
const soundSchema = require('./lists/mobile/Sound');
const communicationSchema = require('./lists/mobile/Communication');
const featureSchema = require('./lists/mobile/Feature');
const batterySchema = require('./lists/mobile/Battery');
const miscSchema = require('./lists/mobile/Misc');
const memoryDescriptionSchema = require('./lists/utils/MemoryDescription');
const mainCameraDescriptionSchema = require('./lists/utils/MemoryDescription');
const affilateLinkSchema = require('./lists/utils/AffilateLink');


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),

});

keystone.createList('User', userSchema);
keystone.createList('Company', companySchema);
keystone.createList('Mobile', mobileSchema);
keystone.createList('Network', networkSchema);
keystone.createList('Launch', launchSchema);
keystone.createList('Body', bodySchema);
keystone.createList('Display', displaySchema);
keystone.createList('Platform', platformSchema);
keystone.createList('Memory', memorySchema);
keystone.createList('MainCamera', mainCameraSchema);
keystone.createList('SelfieCamera', selfieCameraSchema);
keystone.createList('Sound', soundSchema);
keystone.createList('Communication', communicationSchema);
keystone.createList('Feature', featureSchema);
keystone.createList('Battery', batterySchema);
keystone.createList('Misc', miscSchema);
keystone.createList('MemoryDescription', memoryDescriptionSchema);
keystone.createList('MainCameraDescription', mainCameraDescriptionSchema);
keystone.createList('AffilateLink', affilateLinkSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })
  ],
};
