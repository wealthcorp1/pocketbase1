const bcrypt = require('bcryptjs');

async function generateHash(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Generated Hash:", hashedPassword);
}

// Replace 'mypassword' with the actual password you want to hash
generateHash('NewSecurePass123');
