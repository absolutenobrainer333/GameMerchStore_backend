const AuthService = require('../../services/AuthService')

module.exports = {
	login: AuthService.login,
	register: AuthService.register,
}
