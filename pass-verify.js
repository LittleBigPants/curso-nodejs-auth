const bcrypt = require('bcrypt');

async function verifyPasword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$3TJnFfMTJbhI8qa11F1jQOpywS.qTiu0XkbDEaUCDWAcf64n6KkLi';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPasword();
