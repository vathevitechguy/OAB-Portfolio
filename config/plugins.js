module.exports = ({ env }) => ({
  // upload: {
  //   config: {
  //     provider: "cloudinary",
  //     providerOptions: {
  //       cloud_name: env("CLOUDINARY_NAME"),
  //       api_key: env("CLOUDINARY_KEY"),
  //       api_secret: env("CLOUDINARY_SECRET"),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "ooa.badejo@gmail.com",
        defaultReplyTo: "ooa.badejo@gmail.com",
      },
    },
  },
});
