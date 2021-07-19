module.exports = {
   HOST: 3000,
  USER: 'root',
  PASSWORD: '',
  DB: 'nodeTest',
  dialect: "mysql",
   dialectOptions: {
      charset: 'utf8',
      collate: 'utf8mb4_unicode_ci',
    },
  pool: {
    max: 5,
    min: 0,
    acquire: 80000,
    idle: 10000
  }
 /* HOST: process.env.DB_HOST,
  USER: process.env.DB_UN,
  PASSWORD: process.env.DB_PW,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 80000,
    idle: 10000
  }*/
};