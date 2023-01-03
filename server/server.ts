import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { Todo, Todos } from './types'

// Create an express app
const app = express()

// Set the port for the app to listen on
const port = 8000

// Enable CORS so that the React app can make requests to the API
app.use(cors())

// Parse incoming requests with JSON payloads
app.use(bodyParser.json())

// In-memory data store for the todos
const todos: Todos = {}

// GET /todos: Get a list of all todos
app.get('/todos', (req, res) => {
	// Send the todos as the response
	res.send(Object.values(todos))
})

// POST /todos: Create a new todo
app.post('/todos', (req, res) => {
	// Generate a new id for the todo
	const id = req.body.id

	// Create a new todo from the request body and the new id
	const todo: Todo = { id, ...req.body }

	// Add the todo to the in-memory data store
	todos[id] = todo

	// Send the created todo as the response
	res.send(todo)
})

// PUT /todos/:id: Update an existing todo
app.put('/todos/:id', (req, res) => {
	// Get the todo with the specified id from the in-memory data store
	const todo = todos[req.params.id]

	// If the todo does not exist, return a 404 response
	if (!todo) {
		res.status(404).send()
		return
	}

	// Update the todo with the new data from the request body
	todos[req.params.id] = { ...todo, ...req.body }

	// Send the updated todo as the response
	res.send(todos[req.params.id])
})

// patch /todos/:id/complete: Toggle the complete status of a todo
app.patch('/todos/:id/complete', (req, res) => {
	// Get the todo with the specified id from the in-memory data store
	const todo = todos[req.params.id]

	// If the todo does not exist, return a 404 response
	if (!todo) {
		res.status(404).send()
		return
	}

	// Toggle the complete status of the todo
	todos[req.params.id] = { ...todo, complete: !todo.complete }

	// Send the updated todo as the response
	res.send(todos[req.params.id])
})

// DELETE /todos/:id: Delete a todo
app.delete('/todos/:id', (req, res) => {
	// Get the todo with the specified id from the in-memory data store
	const todo = todos[req.params.id]

	// If the todo does not exist, return a 404 response
	if (!todo) {
		res.status(404).send()
		return
	}

	// Delete the todo from the in-memory data store
	delete todos[req.params.id]

	// Send the deleted todo as the response
	res.send(todo)
})

// Start the server
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})
