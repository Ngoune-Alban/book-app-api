const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization;
    const VerifyToken = jwt.verify(token, process.env.JWT_KEY);
    const userId = VerifyToken.userId;
    if (req.body.userId && req.body.userId != userId) {
        return res.status(401).json({
            message: 'Not authorized to perform this operation'
        })
    } else {
        req.userId = userId;
        next();
    }

}