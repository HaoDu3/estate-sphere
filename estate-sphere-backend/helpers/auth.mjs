import bcrypt from 'bcrypt';

// hashPassword takes a password and returns a promise that resolves to a hashed password

export const hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        // generate a salt with 12 rounds
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
}

export const comparePassword = async (password, hashed) => {
    return bcrypt.compare(password, hashed);
}
