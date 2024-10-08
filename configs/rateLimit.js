const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const rateLimitMiddleware = setRateLimit({
	windowMs: 60 * 1000,
	max: 60,
	message: "You have exceeded your 60 requests per minute limit.",
	headers: true,
});

module.exports = rateLimitMiddleware;