// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d',
        },
      },
    },
    seo: {
      enabled: true,
    },
    // ...
  });
