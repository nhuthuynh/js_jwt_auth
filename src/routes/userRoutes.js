const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

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

router.post('/login', (req, res, next) => {
    let hasErrors = false ;
    let errors = [];
    const { email = '', password = '' } = req.body;

    if(!email){
        errors.push({'email': 'Email not received'})
        hasErrors = true;
    }

    if(!password) {
        errors.push({'password': 'Password not received'})
        hasErrors = true;
    }

    if(hasErrors) {
        res.status(422).json({
            message: "Invalid input",
            errors: errors
        });
    } else {
        if (email == 'steve.roger@avenger.com' && password == 'assemble') {
            const token = jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' });
            res.status(200).json({
                message: 'Logged in success.',
                token,
                errors
            });
        } else {
            res.status(401).json({
                message: 'User does not exist.'
            });
        }
    }
});

module.exports = router;