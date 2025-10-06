const redis = require("redis");
const { REDIS_URL } = require("./config");

const redisClient = redis.createClient({
    url: REDIS_URL,
});

redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
});

(async () => {
    await redisClient.connect();
})();

module.exports = redisClient;