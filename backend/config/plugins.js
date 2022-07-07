// module.exports = {
//   ckeditor:true ,
//   upload: {
//     config: {
//       provider: "strapi-provider-upload-dos",
//       providerOptions: {
//         key: process.env.DO_SPACE_ACCESS_KEY,
//         secret: process.env.DO_SPACE_SECRET_KEY,
//         endpoint: process.env.DO_SPACE_ENDPOINT,
//         space: process.env.DO_SPACE_BUCKET,
//         directory: process.env.DO_SPACE_DIRECTORY,
//         cdn: process.env.DO_SPACE_CDN,
//       },
//     },
//   },
// };

module.exports = ({ env }) => ({
  ckeditor:true ,
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
         
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
