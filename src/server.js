const express = require('express')
const cors = require('cors')
const { sequelize } = require('./dbcontext/sequelize')
const routerProduct = require('./routes/UserRoute/routerProduct')
const routerAuth = require('./routes/UserRoute/routerAuth')
const routerOrder = require('./routes/UserRoute/routerOrder')
const routerProductManagement = require('./routes/AdminRoute/routerProductManagement')
const routerGeneral = require('./routes/routerGeneral')

const app = express()

sequelize.authenticate().then(async () => {
	app.listen(3001, () => {
		console.log(`App is running on port 3001`)
	})
})
app.use(cors())
app.use(express.json())

// General Route
app.use('/general', routerGeneral)

// User Route
app.use('/product', routerProduct)
app.use('/auth', routerAuth)
app.use('/order', routerOrder)

// Admin Route
app.use('/productManagement', routerProductManagement)

app.use('/*', (req, res) => res.status(404).json({ error: 'Page not found' }))
