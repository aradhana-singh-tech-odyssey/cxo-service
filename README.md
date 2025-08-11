# CXO Service

A secure authentication and authorization service built with Express.js and MongoDB, featuring role-based access control (RBAC).

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- MongoDB (local or remote instance)

## Installation

1. Clone the repository (if you haven't already)
2. Navigate to the cxo-service directory:
   ```bash
   cd /path/to/cxo-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/cxo-service
PORT=4000
JWT_SECRET=your_jwt_secret_key_here
```

## Development

### Building the Application

The service uses esbuild for bundling. To build the application:

```bash
npm run build
```

This will create a `dist` directory with the bundled application.

### Running the Service

To start the service in development mode:

```bash
npm start
```

The service will be available at:
```
http://localhost:4000
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Authenticate a user
- `GET /api/auth/profile` - Get user profile (requires authentication)

### Protected Routes

- `GET /api/auth/admin` - Admin-only route
- `GET /api/auth/dashboard` - Accessible by both users and admins

## Environment Variables

- `PORT` - Port on which the server will run (default: 4000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing

## Dependencies

- Express.js - Web framework
- Mongoose - MongoDB object modeling
- bcrypt - Password hashing
- jsonwebtoken - JWT implementation
- CORS - Cross-Origin Resource Sharing
- dotenv - Environment variable management
- esbuild - JavaScript bundler (dev dependency)

## Production Deployment

1. Set up environment variables in your production environment
2. Install production dependencies:
   ```bash
   npm install --production
   ```
3. Build the application:
   ```bash
   npm run build
   ```
4. Start the service:
   ```bash
   npm start
   ```

## Testing

No tests are currently configured. Consider adding tests using a testing framework like Jest or Mocha.

## License

ISC