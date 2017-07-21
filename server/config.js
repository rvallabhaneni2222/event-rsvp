// server/config.js
module.exports = {
  AUTH0_DOMAIN: '[RSVP MEAN App].auth0.com',
  AUTH0_API_AUDIENCE: '[RSVP MEAN API]', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://[root]:[root]@[ds157682].mlab.com:[57682]/[mean]',
  NAMESPACE: 'http://myapp.com/roles'
};
