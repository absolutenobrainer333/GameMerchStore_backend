const TokenHandler = require('../utils/TokenHandler')

const AdminMiddleware = (req, res, next) => {
	if (!TokenHandler.checkAdminRole(req.user)) {
		return res.status(403).json({ error: 'Access denied' })
	}
	next()
}

module.exports = AdminMiddleware
