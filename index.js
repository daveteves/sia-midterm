// Package imports
const express = require('express')

// Package Routes
const users = require('users.routes')
const products = require('products.routes')
const orders = require('orders.routes')
const categories = require('categories.routes')
const reviews = require('reviews.routes')
const notifications = require('notifications.routes')

const app = express()
const port = 1234

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/me', require('./routes/users.routes'))

app.use('/', require('./routes/products.routes'))
app.use('/api/products', require('./routes/products.routes'))
app.use('/api/me', require('./routes/products.routes'))

app.use('/', require('./routes/orders.routes'))
app.use('/api/orders', require('./routes/orders.routes'))
app.use('/api/me', require('./routes/orders.routes'))

app.use('/', require('./routes/categories.routes'))
app.use('/api/categories', require('./routes/categories.routes'))
app.use('/api/me', require('./routes/categories.routes'))

app.use('/', require('./routes/reviews.routes'))
app.use('/api/reviews', require('./routes/reviews.routes'))
app.use('/api/me', require('./routes/reviews.routes'))

app.use('/', require('./routes/notifications.routes'))
app.use('/api/notifications', require('./routes/notifications.routes'))
app.use('/api/me', require('./routes/notifications.routes'))

app.listen(() => {
	console.log('Server is running on http://localhost:${port}')
})
