/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    // rewrites: async ()=> nextI18NextRewrites(localeSubpaths),
    env:{
      IMAGES_DOMAIN:process.env.IMAGES_DOMAIN
    },
    // publicRuntimeConfig:{
    //   IMAGES_DOMAIN:process.env.IMAGES_DOMAIN
    // },
    images: {
          domains: [process.env.IMAGES_DOMAIN],
        },
};
