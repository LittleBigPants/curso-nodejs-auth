const jwt = require('jsonwebtoken');

const secret = 'mycat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwMzcxMzYzOH0.WcI441zOTVz0gqZss5oQ7qB7Tu5K12wIDqQcr4mz9lU'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
