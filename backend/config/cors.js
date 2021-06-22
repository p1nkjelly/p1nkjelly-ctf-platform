module.exports = {
    origin: [
        'http://localhost:8560',
        ...(process.env.CORS_ALLOWED_URL ? process.env.CORS_ALLOWED_URL.split(',') : []),
    ],
    credentials: true,
    optionsSuccessStatus: 200
}
