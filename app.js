const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 3000;

const user = 'projetointstreet@gmail.com';
const destino = 'italobm2011@gmail.com';
const pass = 'yqig fubf ksvv iahw';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: user,
            pass: pass
        }
    });

    transporter.sendMail({
        from: user,
        to: destino,
        subject: 'Email from Node.js',
        text: 'Hello World!'
    }).then(info => {
        res.send(info);
    }).catch(error => {
        res.send(error);
    });
});

app.listen(port, () => {
    console.log(`Servidor Rodando http://localhost:${port}`);
});
