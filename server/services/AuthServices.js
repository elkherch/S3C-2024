const jwt = require('jsonwebtoken');

class AuthService {
    generateToken(user) {
        return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    verifyToken(token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            return decodedToken.userId;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new AuthService();
