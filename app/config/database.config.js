require( "dotenv" ).config();

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DEV_DATABASE_USERNAME,
    password: DEV_DATABASE_PASSWORD,
    database: "express_test_development",
    host: DEV_DATABASE_HOST,
    dialect: "mysql"
  },
  // test: {
  //   username: "root",
  //   password: null,
  //   database: "express_test_test",
  //   host: "127.0.0.1",
  //   dialect: "mysql"
  // },
  // production: {
  //   username: "root",
  //   password: null,
  //   database: "express_test_production",
  //   host: "127.0.0.1",
  //   dialect: "mysql"
  // }
}
