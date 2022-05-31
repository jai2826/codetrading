// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-dos",
      providerOptions: {
        key: process.env.DO_SPACE_ACCESS_KEY,
        secret: process.env.DO_SPACE_SECRET_KEY,
        endpoint: process.env.DO_SPACE_ENDPOINT,
        space: process.env.DO_SPACE_BUCKET,
        directory: process.env.DO_SPACE_DIRECTORY,
        cdn: process.env.DO_SPACE_CDN,
      },
    },
  },
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
