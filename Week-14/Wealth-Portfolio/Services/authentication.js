const client = require('../Database/postgreSQL')
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {

    let query = `select * from signup( p_name:='${req.body.name}',
                                       p_address:='${req.body.address}',
                                       p_email:='${req.body.email}',
                                       p_contact:='${req.body.contact}',
                                       p_password:='${req.body.password}');`


    client.query(query, (err, result) => {
        if (!err) {
            res.send(result.rows)
        }
        else {
            res.send(err);
        }
    })
}

exports.login = (req, res) => {

    // res.send(`select 1 from users where email = '${req.body.username}' and password = '${req.body.password}'`);
    client.query(`select * from users where email = '${req.body.username}' and password = '${req.body.password}'`, (err, result) => {
        if (!err) {
            // res.send(result.rows[0].email)
            if (result.rows.length > 0) {

                let token = jwt.sign(
                    { userId: result.rows[0].userid, email: result.rows[0].email },
                    "secretuserkey",
                    { expiresIn: "1h" }
                )

                let response = {
                    'response': 200,
                    'message': 'logged in Successfully',
                    'email': result.rows[0].email,
                    'token': token
                }
                res.send(response);
            }
            else {
                let response = {
                    'response': 404,
                    'message': 'Incorrect Username or Password'
                }

                res.send(response);
            }
        }
        else {
            res.send(err);
        }
    })

}
