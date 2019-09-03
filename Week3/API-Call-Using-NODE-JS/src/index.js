'use strict';

// TODO: Write the homework code in this file
const express = require('express');
const app = express();
const Joi = require('@hapi/joi'); // input validation
app.use(express.json()); // applying middleware for post req
const todos = [
  { id: 1, description: 'Wake Up' },
  { id: 2, description: 'Brush Teeth' },
  { id: 3, description: 'Drunk Coffee' },
];
// GET (Read)
app.get('/api/todos', (req, res) => {
  res.send(todos);
});

app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('The todo with the given ID was not found..');
  res.send(todo);
});
// DELETE (Clear) Todos
app.delete('/api/todos/:id', (req, res) => {
  // If not existing, return 404
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('The todo with the given ID was not found..');
  // Otherwise delete it
  const index = todos.indexOf(todo);
  todos.splice(index, 1); //Go to the index, and remove one object.
  // Then return the same todo that was deleted.
  res.send(todo);
});
// POST (MarkAsDone) Todos
app.post('/api/todos', (req, res) => {
  const { error } = validateToDo(req.body); // Equal to result.error
  if (error) {
    // Bad request
    return res.status(400).send(error.details[0].message);
  }
  const todo = {
    id: todos.length + 1,
    description: req.body.description,
  };
  todos.push(todo);
  res.send(todo);
});
// Utility Function to handle input validation:
function validateToDo(todo) {
  const schema = {
    description: Joi.string()
      .min(3)
      .required(),
  };
  return Joi.validate(todo, schema);
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
