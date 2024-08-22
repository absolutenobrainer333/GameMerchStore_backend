const AuthRepository = require('../repositories/AuthRepository')
const OrderRepository = require('../repositories/OrderRepository')
const TokenHandler = require('../utils/TokenHandler')

module.exports = {
	login: async (req, res) => {
		try {
			const { email, password } = req.body
			const user = await AuthRepository.getByEmailAndPassword(email, password)
			if (!user) {
				return res.status(400).json({ error: 'Invalid email or password' })
			}
			const token = TokenHandler.createToken(user)
			return res.status(200).json({ token })
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
	register: async (req, res) => {
		try {
			const user = req.body
			if (await AuthRepository.checkUserExisted(user)) {
				return res
					.status(409)
					.json({ error: 'Username or email already exists' })
			}

			const newUser = await AuthRepository.register(user)
			return res.status(201).json({ success: 'User successfully registered' })
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' })
		}
	},
}
