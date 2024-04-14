const Users = require('../model/UserModels');
const bcrypt = require('bcrypt');

class UserService {
    async createUser(userData) {
        try {
            const user = await Users.create(userData);
            return user;
        } catch (error) {
            console.error('Erreur lors de la création de utilisateur :', error);
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const users = await Users.find();
            return users;
        } catch (error) {
            console.error('Erreur :', error);
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await Users.findByPk(userId);
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }
            return user;
        } catch (error) {
            console.error(`Erreur ${userId} :`, error);
            throw error;
        }
    }

    async updateUser(userId, userData) {
        try {
            const user = await Users.findByPk(userId);
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }
            await user.update(userData);
            return user;
        } catch (error) {
            console.error(`Erreur ${userId} :`, error);
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const user = await Users.findByPk(userId);
            if (!user) {
                throw new Error('Utilisateur non trouvé');
            }
            await user.destroy();
            return user;
        } catch (error) {
            console.error(`Erreur ${userId} :`, error);
            throw error;
        }
    }

    async authenticate(username, password) {
        try {
            const user = await Users.findOne({ where: { username: username } });
            if (!user) {
                throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
            }

            return user;
        } catch (error) {
            console.error('Erreur lors de l\'authentification :', error);
            throw error;
        }
    }
}

module.exports = new UserService();
