/* app/server.ts */

// Import everything from express and assign it to the express variable
import * as express from 'express';

// Import WelcomeController from controllers entry point
import { loginRouteController } from './router';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = parseFloat( process.env.PORT) || 3000;

// Mount the loginController at the /welcome route
app.use('/login', loginRouteController);
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
