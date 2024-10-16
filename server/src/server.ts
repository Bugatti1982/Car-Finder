// controls when the database is forcibly refreshed
// the default is not forced because of false statement
const forceDatabaseRefresh = false;

// imports express and sequelize and routes to index.js file
import  express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';

// creates express server and sets the port
const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

// Parses incoming JSON data
app.use(express.json());
app.use(routes);

// Syncs the database and starts the server
sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
