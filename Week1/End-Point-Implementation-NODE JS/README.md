Assignment

Create an HTTP server that can add and subtract from a number, which we will
call `state`. 

State should be persisted between individual calls and not reset before each
one.

### Rule 1

Your modifications should be limited to the `src` folder. 

### Rule 2

**DO NOT USE EXPRESS.JS**

### Rule 3

You can use other packages, but the server _must_ be implemented using the
built-in `http` module.

## Endpoints to implement

`/state`

Returns the current state in JSON format. When the server starts, this should
return '10'. Example:

```json
{
  "state": 10
}
```

`/add`

Increments state by 1 and returns it JSON format. Example:

```json
{
  "state": 11
}
```

`/subtract`

Decrements state by 1 and returns it JSON format. Example:

```json
{
  "state": 9
}
```

`/reset`

Resets state to 10 and returns it JSON format. Example:

```json
{
  "state": 10
}
```

Any other URL results in an error with status code 404 and response body in JSON
format:

```json
{
  "error": "Not found"
}
```
