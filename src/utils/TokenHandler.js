const jwt = require("jsonwebtoken");
const { DbContext } = require("../dbcontext/sequelize");
const dotenv = require('dotenv').config();

const tokensecret = process.env.TOKEN_SECRET;

module.exports = {
  createToken(user) {
    const signValue = {
      id: user.id,
      role: user.role,
    };
    return jwt.sign(signValue, tokensecret, { expiresIn: "1d" });
  },

  async getUserFromToken(token) {
    try {
      const decoded = jwt.verify(token, tokensecret);
      return await DbContext.User.findByPk(decoded.id);
    } catch (error) {
      return null;
    }
  },

  checkAdminRole(user) {
    try {
      return Boolean(user.role);
    } catch (error) {
      return false;
    }
  },
};
