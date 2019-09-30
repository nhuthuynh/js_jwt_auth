const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    let hasErrors = false;
    let errors = [];
    const { name, email, password } = req.body;
    
    if(!name) {
        errors = [...errors, { name: 'Name is required.' }];
        hasErrors = true;
    }

    if (!email) {
        errors = [...errors, { email: 'Email is required.' }];
        hasErrors = true;
    }

    if (!password) {
        errors = [...errors, { password: 'Password is required.' }];
        hasErrors = true;
    }

    if (hasErrors && errors.length > 0) {
        res.status(422).json({
            message: 'Invalid input',
            errors
        })
    } else {
        res.status(201).json({
            message: 'User created!',
            errors
        });
    }
});

module.exports = router;