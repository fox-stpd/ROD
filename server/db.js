const {Sequelize} = require('sequelize')

var {Pool} = require('pg');

// module.exports = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         ssl:true,
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }

const pool = new Sequelize({
    connectionString: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: {
        rejectUnauthorized: false
    }
});