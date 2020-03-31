const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port,
    () => console.log(`Example app listening on port : ${port}!`)
)

app.get('/',
    (req, res) => res.send('Welcome! <br><br> <a href="login">Cick here to Login<a>')
)

app.get('/login', (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <head>
        <title>Login</title>
        </head>
        <body>
            <h1>Login<h1>
            <form action="login" method="post">
                ID: <input type="text" name="userid" required><br>
                PW: <input type="password" name="psswd" required>&nbsp&nbsp
                <input type="submit">
            </form>
        </body>
        </html>`
    );
})

let userid = 'abhigyan'
let psswd = 'mypswd'

app.post('/login', (req, res) => {
    if (req.body.userid == userid && req.body.psswd == psswd) {
        res.send(`You're in!`)
        console.log(`User logged in!`);
    }
    else {
        res.send(`${req.body.userid} not found`);
    }
})



// References:

// Hello World in ExpressJS
// https://expressjs.com/en/starter/hello-world.html

// Routing in ExpressJS
// https://expressjs.com/en/starter/basic-routing.html

// Use ExpressJS to get URL and POST parameters
// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
