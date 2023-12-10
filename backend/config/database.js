// module.exports = ({ env }) => {
//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host: env("DATABASE_HOST"),
//         port: env.int("DATABASE_PORT"),
//         database: env("DATABASE_NAME"),
//         user: env("DATABASE_USERNAME"),
//         password: env("DATABASE_PASSWORD"),
//         ssl: env.bool("DATABASE_SSL", true),
//       },
//       debug: false,
//     },
//   };
// };

const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});
