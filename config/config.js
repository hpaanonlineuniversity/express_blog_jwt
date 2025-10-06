module.exports = {
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_IP: process.env.MONGO_IP,
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_URL: process.env.REDIS_URL || "redis://redis:6379", // Default Redis URL
};