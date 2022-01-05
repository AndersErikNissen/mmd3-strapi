module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8758d9ff5a9e090d2bd82d51d939301c'),
  },
});
