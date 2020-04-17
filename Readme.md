# Personal NPM Library for Andrew Zaw

All methods contain documentation, but here is an overview:

## connectToMongoDB(configPath)

Connects to a MongoDB database given a config path. (something like './config')

## hashPassword(password, saltLength [optional])

Hashes a password. Salt length is optional, but default is 10.

## validatePassword(password, hash)

Validates a password given the password and hash.

## to(promise)

Intended to give a better syntax for try/catch. Takes in an asynchronous function, returns [error] if error, returns [null, data] otherwise.

Example without to():

```javascript
try {
  const data = await accessDatabase();
  // some database functionality
  try {
    const serverData = await accessServer();
    // some server functionality
  } catch (serverError) {
    // server error handling
  }
} catch (databaseError) {
  // database error handling
}
```
Example with to():

```javascript
const [databaseError, data] = await accessDatabase();
if (databaseError) {
  // error handling
}
// some database functionality
const [serverError, serverData] = await to(accessServer());
if (serverError) {
  // more error handling
}
// some server functionality
```
