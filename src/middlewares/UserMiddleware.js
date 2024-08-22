const TokenHandler = require('../utils/TokenHandler')

const UserMiddleware = async (req, res, next) => {
	const authHeader = req.headers['authorization']
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'Unauthorized' })
	}
	const user = await TokenHandler.getUserFromToken(authHeader.split(' ')[1])
	if (!user) {
		return res.status(401).json({ error: 'Unauthorized' })
	}
	req.user = user
	next()
}

module.exports = UserMiddleware
